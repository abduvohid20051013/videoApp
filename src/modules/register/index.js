const express = require('express')
const { GET, POST, checkToken } = require('./controller')
const registerRoute = express.Router()
registerRoute.route('/register')
    .get(checkToken, GET)
    .post(POST)

module.exports = registerRoute


// const registerRoute = require("express").Router()
// const { POST, GET, GET_AUTH } = require('./controller.js')
// registerRoute.route('/register')
//     .post(POST)
//     .get(GET_AUTH)

// registerRoute.route('/users')
//     .get(GET)


// module.exports = registerRoute