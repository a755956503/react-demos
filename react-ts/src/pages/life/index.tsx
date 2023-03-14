import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LifeCom from './com';

function Child() {
  console.log('child');
  return <div>Child</div>
}

function Life() {
  // const dom = <Child />;
  // console.log('father');
  return (
    <Routes>
      <Route path="/life" element={<LifeCom />}></Route>
    </Routes>
  );
}

export default Life;
