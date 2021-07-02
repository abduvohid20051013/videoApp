const express = require('express')
const { GET, POST } = require('./controller')

const downloadRoute = express.Router()
downloadRoute.route('/admin')
    .get(GET)
    .post(POST)

module.exports = downloadRoute