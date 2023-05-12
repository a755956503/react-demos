import { Button } from "antd";
import React, { useState } from "react";
import { Breadcrumb  } from 'antd';
const State = () => {
  const [state1, setState1] = useState<number>(0);
  const [state2, setState2] = useState<number>(0);
  const click = () => {
    setState1(1);
    setState2(1);
    console.log(state1, state2);
    setTimeout(() => {
      setState1(2);
      setState2(2);
      console.log(state1, state2);
    })
  }
  return <div className="page-container">
    <p>{state1}</p>
    <p>{state2}</p>
    <div><button onClick={click}>更新状态</button></div>
  </div>
}

const StateInit = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(state1);
  return <div>
    <p>{state1}</p>
    <p>{state2}</p>
    <div><Button onClick={() => setState1(state1+ 1)}>更新1</Button></div>
    <div><Button onClick={() => setState2(state2 + 1)}>更新2</Button></div>
    <Breadcrumb
      items={[
        {
          title: 'Home',
        },
        {
          title: <a href="">Application Center</a>,
        },
        {
          title: <a href="">Application List</a>,
        },
        {
          title: 'An Application',
        },
      ]}
    />
  </div>
}
export default StateInit;