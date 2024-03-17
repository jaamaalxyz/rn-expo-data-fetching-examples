import React from 'react';
import ListWrapper from './ListWrapper';
import { useData } from '../hooks';

function FetchExample({ type }) {
  const { loading, data, error } = useData(type);

  return <ListWrapper loading={loading} error={error} data={data} />;
}

export default FetchExample;
