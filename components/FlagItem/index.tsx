import { FunctionComponent } from 'react';
import Image from 'next/image';

/**
 * 展示各类指标和数据
 *
 * @interface FlagItemProps
 */
interface FlagItemProps {
  src: string;
  flag: string;
  count: string;
  desc: string;
  color: string;
  className?: string;
}

const FlagItem: FunctionComponent<FlagItemProps> = (props) => {
  const { src, flag, count, desc, color = '#EDE9FF', className } = props;

  return (
    <div className={`${className} flex items-center mx-5 py-8 lg:my-8 lg:py-0 lg:mx-9`}>
      <div className={`${color} w-16 mr-4 rounded-lg`}>
        <Image src={src} alt='flagItem' width={100} height={100} className='p-[2px]' />
      </div>
      <div>
        <p className='p1 mb-1'>{flag}</p>
        <p className='h2 mb-1'>{count}</p>
        <p className='p2'>{desc}</p>
      </div>
    </div>
  );
};

export default FlagItem;
