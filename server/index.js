const express = require('express');
const Twit = require('twit');
const app = express();
const router = require('express').Router();
const cors = require('cors');

app.use(cors());
app.use(router);

app.listen(3001, () => console.log('Server running'));

var T = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
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

module.exports = router;
