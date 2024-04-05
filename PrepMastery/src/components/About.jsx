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
            PrepMastery offers specialized training programs designed to meet your specific placement requirements, providing both accredited and company specific tracks. Whether you're seeking certification or skill development, PrepMastery delivers comprehensive training solutions. Our programs are carefully crafted to enhance your qualifications and readiness for placement opportunities.
            </p>
        </div>
    </div>
</div>
    </div>
  )
}

export default About