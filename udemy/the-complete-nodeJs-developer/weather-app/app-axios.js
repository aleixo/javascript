const yargs = require('yargs');
const axios = require('axios');
//e9aff2949f377d646bddfb19e75793df
//%20 is the special char for spaces
//user will not print encoded message in our endpoin

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encodedStreet = encodeURIComponent(argv.address);    
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedStreet}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find address.')
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lat; 
    var weatherUrl =  `https://api.darksky.net/forecast/e9aff2949f377d646bddfb19e75793df/${lat},${lng}`;  

    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It´s currently ${temperature} and feels like ${apparentTemperature}`);
}).catch((e) => {
    console.log(e);
});