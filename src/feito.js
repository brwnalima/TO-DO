const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Porta: ${port}`)
})