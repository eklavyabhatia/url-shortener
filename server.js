const express = require('express')
const app = express()
const shortToLong = require('./routes/api1/shortToLong')

app.use('/api1', shortToLong)

app.listen(4321, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Server started at : 4321')
    }
})