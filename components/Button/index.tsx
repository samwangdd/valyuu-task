interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactElement;
}

const Button = (props: IButtonProps) => {
  const { icon: Icon } = props;

  return (
    <button className='button-primary px-3 md:px-5'>
      <span className='p2 py-2 md:py-[1.125rem]'>{props.children}</span>
      {Icon}
    </button>
  );
};

export default Button;
