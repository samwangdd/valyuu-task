import { FunctionComponent } from 'react';

interface DividerProps {
  type: 'horizontal' | 'vertical';
  className?: string;
}

const Divider: FunctionComponent<DividerProps> = (props) => {
  const { type, className } = props;
  const style = type === 'horizontal' ? 'border-b' : 'border-r';

  return <div className={`border-va-black ${style} ${className}`} />;
};

export default Divider;
