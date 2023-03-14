import React, { Children } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { getCookie } from './util';
import { Global  } from './constants'
import Child1 from './Child1';
// import Hook from './pages/hook/hook';
import Update from './pages/update/update';
// import { Switch } from 'react-router';
import Diff from './pages/diff/diff';
import Diff2 from './pages/diff/diff2';
import Hook from './pages/hook';

console.log(Global.Version1);
getCookie();
getCookie('1', '2');


getCookie()

let a = {
  prop1: 'value1'
};



console.log(a.prop2);


console.log(a.prop)



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/hook"><Hook /></Route> */}
          <Route path="/">
            <Child1 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function App1() {
  return (
    <div className="App">
      <Update />
    </div>
  );
}

function Container(props) {
  return <div key="container">
    <div key="container1">container</div>
    {props.children}
  </div>
}

function Block(props) {
  return <div key="block">
    block
  </div>
}

function AppDiff() {
  return (
    <div className="App" key={'app'}>
      <Block key="block-p" />
      <Container  key="container-p">
      <Diff key={'diff'} />
      </Container>
    </div>
  );
}
function AppDiff2() {
  return (
    <div className="App" key={'app'}>
      <Diff2 key="app-diff2" />
    </div>
  )
}

function AppHook() {
  return (
    <div className="App" key={'app'}>
      <Hook key="app-diff2" />
    </div>
  )
}


export default AppHook;
