const express = require('express')
const router = express.Router();
const createError = require('http-errors');
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

router.post('/', (req, res, next) => {

    const directory = path.resolve(__dirname, '../processed/');
    
    //Empty folder
    fs.readdir(directory, (err, files) => {
    if (err) {
        next(createError(500, err));
        return
    }
    for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
        });
      }
    });

    //Store and parse csv file
    let incomingCsvData = [];
    fs.writeFile('incoming.csv', req.files.file.data, (err) => {
        if (err) {
            next(createError(500, err));
            return
        } else {
            fs.createReadStream('incoming.csv')
            .pipe(csv.parse())
            .on('error', error => {
                next(createError(500, error))
                return
            })
            .on('data', (row) => {
                incomingCsvData.push(row);
            })
            .on('end', (rowCount) => {
                const incomingCsvDataHeaderRow = incomingCsvData.shift();
                
                //Arrange enrollee's by insurance in object
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
                //Remove duplicates
                let newArray = [];
                for(const currentInsurance in processingObject) {
                    removeDuplicateLoop:
                    for(let y = 0; y < currentInsurance.length; y++) {
                        if(newArray.indexOf(processingObject[currentInsurance][y]) !== -1) {
                            continue removeDuplicateLoop;
                        } else if(processingObject[currentInsurance][y] && newArray.findIndex((element) => element[0] === processingObject[currentInsurance][y][0] && Number(element[3].trim()) < Number(processingObject[currentInsurance][y][3].trim())) !== -1) {
                            const newArrayIndex = newArray.findIndex((el) => el[0] === processingObject[currentInsurance][y][0]);
                            newArray[newArrayIndex] = processingObject[currentInsurance][y];
                        } else if(processingObject[currentInsurance][y] && newArray.findIndex((element) => element[0] === processingObject[currentInsurance][y][0] && Number(element[3].trim()) >= Number(processingObject[currentInsurance][y][3].trim())) !== -1) {
                            continue removeDuplicateLoop;
                        } else if(newArray.indexOf(processingObject[currentInsurance][y]) === -1) {
                            newArray.push(processingObject[currentInsurance][y])
                        } else {
                            continue removeDuplicateLoop;
                        }
                    }
                    //Sort by last name then first name
                    const sortFunction = (a, b) => {
                        const sortLastName = a[2] === b[2]? 0: a[2] < b[2]? -1: 1;
                        if(sortLastName !== 0) {
                            return sortLastName;
                        }
                        return a[1] === b[1]? 0: a[1] < b[1]? -1: 1;
                    }
                    //Replace insurance array with new non-duplicate array
                    processingObject[currentInsurance] = newArray.sort(sortFunction);
                    newArray = [];

                    //Insert header row
                    processingObject[currentInsurance].unshift(incomingCsvDataHeaderRow);

                    //Create csv file and move to the 'processed' folder
                    csv.writeToPath(path.resolve(__dirname, `../processed/${currentInsurance}.csv`), processingObject[currentInsurance])
                        .on('error', (error) => {
                            next(createError(500, error))
                            return
                        })
                }

                res.send({uploadResponse: `${rowCount} rows processed successfully!`});
            });
        }
      });
})

module.exports = router
