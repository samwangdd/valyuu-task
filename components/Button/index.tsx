interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactElement;
}

const Button = (props: IButtonProps) => {
  const { icon: Icon } = props;

  return (
    <button className='button-primary px-3'>
      <span className='py-2 p2'>{props.children}</span>
      {Icon}
    </button>
  );
};

export default Button;
