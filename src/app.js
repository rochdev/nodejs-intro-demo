'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const errorMiddleware = require('./middleware/error')

const app = express()

app.use(bodyParser.json())
app.use(router)
app.use(errorMiddleware)

module.exports = app
