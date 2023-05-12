import React, { useReducer, useState } from "react"

const Reducer = () => {
  const [state1, setState1] = useState<number>(0);
  const [state2, dispatch] = useReducer((state1: number, action: 'add' | 'del') => {
    switch(action) {
      case 'add': return state1 + 1;
      case 'del': return state1 - 1;
      default: return state1;
    }
  }, state1);
  return <div className="page-container">
    <p>{state1}</p>
    <p>{state2}</p>
    <div><button onClick={() => setState1(state1 + 1)}>更新1</button></div>
    <div><button onClick={() => dispatch('add')}>更新1</button></div>
  </div>
}
export default Reducer;