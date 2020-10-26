import React, { useEffect, useState } from 'react';
import TweetForm from './TweetForm/TweetForm';
import TweetList from './TweetList/TweetList';
import Banner from './banner/Banner';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const base_url = 'http://localhost:3001';

function App() {

  return (
      
    <Router>
      <div className="App">

    
          <Route path="/" exact component={Banner}/>
          <Route path="/" exact component={TweetList}/>
          <Route path="/tweetform" component={TweetForm} />
       
      </div>
    </Router>
  );
}

export default App;
