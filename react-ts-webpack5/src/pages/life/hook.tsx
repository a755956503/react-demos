import React, {  useEffect, useLayoutEffect } from 'react';
import HookChild from './hookChild';
const Hook = () => {
  useEffect(() => {
    console.log('useEffect');
  });
  useLayoutEffect(() =>{
    console.log('useLayoutEffect');
  });
  return <div key="parent-div">
    <HookChild key="parent-child" />
  </div>
};
export default Hook;
