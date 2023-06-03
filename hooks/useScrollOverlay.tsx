import { useRef, useLayoutEffect, LegacyRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type useScrollOverlayReturnType = [LegacyRef<any>];

gsap.registerPlugin(ScrollTrigger);

/**
 * 为指定的 DOM 添加滚动动画、蒙层
 *
 * @export
 * @param {string} [selectorName='.va-panel']
 * @return {*}  {useScrollOverlayReturnType}
 */
export default function useScrollOverlay(selectorName: string = '.va-panel'): useScrollOverlayReturnType {
  const mainRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self: any) => {
      const panels = self.selector(selectorName);

      panels.forEach((panel: HTMLElement) => {
        // Create overlay DOM
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.zIndex = '-1';
        panel.appendChild(overlay);

        gsap.from(panel, {
          y: '100px',
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: panel,
            start: 'top 80%',
            end: 'bottom 70%',
            scrub: true,
            // markers: true,
            onEnterBack: () => {
              gsap.to(overlay, { duration: 1, zIndex: -1, opacity: 0, backgroundColor: 'transparent' });
            },
            onLeave: () => {
              gsap.to(overlay, {
                opacity: 0.5,
                duration: 1,
                zIndex: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              });
            },
          },
        });
      });
    }, mainRef); // <- Scope!

    return () => ctx.revert(); // <- Cleanup!
  }, [selectorName]);

  return [mainRef];
}
