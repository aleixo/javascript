const request = require('request');

var Geocode = function () {
    function fnGeocodeAddress(address, callback) {
        return new Promise((resolve, reject) => {
            const encodedStreet = encodeURIComponent(address);    
            request({
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedStreet}`,
                json: true
            }, (error, response, body) => {           
                if (error) {        
                    reject('Unable to connect to Google servers');                      
                } else if (body.status === 'ZERO_RESULTS') {                
                    reject('Unable to find that address');
                } else if (body.status === 'OK') {
                    var results = {
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    }
                    resolve(results);                
                }    
            });
        });  
    }    

    return {
        geocodeAddress: fnGeocodeAddress
    }
}

module.exports = Geocode();