import { FunctionComponent } from 'react';

interface OverlayProps {
  className?: string;
}

const Overlay: FunctionComponent<OverlayProps> = (props) => {
  const { className } = props;

  return <div className={`overlay w-full h-full absolute inset-0 -z-10 ${className}`} />;
};

export default Overlay;
