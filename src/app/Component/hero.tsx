import React from 'react';

const Hero = () => {
  return (
    <div className='bg-blue-950 min-h-screen flex flex-col justify-center items-center text-white text-center px-4'>
      {/* Hero Section */}
      <h1 className='text-5xl sm:text-4xl font-extrabold mb-6'> Welcome to login  </h1>
       
        <h1 className='text-5xl sm:text-4xl font-extrabold mb-6'> With Clerk 
      </h1>
      <div className='flex space-x-4'>
        <button className='bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-100 hover:shadow-lg transition duration-200 ease-in-out'>
          Get Started
        </button>
       
      </div>
    </div>
  );
};

export default Hero;
