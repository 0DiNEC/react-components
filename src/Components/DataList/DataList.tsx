import type { FC } from 'react';
import { IData } from '../../Types/apiTypes';
import DataItem from '../DataItem/DataItem';
import style from './DataList.module.css';

interface DataListProps {
  data: IData | null;
}

const DataList: FC<DataListProps> = ({ data }) => {
  return (
    <div className={style.dataContainer}>
      {data &&
        data.results.map((item) => {
          return <DataItem key={item.name} data={item} />;
        })}
    </div>
  );
};

export default DataList;
