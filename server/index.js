const express = require('express');
const Twit = require('twit');
const app = express();
const router = require('express').Router();
const cors = require('cors');
const dotenv = require('dotenv').config();

app.use(cors());
app.use(router);

app.listen(3001, () => console.log('Server running'));

var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

router.get('/tweets', function (req, res, next) {
  T.get('statuses/mentions_timeline')
    .then(function (result) {
      res.send(result.data);
    })
    .catch(function (err) {
      console.log('caught error', err.stack);
      res.send({ error: err });
    });
});

// var stream = T.stream('statuses/filter', { track: ['@InspectorRoute']})
// stream.on('tweet', function (tweet) {
//     console.log(tweet)
// })

module.exports = router;
