import Image from 'next/image';
import Button from '@/components/Button';
import Icon from '@/components/Icon';

/**
 * Card component.
 *
 * @interface ICardProps
 */
interface ICardProps {
  src: string;
  title: string;
  description: string;
  onClick: () => void;
  theme: 'lime' | 'lavender';
  className?: string;
}

// @ts-ignore
const THEME_COLORS = {
  lime: '#E8FFA8',
  lavender: '#EDE9FF',
};

const CardComponent = (props: ICardProps) => {
  const { theme, className } = props;
  console.log('%c [ theme ]-28', 'font-size:13px; background:#8f006e; color:#d344b2;', theme);

  console.log(
    '%c [ THEME_COLORS[theme] ]-29',
    'font-size:13px; background:#8ee8c0; color:#d2ffff;',
    THEME_COLORS[theme],
    `bg-[${THEME_COLORS[theme]}]`
  );

  return (
    <div className={`${className} mx-5 rounded border border-[var(--jet-black)] overflow-hidden`}>
      <Image src={props.src} alt='card-image' width={100} height={100} className='w-full' />
      <div className={`bg-[${THEME_COLORS[theme]}] py-6 px-5`}>
        <p className='h4 mb-2'>Sustainability</p>
        <p className='p2 mb-8'>donate the value of your product to Stichting Leergeld.</p>
        <Button onClick={() => {}} icon={<Icon src='/forward.svg' className='ml-2' />}>
          Know more
        </Button>
      </div>
    </div>
  );
};

export default CardComponent;
