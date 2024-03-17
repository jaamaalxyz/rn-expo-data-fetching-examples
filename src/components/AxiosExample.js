import React from 'react';
import ListWrapper from './ListWrapper';
import { useAxiosData } from '../hooks';

function AxiosExample() {
  const { loading, data, error } = useAxiosData();

  return <ListWrapper loading={loading} error={error} data={data} />;
}

export default AxiosExample;
