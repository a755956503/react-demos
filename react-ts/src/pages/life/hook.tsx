import React, {  useEffect, useLayoutEffect, useRef } from 'react';
import HookChild from './hookChild';
const Hook = () => {
  const hookRef = useRef();
  useEffect(() => {
    console.log('useEffect');
  });
  useLayoutEffect(() =>{
    console.log('useLayoutEffect');
  });
  return <div key="parent-div" ref={(ref) => {
    console.log(ref);
    hookRef.current = ref as any;
  }}>
    <HookChild key="parent-child" />
  </div>
};
export default Hook;
