const express = require('express')
const { connectedDb } = require("./lib/mongoose");

const app = express()

app.use(express.json())
    .use(express.urlencoded({ extended: false}))

connectedDb;
module.exports = app;
