import React, { useEffect, useState } from 'react';
import Flashcard from '../modal/flashcard';


function TweetList() {
    const base_url = 'http://localhost:3001';

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch(base_url + '/tweets')
      .then((res) => res.json())
      .then((tweets) => setTweets(tweets.filter(el => el.entities.media)));
  }, []);

    return tweets.map((tweet, index) =>  (
        <div className='w-screen md:w-1/2 xl:w-1/5 mt-10'>
    <Flashcard index={index} tweet={tweet}/>
    </div>

))

}

export default TweetList;
