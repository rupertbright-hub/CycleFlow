import React from "react";
import { Link } from 'react-router-dom';


// import animationData from '../washer-riding.json';

function Banner() {


  return (
    <div className='bg-hero bg-cover  opacity-75'>
      <div className="justify-center items-center text-center bg-blue-700 opacity-90">
        <div className=' w-3/3 m-auto self-center'>
          {/* <div className="pt-2 md:pt-2"> */}
            {/* <img
              alt="logo"
              className="md:pt-2 mx-auto"
              src={logo}
            ></img> */}
            {/* {windowWidth > 500 ?
            <Lottie options={defaultOptions} height={233} width={400} /> : ''} */}
          {/* </div> */}
          <div className="sm: mt-0">
            <h1 className="md: text-white mr-24 ml-24 text-5xl font-body font-bold">
              Keeping London Cyclists Safe
            </h1>
          </div>
          <div className="p-4">
            <h3 className=" mt-2 text-gray-200 font-body">
              A cycling app that directly reports your issues
            </h3>
          </div>
          </div>
          
          <div className='m-auto p-2'>
          <Link to="/tweetform">
            <button className="text-white bg-transparent hover:bg-white text-white-700 font-semibold transition ease-out duration-500 hover:text-white py-2 px-4 border-2 border-whitehover:border-transparent rounded-full w-32 mb-2">
              Report
            </button>
          </Link>
          </div>
          </div>
      </div>

  );
}

export default Banner;
