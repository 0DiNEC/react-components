import { useEffect, useState } from 'react';
import DataList from './Components/DataList/DataList';
import Loader from './Components/Loader/Loader';
import getData from './Api/query';
import { endpoints } from './Api/api';
import { IData } from './Types/apiTypes';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IData | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    const result = await getData(endpoints.people);
    setData(result);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{isLoading ? <Loader /> : <DataList data={data} />}</div>;
}

export default App;
