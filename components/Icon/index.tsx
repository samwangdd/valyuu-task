import Image from 'next/image';

interface IIconProps {
  src: string;
  size?: number;
  className?: string;
}

function Icon(props: IIconProps) {
  const { src, size = 16, className } = props;

  return (
    <div className={className}>
      <Image src={src} alt='icon' width={size} height={size} />
    </div>
  );
}

export default Icon;
