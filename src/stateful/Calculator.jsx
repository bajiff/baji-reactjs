import { Component } from 'react'

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      angka: 0
    };
  };

  increment = () => {
    this.setState({
      angka: this.state.angka + 1
    });
  };

  decrement = () => {
    this.setState({
      angka: (this.state.angka <= 0 ? this.state.angka : this.state.angka - 1)
    });
  };

  render() {
    return (
      <div>
        <h1>Angka: {this.state.angka}</h1>
        <button onClick={this.increment}>Tambah</button>
        <button onClick={this.decrement}>Kurang</button>
      </div>
    );
  };
}
