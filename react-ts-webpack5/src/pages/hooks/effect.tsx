import React, { useEffect, useState, useLayoutEffect } from "react"

const Reducer = () => {
  const [state1, setState1] = useState<number>(0);
  useEffect(() => {
    console.log('useEffect');
  }, [state1]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  }, [state1]);

  return <div className="page-container">
    <p>{state1}</p>
    <div><button onClick={() => setState1(state1 + 1)}>更新1</button></div>
  </div>
}
export default Reducer;