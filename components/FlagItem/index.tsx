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
    <div className={`${className} flex items-center mx-5 py-8 lg:my-8 sm:flex-col lg:flex-row lg:py-0 lg:mx-9 `}>
      <div
        className={`${color} mr-4 rounded-lg w-16 flex items-center justify-center sm:mr-0 lg:mr-4 xl:w-[64px] xl:h-[64px]`}
      >
        <Image src={src} alt='flagItem' width={100} height={100} className='p-[2px]' />
      </div>
      <div className='sm:pt-2 lg:pt-0'>
        <p className='p1 mb-1 sm:text-center lg:text-left'>{flag}</p>
        <p className='h2 mb-1 sm:text-center lg:text-left'>{count}</p>
        <p className='p2 sm:text-center lg:text-left'>{desc}</p>
      </div>
    </div>
  );
};

export default FlagItem;
