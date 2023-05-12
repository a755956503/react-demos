import React from 'react';
import { Route, Routes } from 'react-router';
import State from './state';
import Context from './context';
import Reducer from './reducer';
import Effect from './effect';
const HookPages = () => {
  return <Routes>
    <Route path="/hook/state" element={<State />}/>
    <Route path="/hook/context" element={<Context />}/>
    <Route path="/hook/reducer" element={<Reducer />}/>
    <Route path="/hook/effect" element={<Effect />}/>
  </Routes>
}
export default HookPages;
