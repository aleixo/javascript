const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

const MicroservicesLoader = require('./MicroservicesLoader');
const microservicesLoader = new MicroservicesLoader();
const services = microservicesLoader.loadModules('./resources/', 'router');
const responseMiddleware = microservicesLoader.loadModules('./middlewares', 'responsemiddleware');          

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

services.length > 0 && services.forEach( (Service) => {            
    const router = new Service();   
    app.use(router.entry, router.configuredRouter)
});

const middleware = new responseMiddleware();
app.use(middleware.responseParser);
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3333, () => {
    console.log('ALL SET GO')
});

module.exports = app;

