import React from 'react';

class ComChild extends React.Component<{ prop1: number }> {
  state = {
    state1: 1
  }

  constructor(props: any) {
    super(props);
    this.state = {
      state1: 1
    };
  }

  UNSAFE_componentWillMount() {
    console.log('Child UNSAFE_componentWillMount');
  }

  componentDidMount(): void {
    console.log('Child componentDidMount');
  }

  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log('Child shouldComponentUpdate');
    return true;
  }

  UNSAFE_componentWillReceiveProps(nextProps: Readonly<{}>, nextContext: any): void {
    console.log('Child UNSAFE_componentWillReceiveProps');
  }

  UNSAFE_componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void {
    console.log('Child UNSAFE_componentWillUpdate');
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log('Child componentDidUpdate')
  }

  getSnapshotBeforeUpdate(preProps: any, preState: any) {
    console.log('Child getSnapshotBeforeUpdate');
    return {

    }
  }

  static getDerivedStateFromProps(nextProps: any, preState: any) {
    console.log('Child getDerivedStateFromProps');
    return {};
  }

  render() {
    return <div>
      <div>----------Child-----------</div>
      <button onClick={() => this.setState({ state1: this.state.state1 + 1 }) }>更新</button>
      <div>{this.props.prop1}</div>
    </div>
  }
}

export default ComChild;

