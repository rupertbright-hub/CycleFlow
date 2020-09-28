import React, { useEffect, useState } from 'react';
import Nav from './Nav/Nav';
import TweetForm from './TweetForm/TweetForm';
import TweetList from './TweetList/TweetList';
import Footer from './Footer/footer';
import Banner from './banner/Banner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const base_url = 'http://localhost:3001';
function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch(base_url + '/tweets')
      .then((res) => res.json())
      .then((tweets) => setTweets(tweets));
  }, []);

  console.log(tweets);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Banner} />
          <Route path="/tweetform" component={TweetForm} />
        </Switch>
        <Route
            path="/tweetlist"
            component={(props) => <TweetList {...props} tweets = {tweets} />}
          />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
