import React from "react";

export default class Decrement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      angka : 0
    };
  };
  render() {
    return (
      <h1>Angka Kurang {this.state.angka}</h1>
    )
  }
};