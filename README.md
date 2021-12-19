# availity-csv-file-challenge

Availity receives enrollment files from various benefits management and enrollment solutions (I.e. HR platforms, payroll platforms).
Most of these files are typically in EDI format.  However, there are some files in CSV format.
For the files in CSV format, write a program that will read the content of the file and separate enrollees by insurance company in its own file.
Additionally, sort the contents of each file by last and first name (ascending).
Lastly, if there are duplicate User Ids for the same Insurance Company, then only the record with the highest version should be included. 
The following data points are included in the file:

•	User Id (string)
•	First Name (string) 
•	Last Name (string)
•	Version (integer)
•	Insurance Company (string)

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm run debug`

Runs the app in production mode.\
It correctly bundles React in production mode and optimizes the build for the best performance.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## CSV File Locations

When a csv is uploaded it will be stored at /'incoming.csv'

After the uploaded csv file is process, the produced files are stored in the /'processed' folder

## Sample File

To test the function use the sample file stored in the 'sample' folder.