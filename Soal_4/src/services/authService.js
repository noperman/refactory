const config = require("../config");

// console.log(config.config.clientId)
function redirectUri() {
  return `${config.config.oauthUrl}/authorize?client_id=${config.config.clientId}`;
}

module.exports = {
  redirectUri: redirectUri
}
