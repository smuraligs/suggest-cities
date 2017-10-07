require('directory')(__dirname +'/lib/', function (module, name) {
    exports[name] = module
})