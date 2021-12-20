const express = require('express')
const router = express.Router();
const createError = require('http-errors');
const fs = require('fs').promises;
const path = require('path');
const csv = require('fast-csv');

router.post('/', async (req, res, next) => {

    const directory = path.resolve(__dirname, '../processed/');

    try {
        //empty folder
        for (const file of await fs.readdir(directory)) {
            await fs.unlink(path.join(directory, file));
          };

        //Store uploaded csv file to top directory
        const storedFile = await fs.writeFile('incoming.csv', req.files.file.data);

        //Parse csv file
        let incomingCsvData = [];
        csv.parseFile(storedFile)
        .on('error', error => {
            next(createError(500, error))
            return
        })
        .on('data', (row) => {
            incomingCsvData.push(row);
        })
        //Process parsed csv file data
        .on('end', (rowCount) => {
            //Remove csv header row
            const incomingCsvDataHeaderRow = incomingCsvData.shift();
            
            //Arrange enrollee's by insurance into object of arrays
            let processingObject = {};
            for(let x = 0; x < incomingCsvData.length; x++) {
                const enrolleeData = incomingCsvData[x];
                const insuranceCompany = incomingCsvData[x][4];

                if(!insuranceCompany) {
                    continue;
                } else if(processingObject.hasOwnProperty(insuranceCompany)) {
                    processingObject[insuranceCompany].push(enrolleeData)
                } else {
                    processingObject[insuranceCompany] = [];
                    processingObject[insuranceCompany].push(enrolleeData);
                }
            }

            //Remove duplicates from each insurance array
            let newArray = [];
            for(const currentInsurance in processingObject) {
                removeDuplicateLoop:
                for(let y = 0; y < currentInsurance.length; y++) {
                    if(newArray.indexOf(processingObject[currentInsurance][y]) !== -1) {
                        //If row already exists
                        continue removeDuplicateLoop;
                    } else if(processingObject[currentInsurance][y] && newArray.findIndex((element) => element[0] === processingObject[currentInsurance][y][0] && Number(element[3].trim()) < Number(processingObject[currentInsurance][y][3].trim())) !== -1) {
                        //If row's version is less than incoming row's version
                        const newArrayIndex = newArray.findIndex((el) => el[0] === processingObject[currentInsurance][y][0]);
                        newArray[newArrayIndex] = processingObject[currentInsurance][y];
                    } else if(processingObject[currentInsurance][y] && newArray.findIndex((element) => element[0] === processingObject[currentInsurance][y][0] && Number(element[3].trim()) >= Number(processingObject[currentInsurance][y][3].trim())) !== -1) {
                        //If row's version is greater or equal to incoming row's version
                        continue removeDuplicateLoop;
                    } else {
                        newArray.push(processingObject[currentInsurance][y])
                    }
                }
                //Sort by last name then first name
                const sortFunction = (a, b) => {
                    const sortLastName = a[2] === b[2]? 0: a[2] < b[2]? -1: 1;
                    if(sortLastName !== 0) {
                        return sortLastName
                    }
                    return a[1] === b[1]? 0: a[1] < b[1]? -1: 1;
                }
                newArray.sort(sortFunction);

                //Reassign insurance row with the new non-duplicate row
                processingObject[currentInsurance] = newArray;
                newArray = [];

                //Insert header row
                const finalProcessedRow = processingObject[currentInsurance].unshift(incomingCsvDataHeaderRow);

                //Create insurance csv file and move to 'processed' folder
                csv.writeToPath(path.resolve(__dirname, `../processed/${currentInsurance}.csv`), finalProcessedRow)
                    .on('error', (error) => {
                        next(createError(500, error))
                        return
                    })
            }
            //Respond with number of rows processed
            res.send({uploadResponse: `${rowCount} rows processed successfully!`});
        });

    } catch(e) {
        next(createError(500, e))
    }
});

module.exports = router
