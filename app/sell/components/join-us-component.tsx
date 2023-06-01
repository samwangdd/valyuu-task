import Image from 'next/image';
import FlagItem from '@/components/FlagItem';

export default function JoinUsComponent() {
  return (
    <div className='pt-16 border-t border-va-black bg-va-background w-full relative md:px-9 md:pt-20 pb-40 overflow-hidden'>
      <div className='px-5'>
        <p className='h3 text-center mb-2'>Come and join us!</p>
        <p className='p1 text-center'>together with our 134,000 members, Valyuu has already</p>
      </div>
      <div className='card mx-5 rounded-lg md:mt-10 md:flex relative z-10'>
        <FlagItem
          className='border-b md:border-r md:border-b-0 border-va-black md:flex-1'
          src='/USP1 2.png'
          flag='Saved CO₂'
          count='90,000g'
          desc='From Paris to New York'
          color='bg-va-forest'
        />
        <FlagItem
          className='border-b md:border-r md:border-b-0 border-va-black md:flex-1'
          src='/USP1 2-1.png'
          flag='Tree Planted'
          count='23,500'
          desc='Driving on GAS'
          color='bg-va-blue'
        />
        <FlagItem
          className='md:flex-1'
          src='/USP1 2-2.png'
          flag='Donation'
          count='€7,600'
          desc='From Paris to New York'
          color='bg-va-coral'
        />
      </div>
      <Image
        src='/14120fa4-d618-48ca-b752-38e86cc05a54.png'
        alt='orange'
        width={100}
        height={100}
        quality={100}
        className='absolute w-[8.875rem] -top-[5rem] right-1 -rotate-[145deg] md:w-[13.75rem]'
      />
      <Image
        src='/cfc36ecf-e3ad-41e7-9cd8-3ba7a2cc7936.png'
        alt='orange'
        width={100}
        height={100}
        quality={100}
        className='absolute w-[8.875rem] top-[14.375rem] left-[-2.75rem] -rotate-[28.5deg] md:top-4 md:w-[13.75rem]'
      />
      <Image
        src='/63e29ddd-b848-4f31-b57e-9674c7f971f7.png'
        alt='orange'
        width={100}
        height={100}
        quality={100}
        className='absolute invisible -rotate-[148deg] md:visible md:top-[13.25rem] md:left-[22.5rem] md:w-[13.75rem]'
      />
      <Image
        src='/61aa2b97-2a27-4334-83c3-48844654aa68.png'
        alt='orange'
        width={100}
        height={100}
        quality={100}
        className='absolute w-[8.875rem] top-[30rem] right-[-2.5rem] -rotate-[22deg] md:top-[13.5rem] md:w-[13.75rem]'
      />
    </div>
  );
}
