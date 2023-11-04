import { IData } from '../Types/apiTypes';
import { instance } from './api';

const getData = async (endpoint: string) => {
  const data: IData = await instance.get(endpoint);
  return data;
};

export default getData;
