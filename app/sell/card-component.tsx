import Image from 'next/image';

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
}

const THEME_COLORS = {
  lime: '#E8FFA8',
  lavender: '#EDE9FF',
};

const CardComponent = (props: ICardProps) => {
  const { theme = 'lavender' } = props;

  return (
    <div className='mx-5 rounded border border-[var(--jet-black)]'>
      <Image src={props.src} alt='card-image' width={100} height={100} className='' />
      <div className={`bg-[${THEME_COLORS[theme]}]`}>
        <p className='h4'>Sustainability</p>
        <p className='p2'>donate the value of your product to Stichting Leergeld.</p>
      </div>
    </div>
  );
};

export default CardComponent;
