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

function tick(){
    var hours = new Date().getHours();
    if (hours == "00" || hours == "12"){
        tweet()
    }
}

setInterval( tick, 10000 );
