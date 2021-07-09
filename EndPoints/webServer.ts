const express = require('express')
const app = express()
const port = 23450

app.get('/departureBoards', (req, res) => {
  res.send()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})