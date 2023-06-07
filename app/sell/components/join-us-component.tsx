'use client';
import Image from 'next/image';
import FlagItem from '@/components/FlagItem';
import Divider from '@/components/Divider';
import useScrollOverlay from '@/hooks/useScrollOverlay';
import Overlay from '@/components/Overlay';

interface IJoinUsComponentProps {
  className?: string;
}

export default function JoinUsComponent(props: IJoinUsComponentProps) {
  const [mainRef] = useScrollOverlay();

  return (
    <div ref={mainRef} className='w-full'>
      <div className='pt-16 bg-va-background w-full relative pb-12 lg:px-9 lg:pt-20 lg:pb-40 va-panel'>
        <div className='px-5 relative z-20'>
          <p className='h3 text-center mb-2'>Come and join us!</p>
          <p className='p1 text-center'>together with our 134,000 members, Valyuu has already</p>
        </div>
        <div className='card mx-5 rounded-lg relative z-10 mt-6 lg:mt-10 sm:flex sm:items-center'>
          <FlagItem
            className='border-b border-va-black sm:border-b-0 sm:flex-1'
            src='/USP1 2.png'
            flag='Saved CO₂'
            count='90,000g'
            desc='From Paris to New York'
            color='bg-va-forest'
          />
          <Divider type='vertical' className='sm:border-r sm:h-20' />
          <FlagItem
            className='border-b sm:border-b-0 border-va-black sm:flex-1'
            src='/USP1 2-1.png'
            flag='Tree Planted'
            count='23,500'
            desc='Driving on GAS'
            color='bg-va-blue'
          />
          <Divider type='vertical' className='sm:border-r sm:h-20' />
          <FlagItem
            className='sm:flex-1'
            src='/USP1 2-2.png'
            flag='Donation'
            count='€7,600'
            desc='From Paris to New York'
            color='bg-va-coral'
          />
        </div>
        {/* icon 绝对定位 */}
        {/* earth */}
        <Image
          src='/14120fa4-d618-48ca-b752-38e86cc05a54.png'
          alt='orange'
          width={400}
          height={300}
          quality={90}
          className='absolute w-[8.875rem] -top-[5rem] right-7 -rotate-[145deg] lg:right-[120px] lg:w-[220px] lg:max-w-[13.75rem]'
        />
        {/* valyuu logo */}
        <Image
          src='/cfc36ecf-e3ad-41e7-9cd8-3ba7a2cc7936.png'
          alt='orange'
          width={400}
          height={300}
          quality={90}
          className='absolute w-[8.875rem] top-[14.375rem] left-[-2.75rem] -rotate-[28.5deg] lg:top-4 lg:w-[220px] lg:max-w-[13.75rem]'
        />
        {/* green */}
        <Image
          src='/63e29ddd-b848-4f31-b57e-9674c7f971f7.png'
          alt='orange'
          width={400}
          height={300}
          quality={90}
          className='absolute -rotate-[148deg] hidden lg:block lg:top-[16rem] lg:left-[22.5rem] lg:w-[220px] lg:max-w-[13.75rem]'
        />
        {/* orange */}
        <Image
          src='/logo_stucker-07 1.png'
          alt='orange'
          width={400}
          height={300}
          quality={90}
          className='absolute w-[7.875rem] top-[29rem] right-0 lg:top-[13.5rem] lg:w-[174px] lg:max-w-[10.85rem]'
        />
        <Overlay />
      </div>
    </div>
  );
}
