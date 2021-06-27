const route = require('express').Router()
const queryMainUrl = require('../db/query-main-url')
const insertUrl = require('../db/insert-url')

async function fun(shortCode) {
    const url = await queryMainUrl.task(shortCode)
    console.log(url)
}

route.get('/:shortCode', (req, res) => {
    const shortCode = req.params.shortCode;

    (async (shortCode) => {
        try {
            const url = await queryMainUrl.task(shortCode)

            if (url) {
                res.json(url)
            } else {
                res.json({ err: 'url not found' })
            }

        } catch (err) {
            if (err) {
                console.error(err)
            }
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