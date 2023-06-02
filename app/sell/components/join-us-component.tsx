import Image from 'next/image';
import FlagItem from '@/components/FlagItem';
import Divider from '@/components/Divider';

interface IJoinUsComponentProps {
  className?: string;
}

export default function JoinUsComponent(props: IJoinUsComponentProps) {
  return (
    <div className='pt-16 bg-va-background w-full relative md:px-9 md:pt-20 pb-40 overflow-hidden va-panel'>
      <div className='px-5'>
        <p className='h3 text-center mb-2'>Come and join us!</p>
        <p className='p1 text-center'>together with our 134,000 members, Valyuu has already</p>
      </div>
      <div className='card mx-5 rounded-lg relative z-10 mt-6 md:mt-10 md:flex md:items-center'>
        <FlagItem
          className='border-b border-va-black  md:border-b-0 md:flex-1'
          src='/USP1 2.png'
          flag='Saved CO₂'
          count='90,000g'
          desc='From Paris to New York'
          color='bg-va-forest'
        />
        <Divider type='vertical' className='md:border-r md:h-20' />
        <FlagItem
          className='border-b md:border-b-0 border-va-black md:flex-1'
          src='/USP1 2-1.png'
          flag='Tree Planted'
          count='23,500'
          desc='Driving on GAS'
          color='bg-va-blue'
        />
        <Divider type='vertical' className='md:border-r md:h-20' />
        <FlagItem
          className='md:flex-1'
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
        className='absolute w-[8.875rem] -top-[5rem] right-1 -rotate-[145deg] md:w-[13.75rem] md:invisible'
      />
      {/* valyuu logo */}
      <Image
        src='/cfc36ecf-e3ad-41e7-9cd8-3ba7a2cc7936.png'
        alt='orange'
        width={400}
        height={300}
        quality={90}
        className='absolute w-[8.875rem] top-[14.375rem] left-[-2.75rem] -rotate-[28.5deg] md:top-4 md:w-[13.75rem]'
      />
      {/* green */}
      <Image
        src='/63e29ddd-b848-4f31-b57e-9674c7f971f7.png'
        alt='orange'
        width={400}
        height={300}
        quality={90}
        className='absolute invisible -rotate-[148deg] md:visible md:top-[16rem] md:left-[22.5rem] md:w-[13.75rem]'
      />
      {/* orange */}
      <Image
        src='/61aa2b97-2a27-4334-83c3-48844654aa68.png'
        alt='orange'
        width={400}
        height={300}
        quality={90}
        className='absolute w-[8.875rem] top-[31rem] right-[-2.5rem] -rotate-[22deg] md:top-[13.5rem] md:w-[13.75rem]'
      />
    </div>
  );
}
