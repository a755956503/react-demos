import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { getCookie } from './util';
// import { Global  } from './constants'
// console.log(Global.Version1);
// getCookie();
// getCookie('1', '2');


// getCookie()



// 跨页面对象
// import { Menu } from './var';
// let menu: Menu = { name1: 1};
// let menu: Menu = { n }


// let a = {
//   prop1: 'value1'
// };
// console.log(a.prop2);



// console.log(a.pr)

// window.onmousedown = function(mouseEvent) {
//   console.log(mouseEvent);  //<- Error
// };


// 类型
// 定义
// let type1: { props1: string } = { props1: '1' };
//



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
