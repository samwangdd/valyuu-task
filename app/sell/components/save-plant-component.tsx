'use client';

import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

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
    <div className='pt-16 md:flex'>
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
      <p className='p1 mb-2 text-center'>We believe</p>
      <p className='h3 text-center mb-1'>Save planet is something everyone can do</p>
      <Card
        src='/surface-VDWS2oWdZzg-unsplash 1-2.png'
        title='Sustainability'
        description='donate the value of your product to Stichting Leergeld.'
        theme='lavender'
        onClick={() => {}}
        className='mt-5'
      />
      <Card
        src='/surface-VDWS2oWdZzg-unsplash 1.png'
        title='Sustainability'
        description='donate the value of your product to Stichting Leergeld.'
        theme='lime'
        onClick={() => {}}
        className='mt-5'
      />
    </div>
  );
}
