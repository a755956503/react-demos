import React from 'react';
import { Route, Routes } from 'react-router';
import Typograph from './generate/typograph';
import Tab from './generate/tab';
import NotificationPage from './notification';

const AntdPages = () => {
  return <Routes>
    <Route path="/antd/typograph" element={<Typograph />}/>
    <Route path="/antd/tab" element={<Tab />}/>
    <Route path="/antd/notification" element={<NotificationPage />}/>
  </Routes>
}
export default AntdPages;
