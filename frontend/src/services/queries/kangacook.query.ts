import { useQuery } from '@tanstack/react-query';

import { homeData, kpisData, controlData } from '../api/kangacook.service';

export const useHomeDataQuery = () => {
  return useQuery({
    queryFn: () => homeData(),
    queryKey: ['homeData'],
    staleTime: 300000,
    refetchInterval: 300000,
  });
};

export const useKpisDataQuery = () => {
  return useQuery({
    queryFn: () => kpisData(),
    queryKey: ['kpisData'],
    staleTime: 300000,
    refetchInterval: 300000,
  });
};

export const useControlDataQuery = () => {
  return useQuery({
    queryFn: () => controlData(),
    queryKey: ['controlData'],
    staleTime: 300000,
    refetchInterval: 300000,
  });
};
