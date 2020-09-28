import React from 'react'

function TweetList( {tweets} ) {

    const removeURL = (text) => {
        return text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')
    };
    console.log(tweets)

    return (
        <div className='w-screen flex flex-wrap ' >
        {tweets.map((elem) => 
            {return <div className='w-2/3 mb-12'><div  className="m-5 bg-blue-500 bg-opacity-25 p-5 rounded-lg shadow-lg">
            <div>
                {elem.entities.media  ? elem.entities.media.map((image, index) => {
                    return <img className="w-full  object-cover h-64"  alt='goodbye' key={index} src={image.media_url}/>
                }) : ''}
                </div>
            <div className='m-5 flex'>
            <div>
            <img className="rounded-full h-16 w-16 flex items-center justify-center"  alt='hello' src={elem.user.profile_image_url}/>
                </div>
                <h2>{removeURL(elem.text)}</h2>
                
                </div>
            </div></div>}
        )}
    
        </div>

    );
        }
        

export default TweetList
