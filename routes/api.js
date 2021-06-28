const route = require('express').Router()
const queryMainUrl = require('../db/query-main-url')
const insertUrl = require('../db/insert-url')

async function getUrlInstanceFromShortCode(shortCode, flag) {
    try {
        const url = await queryMainUrl.task(shortCode)
        if (flag) {

            url.counter = url.counter + 1;
            await url.increment('counter')
        }

        return url

    } catch (err) {
        if (err) {
            console.error(err)
        }
    }
}

route.get('/:shortCode', (req, res) => {
    const shortCode = req.params.shortCode;

    (async (shortCode) => {
        const url = await getUrlInstanceFromShortCode(shortCode,true)

        if (url) {
            res.json(url)
        } else {
            res.json({ 'message': 'short link does not exist' })
        }
    })(shortCode)



})

route.get('/count/:shortCode', (req, res) => {
    const shortCode = req.params.shortCode;

    (async (shortCode) => {
        const url = await getUrlInstanceFromShortCode(shortCode,false)

        if (url) {
            res.json({ count: url.counter })
        } else {
            res.json({ 'message': 'short link does not exist' })
        }
    })(shortCode)



})


route.post('/', (req, res) => {
    console.log(req.body)
    const mainUrl = req.body.mainUrl;
    (async (mainUrl) => {
        try {
            await insertUrl.task(mainUrl)
            res.json({ message: 'success' })
        } catch (err) {
            console.error(err)
        }
    })(mainUrl)
})


module.exports = route