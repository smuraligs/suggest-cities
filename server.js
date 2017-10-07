var config = require(__dirname + '/config')
  , express = require("express")
  , app = express()
  , router = express.Router()
  , appDir = config.appDir
  , db = require(appDir + '/config/db.js')
  

app.set('port', process.env.PORT || config.port)

db.init(function(err) {
  var server =  app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + server.address().port)
  })  
  app.use('/', require(appDir + '/routes'))
})
