'use client';

import { useRef, useLayoutEffect, LegacyRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SavePlantComponent from './components/save-plant-component';
import JoinUsComponent from './components/join-us-component';
import BannerComponent from './components/banner-component';

gsap.registerPlugin(ScrollTrigger);

export default function SellHome() {
  const mainRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self: any) => {
      const panels = self.selector('.va-panel');

      panels.forEach((panel: HTMLElement) => {
        // Create overlay DOM
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        panel.appendChild(overlay);

        gsap.from(panel, {
          y: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: panel,
            start: 'top 80%',
            end: 'bottom 70%',
            scrub: true,
            // markers: true,
            // onLeave: () => {
            //   gsap.to(overlay, {
            //     opacity: 0.5,
            //     duration: 1,
            //     zIndex: 10,
            //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
            //   });
            // },
            // onLeaveBack: () => {
            //   gsap.to(overlay, { duration: 1, backgroundColor: 'transparent' });
            // },
          },
        });
      });
    }, mainRef); // <- Scope!

    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <main
      className='flex min-h-screen flex-col items-center va-container bg-va-background'
      ref={mainRef as unknown as LegacyRef<HTMLElement>}
    >
      <BannerComponent />
      <SavePlantComponent />
      <JoinUsComponent />
      <SavePlantComponent />
      <JoinUsComponent />
      <BannerComponent />
    </main>
  );
}
