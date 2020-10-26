import React, { useEffect, useState } from 'react';
import TweetList from '../TweetList/TweetList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import pic from '../assets/cycleflow.png'



function Flashcard({tweet}) {
    const [modalIsOpen,setIsOpen] = useState(false);

    const removeURL = (text) => {
        return text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
};

const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          padding: '100px',
          backgroundImage: pic
        }
      };

    function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }

   // <div className='bg-gray-200'>
    // <div className='flex'>
    // <div  className='m-auto flex p-4'>
    // <FontAwesomeIcon className="fa-2x self-center mr-4" icon={faTwitter}/>
    // <h1 className='text-body text-3xl'>User Twitter Submissions</h1>
    // </div>
    // </div>

   
    

   
return (
       <div className="flex">
            <div onClick={openModal} className="m-2 bg-gradient-to-r from-blue-400 to-blue-800 bg-opacity-25 border border-gray-900 shadow-lg">
              <div>
                {tweet.entities.media.map((image, index) => {
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
                      src={tweet.user.profile_image_url}
                    />
                  <p className='align-middle mt-4 ml-2 text-gray-200 font-bold'>{`@${tweet.user.name}`}</p>
                  </div>
                  <div className='text-center mt-2'>
                  <FontAwesomeIcon className="fa-2x text-gray-100 mt-2" icon={faTwitter}/>
                  </div>
                  <div>
                  <h3 className=" text-gray-200 font-bold p-3 h-32 text-center">{removeURL(tweet.text)}</h3>
                  </div>
                </div>
              </div>
            </div>
            <Modal
          isOpen={modalIsOpen}
    
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
         {tweet.entities.media.map((image, index) => {
                    return (
                      <img
                        className=" object-cover h-64 w-64"
                        alt="goodbye"
                        key={index}
                        src={image.media_url}
                      />
                )})}
          <div>{tweet.text}</div>
        </Modal>
          </div> 
  );  
 }

         



export default Flashcard
