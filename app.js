const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes/professional')

const app = express()

app.use(bodyParser.json()) // application/json (in header)

// Solving CORS errors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use(routes)

app.listen(8080)