'use strict'

const express = require('express')
const docs = require('./docs')

const router = express.Router()

// Insert documents
router.post('/docs', (req, res, next) => {
  docs.insert(req.body, (err) => {
    if (err) return next(err)
    res.status(200).send()
  })
})

// Update document by ID
router.put('/docs/:id', (req, res, next) => {
  docs.update({ _id: req.params.id }, req.body, {}, (err) => {
    if (err) return next(err)
    res.status(200).send()
  })
})

// Get document by ID
router.get('/docs/:id', (req, res, next) => {
  docs.findOne({ _id: req.params.id }, (err, doc) => {
    if (err) return next(err)
    if (!doc) return res.status(404).send()
    res.status(200).send(doc)
  })
})

// Find documents
router.get('/docs', (req, res, next) => {
  docs.find(req.query, (err, docs) => {
    if (err) return next(err)
    res.status(200).send(docs)
  })
})

module.exports = router
