import useCounter from '../hooks/user-counter';
import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
