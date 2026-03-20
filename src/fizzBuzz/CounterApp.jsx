import React from "react"

export default class CounterApp extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      count: 0
    };
  };

  onIncreaseEventHandler(){
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      };
    });
  };
  
  onResetEventHandler(){
    this.setState(() => {
      return {
        count: 0
      };
    });
  };
 
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.onIncreaseEventHandler}>Increment</button>
        <button onClick={this.onResetEventHandler}>Reset</button>
      </div>
    );
  };
};