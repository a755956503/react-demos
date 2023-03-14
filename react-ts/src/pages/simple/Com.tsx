import React, { Component } from "react";

interface Prop1 {
  name: string;
  name1?: string;
}

class Com1 extends Component<Prop1> {
  render() {
    return <div>{this.props.name1}{this.props.name}</div>
  }
}

class Com2 extends Component {
  render() {
    return (<div>
      <Com1  name={'2'} name1={'1'}/>
      <Com1  name={'2'} />
    </div>)
  }
}
