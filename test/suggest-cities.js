const expect = require('chai').expect
    , request = require('request')
    , assert = require('chai').assert

describe("Sugggest Cities Tests", function() {
  it("no.of cities should not exceed the expected atmost count", function(done) {
    var nameStartsWith = "anan"
    var atmost = 3
    var getCitiesUrl = "http://localhost:3000/suggest_cities?start="+nameStartsWith+ "&atmost="+atmost
    
    var reqObject = {
      url:  getCitiesUrl
    }

    request.post(reqObject, function (error, response, body) {
      expect(response['headers']['content-type']).to.be.a('string')
      expect(response['headers']['content-type']).to.equal("text/plain; charset=utf-8")
      var citiesArray = body.split("\n")
      var finalCitiesCount = citiesArray.length - 1
      assert.isAtMost(finalCitiesCount, atmost, "No of cities count is atmost 3")
      done()
    })

  })


  it("city name should start with given starting letters", function(done) {
    var nameStartsWith = "anan"
    var atmost = 3
    var getCitiesUrl = "http://localhost:3000/suggest_cities?start="+nameStartsWith+ "&atmost="+atmost
    
    var reqObject = {
      url:  getCitiesUrl
    }

    request.post(reqObject, function (error, response, body) {
      var citiesArray = body.split("\n")
      var finalCities = citiesArray.slice(0, citiesArray.length-1)
      finalCities.forEach(function(city) {
        expect(city.toLowerCase().indexOf(nameStartsWith.toLowerCase())).to.equal(0)
      })
      done()
    })

  })

})