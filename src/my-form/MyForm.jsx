import { Component } from 'react'

export default class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state={
      name: "",
      email: "",
      gender: "Man",
    };
    
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onNameChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
  };
  
  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value
      };
    });
  };
  
  onEmailChangeEventHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value
      };
    });
  };
  
  onGenderChangeEventHandler(event) {
    this.setState((previousState) => {
      return {
        gender: event.target.value
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form>
          <label htmlFor="name">Name: </label>
          <input id="name" value={this.state.name} onChange={this.onNameChangeEventHandler} required autoFocus type="text" />
          <br />
          <label htmlFor="email">Email: </label>
          <input id="email" value={this.state.email} onChange={this.onEmailChangeEventHandler} required  type="text" />
          <br />
          <label htmlFor="gender">Gender: </label>
          <select id="gender" value={this.state.gender} onChange={this.onGenderChangeEventHandler} required >
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
 
