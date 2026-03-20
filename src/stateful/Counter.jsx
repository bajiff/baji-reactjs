import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count <= 0 ? this.state.count : this.state.count - 1)
    });
  };
  
  reset = () => {
    this.setState({
      count: this.state.count = 0
    })
  }
  
  render(){
    return (
      <section>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>Kurang</button>
        <button onClick={this.increment}>Tambah</button>
        <button onClick={this.reset}>Reset</button>
      </section>
    )
  }
  
};