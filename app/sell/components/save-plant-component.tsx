'use client';

import { useState } from 'react';

import Card from './card-component';

export default function SavePlantComponent() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='pt-[4.5rem] bg-white pb-[3.25rem] w-full md:flex items-center'>
      {/* <div className='flex'>
        <div
          className={`w-64 h-64 transition-colors duration-300 ${isHovered ? 'bg-yellow-500' : 'bg-blue-500'}`}
        ></div>
        <div
          className={`w-64 h-64 transition-colors duration-300 ${isHovered ? 'bg-blue-500' : 'bg-yellow-500'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
      </div> */}
      <div className='text-center md:text-left md:w-[330px] md:ml-[2.125rem]'>
        <p className='p1 mb-2 '>We believe</p>
        <p className='h3 mb-1'>
          Save planet is <br /> something everyone
          <br /> can do
        </p>
      </div>
      <Card
        src='/surface-VDWS2oWdZzg-unsplash 1-2.png'
        title='Sustainability'
        description='donate the value of your product to Stichting Leergeld.'
        onClick={() => {}}
        className='mt-5 bg-va-lavender'
      />
      <Card
        src='/surface-VDWS2oWdZzg-unsplash 1.png'
        title='Sustainability'
        description='donate the value of your product to Stichting Leergeld.'
        onClick={() => {}}
        className='mt-5 bg-va-lime'
      />
    </div>
  );
}
