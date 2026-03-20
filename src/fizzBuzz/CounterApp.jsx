import React from "react"

export const CounterDisplay = ({ counter }) => {
  return <p>{counter}</p>
};

export const IncreaseButton = ({ increase } ) => {
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export const ResetButton = ({ reset }) => {
  return (
    <div>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default class CounterApp extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      count: 0
    };
    
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this)
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
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
      <>
        <IncreaseButton increase={this.onIncreaseEventHandler}/>
        <CounterDisplay counter={this.state.count}/>
        <ResetButton reset={this.onResetEventHandler}/>
      </>
    );
  };
};