var express = require('express')
var config = require(__dirname + '/config')
var appDir = config.appDir
var router = express.Router()

var citiesController = require(appDir + 'app/controllers/cities')

router.use("/suggest_cities", citiesController.suggestCities)

module.exports = router