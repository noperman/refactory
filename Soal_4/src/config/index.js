const dotenv = require("dotenv");

const envFound = dotenv.config();
// console.log(process.env.PORT)

process.env.NODE_ENV = process.env.NODE_ENV || "development";
// console.log(process.env.NODE_ENV)

const config = {
  port: process.env.PORT,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  oauthUrl: process.env.OAUTH_URL,
  apiUrl: process.env.API_URL,
}
// console.log(config)

if (envFound.error) {
  // console.log(envFound.error)
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = { config };
