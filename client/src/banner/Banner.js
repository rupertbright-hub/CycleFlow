import React from 'react'
import cycleflow from '../cycleflow2.png';
import {Link} from 'react-router-dom'



function nav() {
    return (
        <div>
            <div className='bg-gradient-to-r from-blue-400 to-blue-800 justify-center items-center text-center h-screen' >
                <div>
                    <img alt='logo' className='pt-20 mx-auto' src={cycleflow}></img>
                    <h1 className ="sm: text-2xl md: text-gray-200 text-5xl font-body font-bold mt-6">Keeping London Cyclists Safe</h1>
                    <p className=" mt-6 text-gray-200 font-body">A cycling app that directly reports your issues </p>
                    </div>
                    <div className='space-x-10 sm:space-x-4 mt-10 md:space-x-8 lg:space-x-12 xl:space-x-14 p-8'>
                    <Link to='/tweetform'>
                        <button className="text-white bg-transparent hover:bg-white text-white-700 font-semibold transition ease-out duration-500 hover:text-blue-500 py-2 px-4 border-2 border-whitehover:border-transparent rounded w-32">Form</button>
                    </Link>
                    <Link to='/tweetlist'>
                        <button className="md: text-white bg-transparent hover:bg-white text-white-700 font-semibold transition ease-out duration-500 hover:text-blue-500 py-2 px-4 border-2 border-whitehover:border-transparent rounded w-32">Form</button>
                    </Link>
                    
                </div>
                <div>
                </div>
                
                </div>
                
        
        </div>
    
    )
}



export default nav



