import React, { useState } from 'react';

function Update() {
  const [state1, setState1] = useState(0);
  const update = () => {
    setState1(state1 + 1);
  }
  return (
    <div>
      <button onClick={update}>更新</button>
      <div>{state1}</div>
    </div>
  );
}

export default Update;
