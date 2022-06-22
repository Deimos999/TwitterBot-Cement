const client = require("./twitterClient.js");

const tweet = async () => {
  try {
    const mediaId = await client.v1.uploadMedia('image.jpg');
     const newTweet = await client.v2.tweet({media: {media_ids: [mediaId]}} );
     return newTweet
  } catch (e) {
    console.log(e);
  }
};

setInterval( tweet, 3600000 );
