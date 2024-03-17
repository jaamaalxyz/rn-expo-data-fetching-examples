import React from 'react';
import ListWrapper from './ListWrapper';
import { useData } from '../hooks';

function FetchExample() {
  const { loading, data, error } = useData();

  return <ListWrapper loading={loading} error={error} data={data} />;
}

export default FetchExample;
