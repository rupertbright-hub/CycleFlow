import React from 'react'

function TweetList( {tweets} ) {

    const removeURL = (text) => {
        return text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')
    };
    console.log(tweets)

    return (
        <div >
        {tweets.map((elem) => 
            {return <div  className="flex m-5 w-2/3 bg-blue-500 bg-opacity-25 p-5 rounded-lg shadow-lg">
            <div>
                {elem.entities.media  ? elem.entities.media.map((image, index) => {
                    return <img className="h-48 w-64 object-cover object-right"  alt='goodbye' key={index} src={image.media_url}/>
                }) : ''}
                </div>
            <div className='m-5'>
            <div>
                <h2>{removeURL(elem.text)}</h2>
                </div>
                <img className="rounded-full h-16 w-16 flex items-center justify-center"  alt='hello' src={elem.user.profile_image_url}/>
                </div>
            </div>}
        )}
        </div>

    );
        }
        

export default TweetList
