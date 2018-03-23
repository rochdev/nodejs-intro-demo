'use strict'

const express = require('express')
const docs = require('./docs')

const router = express.Router()

router.put('/docs', (req, res, next) => {
  docs.insert(req.body, (err, newDoc) => {
    if (err) return next(err)
    res.status(200).send()
  })
})

router.get('/docs', (req, res, next) => {
  docs.find(req.query, (err, docs) => {
    if (err) return next(err)
    res.status(200).send(docs)
  })
})

module.exports = router
