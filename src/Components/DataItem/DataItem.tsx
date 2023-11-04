import { FC } from 'react';
import { IResult } from '../../Types/apiTypes';
import style from './DataItem.module.css';

interface DataItemProps {
  data: IResult;
}

const DataItem: FC<DataItemProps> = ({ data }) => {
  return (
    <div className={style.dataItem}>
      <div>photo</div>
      <div className={style.dataInfo}>
        <h2 className={style.title}>{data.name}</h2>
        <div>Height: {data.height}</div>
        <div>Mass: {data.mass} </div>
        <div>Gender: {data.gender}</div>
        <div>Date Birth: {data.birthYear} </div>
      </div>
    </div>
  );
};

export default DataItem;
