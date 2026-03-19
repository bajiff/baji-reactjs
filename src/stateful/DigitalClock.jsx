import React from "react";

export default class DigitalClock extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      waktu: new Date()
    };
  };
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.detikBerjalan();
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  };
  detikBerjalan() {
    this.setState({
      waktu: new Date()
    });
  };
  
 render(){
  return (
    <h1>Waktu saat ini {this.state.waktu.toLocaleDateString()}</h1>
  )
 } 
};