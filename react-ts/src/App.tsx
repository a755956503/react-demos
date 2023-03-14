import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HookPages from './pages/hooks';
import LifePages from './pages/life';
import Antd from './pages/antd';

function RouteApp() {
  return <Router>
    <HookPages />
    <LifePages />
  </Router>
}

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

export default RouteApp;
// export default AppAntd;
