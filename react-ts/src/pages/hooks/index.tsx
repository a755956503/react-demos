import React from 'react';
import { Route, Routes } from 'react-router';
import State from './state';
const HookPages = () => {
  return <Routes>
    <Route path="/hook/state" element={<State />}/>
  </Routes>
}
export default HookPages;
