import React, { useEffect, useState } from 'react';
import Nav from './Nav/Nav';
import TweetForm from './TweetForm/TweetForm';
import TweetList from './TweetList/TweetList';
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

//   console.log(tweets);
//   const match = useRouteMatch('/');
//   console.log(match)


  return (
      
    <Router>
      <div className="App">

     
      <Nav className=''/>
        <Switch>
          <Route path="/" exact component={Banner} />
          <Route path="/tweetform" component={TweetForm} />
        <Route
            path="/tweetlist"
            component={(...props) => <TweetList {...props} tweets = {tweets} />}
          />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
