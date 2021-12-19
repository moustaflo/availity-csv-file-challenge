const express = require('express')
const router = express.Router();
const createError = require('http-errors');
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

router.post('/', async (req, res, next) => {
    let incomingCsvData = [];
    let incomingCsvDataHeaderRow; 
    let processingObject = {};

    const directory = path.resolve(__dirname, '../processed/');
    
    //empty folder
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
                incomingCsvDataHeaderRow = incomingCsvData.shift();
                
                //Arrange enrollee's by insurance
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
                //Create csv files by insurance
                for(const currentInsurance in processingObject) {
                    //Sort function
                    const sortFunction = (a, b) => {
                        const sortLastName = a[2] === b[2]? 0: a[2] < b[2]? -1: 1;
                        if(sortLastName !== 0) {
                            return sortLastName
                        }
                        return a[1] === b[1]? 0: a[1] < b[1]? -1: 1;
                    }
                    const sortedCurrentRows = processingObject[currentInsurance].sort(sortFunction);
                    sortedCurrentRows.unshift(incomingCsvDataHeaderRow)
                    csv.writeToPath(path.resolve(__dirname, `../processed/${currentInsurance}.csv`), sortedCurrentRows)
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
