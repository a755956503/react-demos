import React, { useReducer, useState } from "react"

const Reducer = () => {
  const [state1, setState1] = useState<number>(0);
  const [state2, dispatch] = useReducer((state) => {
    return state;
  }, state1);
  return <div className="page-container">
    <p>{state1}</p>
    <p>{state2}</p>
    <div><button onClick={() => setState1(state1 + 1)}>更新1</button></div>
    <div><button onClick={() => dispatch(state1 + 1)}>更新1</button></div>
  </div>
}
export default Reducer;