const express = require('express')
const app = express()
const api = require('./routes/api')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', api)

app.use('/public', express.static(__dirname + '/public'))

app.listen(4321, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Server started at : 4321')
    }
})