import DeleteButton from "./DeleteButton";
import { getData } from "./images";

const ContactApp = () => {
  const contacts = getData();
  return (
    <section className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts}/>
    </section>
  );
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