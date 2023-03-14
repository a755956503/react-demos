import React from 'react';
import ComChild from './comChild';

class LifeCom extends React.Component {
  state = {
    state1: 1
  }
  constructor(props: any) {
    super(props);
    console.log('constructor');
    this.state = {
      state1: 1
    };
  }
  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount');
  }

  componentDidMount(): void {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log('shouldComponentUpdate');
    return true;
  }

  UNSAFE_componentWillReceiveProps(nextProps: Readonly<{}>, nextContext: any): void {
    console.log('UNSAFE_componentWillReceiveProps');
  }

  UNSAFE_componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void {
    console.log('UNSAFE_componentWillUpdate');
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log('componentDidUpdate')
  }

  getSnapshotBeforeUpdate(preProps: any, preState: any) {
    console.log('getSnapshotBeforeUpdate');
    return {

    }
  }

  // static getDerivedStateFromProps(nextProps: any, preState: any) {
  //   console.log('getDerivedStateFromProps');
  //   return {};
  // }

  render() {
    return <div>
      <button onClick={() => this.setState({ state1: this.state.state1 + 1 }) }>更新</button>
      <div>{this.state.state1}</div>
      <ComChild prop1={this.state.state1} />
    </div>
  }
}

export default LifeCom;

