const Q = require('q')
    , _ = require('lodash')
    , collectionName = "cities"

module.exports.getCities = function (params) {
  var q = Q.defer()
    , db = params.db

  if(_.isNil(db)) {
    q.reject("DB IS NOT AVAILABLE");
    return q.promise
  }
  
  db.collection(collectionName).find(params.selection, params.projection).skip(params.skip).limit(params.limit).sort(params.sort)
    .toArray(function(err, data) {
      if(err) { 
        options.error = err
        q.reject("Err in DB operation")
        return q.promise
      }
      q.resolve(data)
    })
  return q.promise
}