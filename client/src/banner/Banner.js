import React, { useEffect, useState } from "react";
import logo from '../IRLogo.png';
import { Link } from 'react-router-dom';
import animationData from '../washer-riding.json';
import Lottie from 'react-lottie';

function Banner() {

    const [windowWidth, setWindowWidth] = useState(0);

    let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
      };

      useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
      }, []);

      console.log(windowWidth)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

//   console.log(screen.width)

  return (
    <div className=''>
      <div className="bg-gradient-to-r from-blue-400 to-blue-800 justify-center items-center text-center h-screen">
        <div>
          <div className="pt-12 md:pt-2">
            <img
              alt="logo"
              className="md:pt-8 mx-auto"
              src={logo}
            ></img>
            {windowWidth > 500 ?
            <Lottie options={defaultOptions} height={233} width={400} /> : ''}
          </div>
          <div className="sm: mt-0">
            <h1 className="m-1 p-2 md: text-gray-200 mr-24 ml-24 text-5xl font-body font-bold mt-6">
              Keeping London Cyclists Safe
            </h1>
          </div>
          <div className="p-4">
            <h3 className=" mt-2 text-gray-200 font-body">
              A cycling app that directly reports your issues
            </h3>
          </div>
        </div>
        <div className="space-x-10 sm:space-x-4 mt-0 md:space-x-8 lg:space-x-12 xl:space-x-14 p-4">
          <Link to="/tweetform">
            <button className="text-white bg-transparent hover:bg-white text-white-700 font-semibold transition ease-out duration-500 hover:text-blue-500 py-2 px-4 border-2 border-whitehover:border-transparent rounded w-32">
              Report
            </button>
          </Link>
          <Link to="/tweetlist">
            <button className="md: text-white bg-transparent hover:bg-white text-white-700 font-semibold transition ease-out duration-500 hover:text-blue-500 py-2 px-4 border-2 border-whitehover:border-transparent rounded w-32">
              Tweets
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Banner;
