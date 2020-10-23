import React from 'react';
// import animationData from '../10687-not-found.json';
import Nav from '../Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function TweetList({ tweets }) {
    
  const removeURL = (text) => {
    return text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
  };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice',
//     },
//   };

  return (
      
    <div>
    <Nav className=''/>
    <div className='text-center divide-blue-300'>
    <FontAwesomeIcon className="fa-2x" icon={faTwitter}/><h1 className='text-body text-5xl mt-20 mb-20'>User Twitter Submissions</h1>
    </div>
    <div className="w-screen
 flex flex-wrap ">
      {tweets.map((elem, index) => {
        return (
          <div key={index} className="w-screen md:w-1/2 lg:w-1/3">
            <div className="m-5 bg-gradient-to-r from-blue-400 to-blue-800 bg-opacity-25 p-5 rounded-lg shadow-lg">
              <div>
                {elem.entities.media ? (
                  elem.entities.media.map((image, index) => {
                    return (
                      <img
                        className="w-full object-cover h-64"
                        alt="goodbye"
                        key={index}
                        src={image.media_url}
                      />
                    );
                  })
                ) : (
                  <div className="justify-content text-center">
                    {/* <Lottie options={defaultOptions} height={238} width={375} /> */}
                    <h3>No user image uploaded!</h3>
                  </div>
                )}
                <div className="m-0">
                  <div className='flex'>
                    <img
                      className="rounded-full  mt-4 h-15 w-15 flex items-center justify-center ml-4"
                      alt="hello"
                      src={elem.user.profile_image_url}
                    />
                  <p className='align-middle mt-6 ml-2 text-gray-200'>{`Tweeted by: ${elem.user.name}`}</p>
                  </div>
                  <div>
                  <h3 className=" text-gray-200 font-bold ml-12 p-3 h-32">{removeURL(elem.text)}</h3>
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
