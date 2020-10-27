import React from "react";
import { Link } from 'react-router-dom';
import logo from './logo.svg';


function Banner() {


  return (
    <div className='bg-hero bg-cover opacity-75'>
      <div className="justify-center items-center text-center bg-blue-700 opacity-90 pt-10">
        <div className=' w-3/3 m-auto self-center '>
        <img alt='logo' src={logo} className='h-40 w-40 m-auto'></img>
          <div className="sm: mt-0">
            <h1 className="md: text-white mr-24 ml-24 text-5xl font-body font-bold pt-4">
              Keeping London Cyclists Safe
            </h1>
          </div>
          <div className="p-4">
            <h3 className=" mt-2 text-gray-200 font-body">
              A cycling app that directly reports your issues
            </h3>
          </div>
          </div>
          
          <div className='m-auto p-8'>
          <Link to="/tweetform">
            <button className="text-white bg-transparent hover:bg-white text-white-700 font-semibold transition ease-out duration-300  py-2 px-4 border-2 border-white hover:border-transparent hover:text-blue-500 rounded-full w-32 mb-2">
              Report
            </button>
          </Link>
          </div>
          </div>
      </div>

  );
}

export default Banner;
