import React from 'react';
import Child11 from './child11';

function Child1() {
  return (
    <div key="child1">
      child1
      <Child11 key={'child1-child11'} />
    </div>
  );
}

export default Child1;
