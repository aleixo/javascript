const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address).then( (location) => {
    console.log(JSON.stringify(location, undefined, 2));
    return weather.getWeather(location)
}).then( (weather) => {
    console.log(JSON.stringify(weather, undefined, 2));
}).catch((errorMessage) => {
    console.log(errorMessage);
});

