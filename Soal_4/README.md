# CodeDebugging

Code debugging built with NodeJs
FIXED
* dotenv file name must be like .env not env
* dotenv.config() at src/config/index.js must be at second line
* config.port at app.js must be config.config.port because port is saved in config object
* module.export at src/services/authServices.js must be like module.exports
* 