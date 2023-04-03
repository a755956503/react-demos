import React from 'react';
import { Route, Routes } from 'react-router';
import Typograph from './generate/typograph';
import Tab from './generate/tab';
const AntdPages = () => {
  return <Routes>
    <Route path="/antd/typograph" element={<Typograph />}/>
    <Route path="/antd/tab" element={<Tab />}/>
  </Routes>
}
export default AntdPages;
