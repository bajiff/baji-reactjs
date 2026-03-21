import {Component} from "react";
import { getData, imgDefault } from "./images";
import ContactList from "./ContactList.jsx";
import ContactInput from "./ContactInput.jsx";

export class ContactApp extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      contacts : getData(),
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  };
  
  
  onDeleteEventHandler(id) {
    // Nampung si contact nya dulu
    const contacts = this.state.contacts.filter(contact => contact.id !== id);

    // ? Lalu ubah dengan this.setState dan masukkan variabel contacts didalamnya
    this.setState({
      contacts: contacts
    });
  };
  
  
  onAddContactHandler({name,tag}) {
    this.setState((prevState) => {
      return {
        contacts : [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            image: imgDefault
          }
        ]
      };
    });
  };
  
  render() {
    return (
      <section className="contact-app">
        <h1>Daftar Kontak</h1>
        <ContactInput addContact={this.onAddContactHandler}/>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteEventHandler}/>
      </section>
    );
  };
};


export default ContactApp;