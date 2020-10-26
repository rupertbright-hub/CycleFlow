import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Modal from 'react-modal';
// import Flashcard from '../modal/flashcard';

// const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)',
//     }
//   };

function TweetList() {
    const base_url = 'http://localhost:3001';
    
  const removeURL = (text) => {
    return text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
  };

  const [tweets, setTweets] = useState([]);
//   const [modalIsOpen,setIsOpen] = useState(false);



  useEffect(() => {
    fetch(base_url + '/tweets')
      .then((res) => res.json())
      .then((tweets) => setTweets(tweets.filter(el => el.entities.media)));
  }, []);

  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div className='bg-gray-200'>
    <div className='flex'>
    <div  className='m-auto flex p-4'>
    <FontAwesomeIcon className="fa-2x self-center mr-4" icon={faTwitter}/>
    <h1 className='text-body text-3xl'>User Twitter Submissions</h1>
    </div>
    </div>
    <div className="w-screen flex flex-wrap ">
      {tweets.map((elem, index) => { 
          return (
       <div key={index} className="w-screen md:w-1/2 lg:w-1/5 ">
            <div onClick={() => openModal()} className="m-2 bg-gradient-to-r from-blue-400 to-blue-800 bg-opacity-25 border border-gray-900 shadow-lg">
              <div>
                {elem.entities.media.map((image, index) => {
                    return (
                      <img
                        className="w-full object-cover h-64"
                        alt="goodbye"
                        key={index}
                        src={image.media_url}
                      />
                )})}
                <div className="">
                  <div className='text-center'>
                    <img
                      className="rounded-full h-16 w-16 flex items-center justify-center m-auto mt-4"
                      alt="hello"
                      src={elem.user.profile_image_url}
                    />
                  <p className='align-middle mt-4 ml-2 text-gray-200 font-bold'>{`@${elem.user.name}`}</p>
                  </div>
                  <div className='text-center mt-2'>
                  <FontAwesomeIcon className="fa-2x text-gray-100 mt-2" icon={faTwitter}/>
                  </div>
                  <div>
                  <h3 className=" text-gray-200 font-bold p-3 h-32 text-center">{removeURL(elem.text)}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          )})}
    </div>
    </div>
  ); 
}

export default TweetList;
