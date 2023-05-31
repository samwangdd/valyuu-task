import { FunctionComponent } from 'react';

interface CardProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

const Card: FunctionComponent<CardProps> = (props) => {
  const { content, children } = props;
  return (
    <div className='card'>
      <div className='card-content'>{content}</div>
      <div className='card-actions'>{children}</div>
    </div>
  );
};

export default Card;
