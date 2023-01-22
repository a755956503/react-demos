import React, { useState } from 'react';

function Child1() {
  return (
    <div key="child1">
      Child1
    </div>
  );
}

function Child2() {
  return (
    <div key="child2">
      Child2
    </div>
  );
}

function Child3() {
  return (
    <div key="child3">
      Child3
    </div>
  );
}

function Child4() {
  return (
    <div key="child4">
      Child4
    </div>
  );
}

function Diff2() {
  const [state, setState] = useState(true);
  let arr;
  if (state) {
    arr = [
      <Child1 key={"diff-child1"}/>,
      <Child2 key={"diff-child2"}/>,
      <Child3 key={"diff-child3"}/>,
      <Child4 key={"diff-child4"}/>
    ];
  } else {
    // arr = [
    //   <Child3 key={"diff-child3"}/>,
    //   <Child4 key={"diff-child4"}/>,
    //   <Child2 key={"diff-child2"}/>,
    //   <Child1 key={"diff-child1"}/>
    // ];
    arr = [
      <Child1 key={"diff-child1"}/>,
      <Child2 key={"diff-child2"}/>,
      <Child4 key={"diff-child4"}/>,
      <Child3 key={"diff-child3"}/>
    ];

  }
  return <div key="diff2">
    <button key="button" onClick={() => setState(!state)}>切换</button>
    {arr}
  </div>
}

export default Diff2;
