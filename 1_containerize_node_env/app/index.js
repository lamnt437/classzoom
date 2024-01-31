const express = require('express')
const bodyParser = require('body-parser')

// init express app
const app = express()
const port = 4321

// body parser
app.use(bodyParser.urlencoded({extended: true}))

// init routes
app.get('/', (req, res) => {
    console.log("req.body", req.body)
    res.status(200).send(req.body)
})

// init server listening
app.listen(port, () => {
    console.log("Express server is running on port", port)
})