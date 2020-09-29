import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../washer-riding.json';
import Nav from '../Nav/Nav';

function TweetList({ tweets }) {
    
  const removeURL = (text) => {
    return text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
  };

  console.log(tweets)
 


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
      
    <div>
    <Nav className=''/>
    <div className='text-center divide-blue-300'>
    <h1 className='text-body text-5xl mt-20 mb-20'>User Twitter Submissions</h1>
    </div>
    <div className="w-screen flex flex-wrap ">
      {tweets.map((elem, index) => {
        return (
          <div key={index} className="w-1/3">
            <div className="m-5 bg-gradient-to-r from-blue-400 to-blue-800 bg-opacity-25 p-5 rounded-lg shadow-lg">
              <div>
                {elem.entities.media ? (
                  elem.entities.media.map((image, index) => {
                    return (
                      <img
                        className="w-full  object-cover h-64"
                        alt="goodbye"
                        key={index}
                        src={image.media_url}
                      />
                    );
                  })
                ) : (
                  <div className="justify-content text-center">
                    <Lottie options={defaultOptions} height={233} width={400} />
                    <h3>Waiting on user to submit!</h3>
                  </div>
                )}
                <div className="m-4 flex">
                  <div>
                    <img
                      className="rounded-full  mt-12 h-20 w-20 flex items-center justify-center"
                      alt="hello"
                      src={elem.user.profile_image_url}
                    />
                  </div>
                  <div className='ml-8 mt-12 h-32'>
                  <p className='leading-7'>{`Tweeted by: ${elem.user.name}`}</p>
                  <h3 className=" text-white font-bold ">{removeURL(elem.text)}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default TweetList;
