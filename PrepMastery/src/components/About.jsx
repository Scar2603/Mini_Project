import React from 'react'

const About = () => {
  return (
    <div id= "about" className='bg-yello'>
        <div className="sm:flex items-center max-w-screen-xl">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <img  src="About.png"/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5 ml-28">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
            PrepMastery is a training provider based WIT that specialises in accredited and bespoke training tracks for your placement (Mahit aahe repeat aahe next time changes krto).
            </p>
        </div>
    </div>
</div>
    </div>
  )
}

export default About