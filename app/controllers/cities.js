'use strict'
const config = require(__dirname + '/../../config')
  , appDir = config.appDir
  , db = require(appDir + '/config/db').client
  , mongodb = require('mongodb')
  , models = require(appDir + '/app/models')
  , cityModel = models.city
  var log = console.log

module.exports.suggestCities = function (req, res, next) {
  var searchText = req.query.start
    , pageLength = parseInt(req.query.atmost)
    , pageNum = parseInt(req.query.page) || 1
    , regExp = new RegExp('^' + searchText, 'i')

    var params = {}
    params.selection = {name:regExp}
    params.projection = {name:1, _id:0}
    params.skip = (pageNum-1)*pageLength
    params.limit = pageLength
    params.sort = {hits:-1}
    params.db = db

  cityModel.getCities(params).then(function(suggestedCities){
    var outputString = "";
    suggestedCities.forEach(function(city) {
      outputString += city.name + "\n";
    })
    res.setHeader('content-type', 'text/plain');
    res.send(outputString)
  }, function(err) {
      console.log("Err in DB response")
  })
}