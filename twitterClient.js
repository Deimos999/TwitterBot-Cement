const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "HEUKi3XiD3FDwXCrrVQrfef3y",
    appSecret: "FWPOnsQtqOFWVvCjAyLRePk5odQUBQ3sdoppZWYyDYJuVeeMUd",
    accessToken: "1539015920957497345-bs7udyHGsiVvxcCk0BWG7g8xlhNRuB",
    accessSecret: "9AuzQ3FdijBb7ywaQF25vdPuoDhVXJsjv8VEZnfcHgwXE"
})

const rwClient = client.readWrite

module.exports = rwClient