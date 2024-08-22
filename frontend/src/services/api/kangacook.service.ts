import { api } from "../../lib/api";

import {
  type CompanyDataType,
  type KpisType,
  type ControlType,
} from '../../types/data_interface';

export const homeData = async (): Promise<CompanyDataType> => {
  const { data } = await api.get<CompanyDataType>(`/api/index`);
  return data;
};

export const kpisData = async (): Promise<KpisType[]> => {
  const { data } = await api.get<KpisType[]>(`/api/kpis/`);
  return data;
};

export const controlData = async (): Promise<ControlType[]> => {
  const { data } = await api.get<ControlType[]>(`/api/controls/`);
  return data;
};
