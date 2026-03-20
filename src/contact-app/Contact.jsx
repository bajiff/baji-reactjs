import DeleteButton from "./DeleteButton";
import {Component} from "react";
import { getData } from "./images";

export class ContactApp extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      contacts : getData(),
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);

  };
  
  
  onDeleteEventHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts
    });
  };
  
  
  render() {
    return (
      <section className="contact-app">
        <h1>Daftar Kontak</h1>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteEventHandler}/>
      </section>
  );
  }
  
};

const ContactList = ({contacts, onDelete}) => {
  return (
    <section className="contact-list">
      {contacts.map(contact => 
      <ContactItem key={contact.id} id={contact.id} onDelete={onDelete} {...contact} />) }
    </section>
  );
};

const ContactItem = ({image,name,username,id,onDelete}) => {
  return (
    <section className="contact-item">
      <ContactImage image={image} />
      <ContactDetail name={name} username={username} />
      <DeleteButton id={id} onDelete={onDelete} />
    </section>
  );
};

const ContactImage = ({image}) => {
  return (
    <section className="contact-item__image">
      <img className="" src={image} alt="Image" />
    </section>
  );
};

const ContactDetail = ({ name, username }) => {
  return (
    <section className="contact-item__body">
      <h3 className="contact-item__title">{name}</h3>
      <p className="contact-item__username">@{username}</p>
    </section>
  );
};

export default ContactApp;