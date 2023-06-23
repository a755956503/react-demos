import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LifeCom from './com';
import Hook from './hook';
import RefCom from './ref';
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
      <Route path="/lifehook" element={<Hook />}></Route>
      <Route path="/liferef" element={<RefCom />}></Route>
    </Routes>
  );
}

export default Life;
