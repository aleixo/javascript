const request = require ('request');

var Weather = function () {
    function fnGetWeather (city, callback) {
        return new Promise((resolve, reject) => {
            var lat = city.latitude;
            var lng = city.longitude;
            request({
                url: `https://api.darksky.net/forecast/e9aff2949f377d646bddfb19e75793df/${lat},${lng}`,            
                json: true
            }, (error, response, body) => {
                if (!error && response.statusCode === 200) {                    
                    resolve({
                        temperature: body.currently.temperature,
                        apparentTemperature: body.currently.apparentTemperature
                    });              
                } else {
                    reject('Unable to fetch weather.');
                }
            })
        });        
    }
    return {
        getWeather: fnGetWeather
    }
}

module.exports = Weather();

