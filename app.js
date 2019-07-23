// Express
const express = require('express')
const routes = require('./routes')

// Init express app
const app = express()

app.use(express.json())

// Routes
app.use('/', routes)

module.exports = app
