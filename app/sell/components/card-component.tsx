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
  isHovered: boolean; // 这里的 hover 态是以右侧卡片为准，所以在三目运算中 ? 后面是左侧卡片的样式，: 后面是右侧卡片的样式
  className?: string;
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
        <p
          className={`h4 mb-2 transition-all duration-200 md:relative md:w-40 ${
            isHovered
              ? ' top-0 left-0 md:text-va-black md:text-left'
              : 'top-[70px] left-[-260px] md:text-white md:text-center'
          }`}
        >
          {title}
        </p>
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
