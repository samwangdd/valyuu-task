import Image from 'next/image';
import styles from './sell.module.sass';

import ResponsiveImage from '@/components/ResponsiveImage';

export default function SellHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-red-200">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}

      <div className='w-full flex items-center justify-center bg-[url("/surface-0WFE46jwO8o-unsplash1.jpg")] h-346 md:h-512 bg-cover bg-center text-white'>
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
    </main>
  )
}
