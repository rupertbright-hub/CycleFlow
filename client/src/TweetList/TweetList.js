import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Flashcard from '../modal/flashcard';
// import Modal from 'react-modal';
// import Flashcard from '../modal/flashcard';

function TweetList() {
    const base_url = 'http://localhost:3001';
    
  const removeURL = (text) => {
    return text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
  };

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch(base_url + '/tweets')
      .then((res) => res.json())
      .then((tweets) => setTweets(tweets.filter(el => el.entities.media)));
  }, []);

    return tweets.map((tweet, index) =>  (
        <div className='w-1/5'>
    <Flashcard index={index} tweet={tweet}/>
    </div>

))

}

export default TweetList;
