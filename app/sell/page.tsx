import Image from 'next/image';

import ResponsiveImage from '@/components/ResponsiveImage';

import styles from './sell.module.sass';
import SavePlantComponent from './components/save-plant-component';

export default function SellHome() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <div className='w-full flex items-center justify-center bg-[url("/surface-0WFE46jwO8o-unsplash1.jpg")] bg-cover bg-center bg-no-repeat text-white'>
        {/* <Image src="/surface-0WFE46jwO8o-unsplash1.jpg" alt="Logo" width={100} height={100} className="object-cover w-full" /> */}
        <div className='pt-16 pb-12 md:py-24 text-center'>
          <p className='p1 md:p1-md'>Every year, there are</p>
          <p className='h2-sm text-white font-sans md:h2 md:text-white md:font-sans'>100,100,100</p>
          <p className='p1 md:p1-md'>end-of-use electronics,</p>
          <p className='h2-sm text-white font-sans md:h2 md:text-white md:font-sans'> 2000 €</p>
          <p className='p1 md:p1-md'> value is ignored, and eventually </p>
          <p className='h2-sm text-white font-sans md:h2 md:text-white md:font-sans'> 1000 KG </p>
          <p className='p1 md:p1-md'> waste is generated</p>
        </div>
      </div>
      <SavePlantComponent></SavePlantComponent>
    </main>
  );
}
