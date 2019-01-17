const express = require('express')
const app = express()
const port = 3003
const data = require('./data.json')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.static('public')) // look it up

app.get('/data', (req, res, next) => {
  res.status(200).send({
    "message": "success!",
    "data": data
  })
})

app.get("/:tag", (req, res, next) => {
  res.status(200).send(req.params.tag)
})

app.listen(port, () => console.log(`party on port ${port}`))