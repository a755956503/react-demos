import React, { useContext, useState } from 'react';


const DataContext = React.createContext({ state: 1 });

const ContextPage1 = () => {
  const context = useContext(DataContext);
  return <div>{context.state}</div>
};

const ContextPageWithMemo = React.memo(ContextPage1, (preProps, nextProps) => {
  return true;
});

const ContextPage = () => {
  const context = useContext(DataContext);
  const [state1, setState1] = useState(2);
  return <DataContext.Provider value={{ ...context, state: state1 }}>
    <div>{context.state}</div>
    <div>
      <button onClick={() => setState1(state1 + 1)}>更新Context</button>
    </div>
    <ContextPageWithMemo />
  </DataContext.Provider>;
};
export default ContextPage;