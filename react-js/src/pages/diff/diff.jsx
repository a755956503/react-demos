import React, { useState } from 'react';
import Child1 from './child1';
import Child2 from './child2';

function Diff() {
  const [state1, setState1] = useState(0);
  const update = () => {
    setState1(state1 === 1 ? 0 : 1);
  }
  return (
    <div  key="diff1">
      <div key="diff2">
        <button  key="diff-button" onClick={update}>更新</button>
      </div>
      { state1 === 1 ? <Child1 key={'child1'} /> :
      <Child2  key={'child2'} />
      }
    </div>
  );
}

export default Diff;
