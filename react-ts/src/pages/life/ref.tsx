import React, { useRef } from 'react';

const RefCom = () => {
  const ref1 = useRef<HTMLDivElement | null>();

  return (<div ref={(ref) => {
    ref1.current = ref
  }}>

  </div>)
}
export default RefCom;