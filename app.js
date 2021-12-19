const express = require('express')
const helmet = require('helmet')
const http = require('http')
const path = require('path')
const app = express()

const appConfig = require('./app.config.js')

app.use(helmet())

//Express Route File Requires
const __upload = require('./api/upload.js')
const fileUpload = require('express-fileupload')

app.use(express.static(path.resolve(__dirname, 'src/public')))
app.use(fileUpload())

// Express Routing
app.use('/api/upload', __upload)

//Error handler
app.use((err, req, res, next) => {
    if(err.status === 500) {
        res.status(500).send(err.message);
    }
    else {
        res.status(400).send('An error occured');
    }
    });

http.createServer(app).listen(appConfig.port)

module.exports = app
