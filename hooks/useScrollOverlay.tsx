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
        // 为每个 panel 添加蒙层，需要在 va-panel 组件下使用 Overlay 组件
        const overlay = panel.querySelector('.overlay');

        gsap.from(panel, {
          y: 200,
          duration: 0.5,
          scrollTrigger: {
            trigger: panel,
            start: 'top bottom',
            end: 'bottom 90%',
            scrub: true,
            // markers: true,
            onLeave: () => {
              gsap.to(overlay, {
                duration: 0.5,
                zIndex: 1000,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              });
            },
            onEnterBack: () => {
              gsap.to(overlay, { duration: 0.5, zIndex: -10, backgroundColor: 'transparent' });
            },
          },
        });
      });
    }, mainRef); // <- Scope!

    return () => ctx.revert(); // <- Cleanup!
  }, [selectorName]);

  return [mainRef];
}
