'use strict'

const express = require('express')
const docs = require('./docs')

const router = express.Router()

router.put('/docs', (req, res, next) => {
  docs.insert(req.body, (err, newDoc) => {
    err && next(err)
    res.status(200).send()
  })
})

router.get('/docs', (req, res, next) => {
  docs.find(req.query, (err, docs) => {
    err && next(err)
    res.status(200).send(docs)
  })
})

module.exports = router
