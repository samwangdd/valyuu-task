'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Card from './card-component';

export default function SavePlantComponent() {
  return (
    <div className='pt-16 md:flex'>
      <p className='h3 text-center'>Come and join us!</p>
      <p className='p1 mb-2 text-center mb-1'>together with our 134,000 members, Valyuu has already</p>
      <Card
        src='/surface-VDWS2oWdZzg-unsplash 1-2.png'
        title='Sustainability'
        description='donate the value of your product to Stichting Leergeld.'
        theme='lavender'
        onClick={() => {}}
        className='mt-5'
      />
    </div>
  );
}
