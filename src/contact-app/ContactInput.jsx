import { Component } from 'react'

export default class ContactInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: new Date(),
      name: "",
      tag: "",
    };
    
    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onTagChangeHandler = this.onTagChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  };
  
  onNameChangeHandler(e) {
    e.preventDefault();

    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  };
  
  onTagChangeHandler(e) {
    e.preventDefault();

    this.setState(() => {
      return {
        tag: e.target.value
      };
    });
  };
  
  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addContact(this.state);
    alert(this.state.name, this.state.tag);
  }

  render() {
    return (
      <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
        <input type="text" name="name" id="name" placeholder='name...' value={this.state.name} required autoFocus onChange={this.onNameChangeHandler} />
        <input type="text" name="tag" id="tag" placeholder='tag' value={this.state.tag} required onChange={this.onTagChangeHandler} />
        <button>Submit</button>
      </form>
    );
  };
};
