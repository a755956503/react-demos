import React from 'react';
import { Route, Routes } from 'react-router';
import State from './state';
import Context from './context';
const HookPages = () => {
  return <Routes>
    <Route path="/hook/state" element={<State />}/>
    <Route path="/hook/context" element={<Context />}/>
  </Routes>
}
export default HookPages;
