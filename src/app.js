'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const docs = require('./docs')

const app = express()

app.use(bodyParser.json())

app.put('/docs', (req, res) => {
  docs.insert(req.body, (err, newDoc) => {
    if (err) {
      console.error(err)
      res.status(500).send()
    }

    res.status(200).send()
  })
})

app.get('/docs', (req, res) => {
  docs.find(req.query, (err, docs) => {
    if (err) {
      console.error(err)
      res.status(500).send()
    }

    res.status(200).send(docs)
  })
})

module.exports = app
