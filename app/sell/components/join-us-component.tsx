import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import FlagItem from '@/components/FlagItem';

import Card from './card-component';

export default function SavePlantComponent() {
  return (
    <div className='pt-16 md:flex'>
      <div className='px-5'>
        <p className='h3 text-center mb-2'>Come and join us!</p>
        <p className='p1 mb-2 text-center'>together with our 134,000 members, Valyuu has already</p>
      </div>
      <div className='card mx-5 rounded-lg'>
        <FlagItem
          className='border-b border-va-black'
          src='/USP1 2.png'
          flag='Saved CO₂'
          count='90,000g'
          desc='From Paris to New York'
          color='va-forest'
        />
        <FlagItem
          className='border-b border-va-black'
          src='/USP1 2-1.png'
          flag='Tree Planted'
          count='23,500'
          desc='Driving on GAS'
          color='va-blue'
        />
        <FlagItem src='/USP1 2-2.png' flag='Donation' count='€7,600' desc='From Paris to New York' color='va-coral' />
      </div>
    </div>
  );
}
