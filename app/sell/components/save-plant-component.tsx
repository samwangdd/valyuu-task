'use client';

import useHoverDelay from '@/hooks/useHoverDelay';
import useScrollOverlay from '@/hooks/useScrollOverlay';

import Card from './card-component';
import Overlay from '@/components/Overlay';

interface ISavePlantComponentProps {
  className?: string;
}

export default function SavePlantComponent(props: ISavePlantComponentProps) {
  const [isHovered, handleMouseEnter, handleMouseLeave] = useHoverDelay(500); // 延迟 hover，避免频繁切换样式，优化体验
  const [mainRef] = useScrollOverlay();

  return (
    <div ref={mainRef} className=' w-full bg-white z-20'>
      <div className='items-center relative border-b border-va-black bg-white pt-2 pb-[3.25rem] md:pt-[4.5rem] md:flex va-panel'>
        <div className='text-center md:text-left md:w-[330px] md:ml-[2.125rem]'>
          <p className='p1 mb-2 '>We believe</p>
          <p className='h3 mb-1'>
            Save planet is <br /> something everyone
            <br /> can do
          </p>
        </div>
        <div className='md:h-[29.5rem] md:flex-1 md:relative'>
          <Card
            isHovered={!isHovered}
            src='/e62ba45a-df70-4ef5-932e-0a0a023d053e.png'
            title='Sustainability'
            description='donate the value of your product to Stichting Leergeld.'
            onClick={() => {}}
            className={`bg-va-lavender mt-5 md:absolute md:transform transition-all md:duration-500 md:rotate-[-7deg] md:translate-y-5 ${
              isHovered ? 'md:w-[333px] md:rotate-[7deg]' : ''
            }`}
          />
          <Card
            isHovered={isHovered}
            src='/7d74e166-3a68-4f42-99d6-1d86e02a659e.png'
            title='Do some good'
            description='donate the value of your product to Stichting Leergeld.'
            onClick={() => {}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`bg-va-lime mt-5 transition-all md:absolute md:transform md:duration-500  md:translate-y-4 ${
              isHovered
                ? 'md:rotate-[-8.5deg] md:translate-x-[330px]'
                : 'md:rotate-[8.5deg] md:translate-x-[620px] md:w-[333px]'
            }`}
          />
        </div>
        <Overlay />
      </div>
    </div>
  );
}
