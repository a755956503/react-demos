import React, { useEffect, useMemo, useState } from 'react';

function Hook() {
  const [state1, setState1] = useState('1');
  const [state2, setState2] = useState('2');
  return (
    <div>
      <div>
        <button onClick={() => setState1(state1 + '1')}>更新</button>
      </div>
      {state1}
      <div>
      <button onClick={() => setTimeout(() => { setState2(state2 + '2') })}>更新2</button>
        <div>
        {state2}
        </div>
      </div>
    </div>
  );
}

function Hook1() {
  const [state1, setState1] = useState('1');
  const [state2, setState2] = useState('2');
  useEffect(() => {
    setState2(state1)
  }, [state1]);
  return (
    <div>
      <div>
        <button onClick={() => setState1(state1 + '1')}>更新</button>
      </div>
      {state1}
      <div>
      <button onClick={() => setTimeout(() => { setState2(state2 + '2') })}>更新2</button>
        <div>
        {state2}
        </div>
      </div>
    </div>
  );
}

export default Hook1;
