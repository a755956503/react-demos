import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import HookPages from './pages/hooks';
// import LifePages from './pages/life';
// import AntdPages from './pages/antd';
import ContextPage from './pages/hooks/context';

// function RouteApp() {
//   return <Router>
//     <HookPages />
//     <LifePages />
//     <AntdPages />
//   </Router>
// }

// function Child() {
//   return (
//     <div>Child</div>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <p>parent</p>
//       <Child />
//     </div>
//   );
// }


// function AppAntd() {
//   return (
//     <div className="App">
//       <Antd />
//     </div>
//   );
// }
function ContextApp() {
  return (
    <div>
      <ContextPage />
    </div>
  )
}

export default ContextApp;
// export default AppAntd;
