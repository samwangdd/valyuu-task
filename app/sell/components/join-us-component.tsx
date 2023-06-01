import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import FlagItem from '@/components/FlagItem';

import Card from './card-component';

export default function SavePlantComponent() {
  return (
    <div className='pt-16 border-t border-va-black w-full md:px-9 md:pt-20 mb-40'>
      <div className='px-5'>
        <p className='h3 text-center mb-2'>Come and join us!</p>
        <p className='p1 mb-2 text-center'>together with our 134,000 members, Valyuu has already</p>
      </div>
      <div className='card mx-5 rounded-lg md:mt-10 md:flex'>
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
    </div>
  );
}
