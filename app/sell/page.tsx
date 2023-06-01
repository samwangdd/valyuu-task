// import Image from 'next/image';

import SavePlantComponent from './components/save-plant-component';
import JoinUsComponent from './components/join-us-component';

export default function SellHome() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <div className='w-full flex items-center justify-center bg-[url("/surface-0WFE46jwO8o-unsplash1.jpg")] bg-cover bg-center bg-no-repeat text-white'>
        {/* <Image src="/surface-0WFE46jwO8o-unsplash1.jpg" alt="Logo" width={100} height={100} className="object-cover w-full" /> */}
        <div className='pt-16 pb-12 md:py-24 text-center'>
          <p className='p1 md:p1-md'>Every year, there are</p>
          <p className='h2 text-white md:h2-md md:text-white'>100,100,100</p>
          <p className='p1 md:p1-md'>end-of-use electronics,</p>
          <p className='h2 text-white font-polySans md:h2-md md:text-white md:font-polySans pt-5 md:pt-12'> 2000 € </p>
          <p className='p1 pb-5 md:p1-md md:pb-12'> value is ignored, and eventually </p>
          <p className='h2 text-white md:h2-md md:text-white'> 1000 KG </p>
          <p className='p1 md:p1-md'> waste is generated</p>
        </div>
      </div>
      <SavePlantComponent />
      <JoinUsComponent />
    </main>
  );
}
