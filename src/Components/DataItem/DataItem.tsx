import { FC } from 'react';
import { IResult } from '../../Types/apiTypes';

interface DataItemProps {
  data: IResult;
}

const DataItem: FC<DataItemProps> = ({ data }) => {
  return (
    <div className="data-item">
      <h2>{data.name}</h2>
      <div className="data-item__info">
        <div>Height: {data.height}</div>
        <div>Mass: {data.mass} </div>
        <div>Gender: {data.gender}</div>
        <div>Date Birth: {data.birthYear} </div>
      </div>
    </div>
  );
};

export default DataItem;
