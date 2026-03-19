import React from "react";

export default class Increment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      angka: 0
    };
  };
  
  render() {
    return (
      <h1>Angka Tambah {this.state.angka}</h1>
    )
  }
}