import React, { useState } from "react";

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
export default State;