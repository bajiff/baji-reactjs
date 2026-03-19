import { getData } from "./images";

const Contact = () => {
  const contacts = getData();
  return (
    <section className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactContainer contacts={contacts}/>
    </section>
  );
};

const ContactContainer = ({contacts}) => {
  return (
    <section className="contact-list">
      {contacts.map(contact => <ContactCard image={contact.image} name={contact.name} username={contact.username}/>) }
    </section>
  );
};

const ContactCard = ({image,name,username}) => {
  return (
    <section className="contact-item">
      <ContactImage image={image} />
      <ContactDetail name={name} username={username} />
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

export default Contact;