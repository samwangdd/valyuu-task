import { useState, useRef, useEffect } from 'react';

type HandleMouseEnter = () => void;
type HandleMouseLeave = () => void;

type UseHoverDelayReturnType = [boolean, HandleMouseEnter, HandleMouseLeave];

function useHoverDelay(delayTime: number): UseHoverDelayReturnType {
  // 鼠标是否 hover
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | undefined>();

  const handleMouseEnter: HandleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave: HandleMouseLeave = () => {
    clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setIsHovered(false);
    }, delayTime);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return [isHovered, handleMouseEnter, handleMouseLeave];
}

export default useHoverDelay;
