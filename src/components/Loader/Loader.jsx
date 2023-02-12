import { RotatingLines } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';

const Loader = () => {
  return (
    <Overlay>
      <RotatingLines
        visible="true"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
      />
    </Overlay>
  );
};

export default Loader;
