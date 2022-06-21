const {TwitterApi} = require("twitter-api-v2");
const path = require('path')
const dotenv = require('dotenv')
require('dotenv').config();
// Load config
dotenv.config({ path: './config.env' })

const client = new TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_SECRET_KEY,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_TOKEN_SECRET
})

const rwClient = client.readWrite

module.exports = rwClient