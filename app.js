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
  const tag = req.params.tag
  if (!data.tags.includes(tag)) {
    res.status(404).send('sorry, that tag does not exist')
  } else {
    const matching = data.songs.filter(song => song.tags.includes(tag))
    res.status(200).send(matching)
  }
})

app.use((req, res, next) => {
  res.status(404).send('sorry can not find that')
})

// app.use((err, req, res, next) => {
//   const status = err.status || 500
//   res.status(status).json({ error: err })
// })

app.listen(port, () => console.log(`party on port ${port}`))