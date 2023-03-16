import React, {  useEffect, useLayoutEffect } from 'react';
const HookChild = (props) => {
  useEffect(() => {
    console.log('child useEffect');
  });
  useLayoutEffect(() => {
    console.log('child useLayoutEffect');
  });
  return <div key="child-div">
  </div>
};
export default HookChild;
