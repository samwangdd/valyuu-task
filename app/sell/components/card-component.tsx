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
  className?: string;
  // theme?: 'lime' | 'lavender';
}

// @ts-ignore
const THEME_COLORS = {
  lime: 'va-lime',
  lavender: 'va-lavender',
};

const CardComponent = (props: ICardProps) => {
  const { className } = props;

  return (
    <div className={`${className} mx-5 rounded border border-[var(--jet-black)] overflow-hidden`}>
      <Image src={props.src} alt='card-image' width={100} height={100} className='w-full' />
      <div className='py-6 px-5 border-t border-va-black'>
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
