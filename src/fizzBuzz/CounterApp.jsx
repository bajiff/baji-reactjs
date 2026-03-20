import React from "react"

export const CounterDisplay = ({ counter }) => {
  if (counter === 0 ) {
    return <p>{counter}</p>
  };
  if (counter % 5 === 0 && counter % 7 === 0 ) {
    return <p>FizzBuzz</p>
  };
  if (counter % 5 === 0 ) {
    return <p>Fizz</p>
  };
  if (counter % 7 === 0 ) {
    return <p>Buzz</p>
  }
  return <p>{counter}</p>
};

export const IncreaseButton = ({ increase } ) => {
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export const DecreaseButton = ({decrease})=>{
  return (
    <div>
      <button onClick={decrease}>Decrase</button>
    </div>
  )
}

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
    
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onDecreaseEventHandler = this.onDecreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  };

  onIncreaseEventHandler(){
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      };
    });
  };
  
  onDecreaseEventHandler(){
    this.setState((previousState) => {
      return {
        count: (previousState.count === 0 ? previousState.count : previousState.count - 1)
      }
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
        <DecreaseButton decrease={this.onDecreaseEventHandler} />
        <ResetButton reset={this.onResetEventHandler}/>
      </>
    );
  };
};