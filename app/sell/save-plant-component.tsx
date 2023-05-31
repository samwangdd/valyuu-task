'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Card from './card-component';

export default function SavePlantComponent() {
  return (
    <div className='md:flex'>
      <p className='p1 mb-2 text-center'>We believe</p>
      <p className='h3 text-center'>Save planet is something everyone can do</p>
      <Card
        src='/surface-VDWS2oWdZzg-unsplash 1.jpg'
        title='Sustainability'
        description='donate the value of your product to Stichting Leergeld.'
        theme='lavender'
        onClick={() => {}}
      />
    </div>
  );
}
