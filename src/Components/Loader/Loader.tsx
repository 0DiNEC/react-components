import { FC } from 'react';
import LoaderSVG from '../../Assets/Loader.svg?react';
import './Loader.css';

// eslint-disable-next-line react/function-component-definition
const Loader: FC = () => {
  return (
    <div className="loader-box">
      <LoaderSVG />
    </div>
  );
};

export default Loader;
