









import React, { useState } from 'react';
import { TwitterShareButton } from 'react-twitter-embed';

const councils = {
    'Barking and Dagenham': '@lbbdcouncil',
    'Camden': '@CamdenCouncil',
    'Croydon':'@yourcroydon',
    'Hackney':'@hackneycouncil',
    'Hammersmith and Fulham': '@LBHF',
    'Islington':'@IslingtonBC',
    'Lambeth':'@lambeth_council',
    'Lewisham':'@LewishamCouncil',
    'Westminster':'@CityWestminster'
}

function TweetForm() {
  const initialState = {
    issue: '',
    date: '',
    location: '',
    road: '',
  };

  const [form, setForm] = useState(initialState);
  const [showButton, setShowButton] = useState(false);
  const [postcode, setPostcode] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setShowButton(true);
        fetch(`https://api.postcodes.io/postcodes/ ${form.location}`)
        .then((res) => res.json())
        .then((postcode) => setPostcode(postcode));
  }

  function handleChange(e) {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

   

function diffPostcode (postcode) {
    let selection = ''
    let newVal = postcode.result
    for(let i in newVal){
        if(i === 'primary_care_trust') {
            selection = newVal[i]
        }
    }
    for (const [key, value] of Object.entries(councils)){
        if(key === selection){
            return value
        }
    }
}

var twitterHandle = diffPostcode (postcode);
console.log(twitterHandle)

  return (
    <div className="w-full max-w-lg">
      <form name="form" onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
       <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Issue</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="issue"
            type="text"
            placeholder="issue"
            onChange={handleChange}
          />
          </div>
     
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="date"
            type="date"
            placeholder="*****"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label className="">Borough</label>
          <input
            className=" "
            name="location"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label className="">Road</label>
          <input
            className=" "
            name="road"
            type="text"
            placeholder="****"
            onChange={handleChange}
          />
        </div>
        <div>
     
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      {showButton && (<div>
          <TwitterShareButton url={`${twitterHandle}`} options= {{text: form.issue,
          via: 'InspectorRoute' }} />
        </div>
      )}
    </div>
    
  );
}
// url={`${hello} https://facebook.com/saurabhnemade`}

export default TweetForm;