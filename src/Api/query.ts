import { IData } from '../Types/apiTypes';
import { instance } from './api';

const getData = async (endpoint: string) => {
  const { data } = await instance.get(endpoint);
  return data as IData;
};

export default getData;
