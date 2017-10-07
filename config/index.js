'use strict';

const currentEnv = process.env.NODE_ENV || 'development'
    , envFilePath = __dirname + "/env/" + currentEnv + ".js"
    , isThere = require('is-there')

var environmentOptions
    , projectName

if(!isThere(envFilePath))
  console.log("Environment file missing")
else
  environmentOptions = require(envFilePath) 
  projectName = environmentOptions.projectName || "hid-assignment-final"
module.exports = {
  port: environmentOptions.server.port,
  databaseUrl: environmentOptions.database.path + environmentOptions.database.name,
  databaseHost: environmentOptions.database.host,
  databasePort: environmentOptions.database.port,
  databaseName: environmentOptions.database.name,
  appDir: __dirname.match(new RegExp("(.*\/("+ projectName +")\/)(.*)$"))[1]
}  