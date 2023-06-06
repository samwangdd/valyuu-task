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
      <div className='items-center relative border-b border-va-black bg-white pt-2 pb-[3.25rem] xl:pt-[4.5rem] xl:flex va-panel'>
        <div className='text-center px-6 xl:text-left xl:w-[330px] xl:ml-[2.125rem]'>
          <p className='p1 mb-2 '>We believe</p>
          <p className='h3 mb-1'>Save planet is something everyone can do</p>
        </div>
        <div className='sm:flex xl:h-[29.5rem] xl:flex-1 xl:relative'>
          <Card
            isHovered={!isHovered}
            src='/e62ba45a-df70-4ef5-932e-0a0a023d053e.png'
            title='Sustainability'
            description='donate the value of your product to Stichting Leergeld.'
            onClick={() => {}}
            className={`bg-va-lavender mt-5 sm:flex-1 xl:absolute xl:transform transition-all xl:duration-500 xl:rotate-[-7deg] xl:translate-y-5 ${
              isHovered ? 'xl:w-[333px] xl:rotate-[7deg]' : ''
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
            className={`bg-va-lime mt-5 transition-all sm:flex-1 xl:absolute xl:transform xl:duration-500  xl:translate-y-4 ${
              isHovered
                ? 'xl:rotate-[-8.5deg] xl:translate-x-[330px]'
                : 'xl:rotate-[8.5deg] xl:translate-x-[620px] xl:w-[333px]'
            }`}
          />
        </div>
        <Overlay />
      </div>
    </div>
  );
}
