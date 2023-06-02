import Image from 'next/image';
import Button from '@/components/Button';
import Icon from '@/components/Icon';

/**
 * Card component.
 *
 * @interface ICardProps
 */
interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
  isHovered: boolean;
}

const CardComponent = (props: ICardProps) => {
  const { className, title, src, onClick, isHovered, ...rest } = props;

  return (
    <div className={`${className} mx-5 rounded border border-va-black overflow-hidden md:rounded-md md:flex`} {...rest}>
      <Image
        src={src}
        alt='card-image'
        width={800}
        height={600}
        quality={90}
        className={`w-full md:m-5 transition-all object-cover h-[11.82rem] ${
          isHovered ? 'md:w-[330px] md:h-[315px]' : 'md:w-[293px] md:h-[315px]'
        } `}
      />
      <div className='py-6 px-5 border-t border-va-black md:border-0 md:flex md:flex-col justify-center'>
        <p className='h4 mb-2'>{title}</p>
        <p className='p2 mb-8 md:mb-[2.125rem]'>
          donate the value of your product to <br />
          Stichting Leergeld.
        </p>
        <div>
          <Button onClick={onClick} icon={<Icon src='/forward.svg' className='ml-2 md:w-[1.625rem]' />}>
            Know more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
