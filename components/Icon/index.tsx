import Image from 'next/image';

interface IIconProps {
  src: string;
  size?: number;
  className?: string;
}

function Icon(props: IIconProps) {
  const { src, size = 16, className } = props;

  return <Image src={src} alt='icon' width={size} height={size} className={className} />;
}

export default Icon;
