'use client';

import { useState } from 'react';

import Card from './card-component';
import useThrottle from '@/hooks/useThrottle';

export default function SavePlantComponent() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useThrottle(
    () => {
      setIsHovered(true);
    },
    500,
    [isHovered]
  );

  const handleMouseLeave = useThrottle(
    () => {
      setIsHovered(false);
    },
    500,
    [isHovered]
  );

  return (
    <div className='pt-[4.5rem] bg-white pb-[3.25rem] w-full md:flex items-center'>
      <div className='text-center md:text-left md:w-[330px] md:ml-[2.125rem]'>
        <p className='p1 mb-2 '>We believe</p>
        <p className='h3 mb-1'>
          Save planet is <br /> something everyone
          <br /> can do
        </p>
      </div>
      <div className='md:h-[29.5rem] md:flex-1 md:relative'>
        <Card
          src='/surface-VDWS2oWdZzg-unsplash 1-2.png'
          title='Sustainability'
          description='donate the value of your product to Stichting Leergeld.'
          onClick={() => {}}
          className={`bg-va-lavender mt-5 md:absolute md:transform transition-all md:duration-500 md:rotate-[-7deg] md:translate-y-5 ${
            isHovered ? 'md:w-[333px] md:rotate-[7deg]' : ''
          }`}
          isHovered={!isHovered}
        />
        <Card
          src='/410c4c96-125f-451b-ab18-f9ba724ffc84.png'
          title='Do some good'
          description='donate the value of your product to Stichting Leergeld.'
          onClick={() => {}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`bg-va-lime mt-5 md:absolute md:transform transition-all md:duration-500 md:left-[620px] md:translate-y-4 md:rotate-[8.5deg] ${
            isHovered ? 'md:rotate-[-8deg] md:left-[320px]' : 'md:w-[333px]'
          }`}
          isHovered={isHovered}
        />
      </div>
    </div>
  );
}
