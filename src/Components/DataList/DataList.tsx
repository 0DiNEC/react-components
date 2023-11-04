import type { FC } from 'react';
import { IData } from '../../Types/apiTypes';
import DataItem from '../DataItem/DataItem';

interface DataListProps {
  data: IData | null;
}

const DataList: FC<DataListProps> = ({ data }) => {
  return (
    <div>
      {data &&
        data.results.map((item) => {
          return (
            <div key={item.name}>
              <DataItem data={item} />
            </div>
          );
        })}
    </div>
  );
};

export default DataList;
