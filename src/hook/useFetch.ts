import { END_POINT_API } from '@/constants/environment';
import { methods } from '@/constants/fetchMethods';
import { IFetchOptions } from '@/types/fetchType';
import { useMemo } from 'react';

const useFetch = async (suffix: string, options: IFetchOptions) => {
  const token = '';

  const headers = useMemo(
    () => (token ? { 'access-token': token } : undefined),
    [token],
  );

  const searchParams = useMemo(
    () => new URLSearchParams(options.params),
    [options.params],
  );

  if (options.method === methods.get) {
    return await fetch(END_POINT_API + suffix + searchParams, {
      method: options.method,
      headers,
    });    
  }

  return await fetch(END_POINT_API + suffix, {
    method: options.method,
    body: searchParams,
    headers,
  });
};

export default useFetch;
