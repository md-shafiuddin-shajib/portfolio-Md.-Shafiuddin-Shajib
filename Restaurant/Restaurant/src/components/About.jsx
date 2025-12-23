import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div id='about' className='py-20 bg-white'>
      <div className='container mx-auto px-6 '>
        <div className='text-center mb-12'>
          <h1 className='text-dark text-3xl font-bold mb-4'>Our Story</h1>
          <div className='bg-primary w-20 h-1 mx-auto'></div>
        </div>
      <div className='flex flex-col md:flex-row items-center'>
        {/* left side image */}
        <div className='md:w-1/2'>
        <img src={assets.aboutImg} alt="" />
        </div>
        {/* right side image */}
        <div className='md:w-1/2'></div>
        
      </div>
      
      </div>

    </div>
  );
};

export default About;