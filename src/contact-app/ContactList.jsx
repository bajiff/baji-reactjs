
import ContactItem from "./ContactItem.jsx";
const ContactList = ({contacts, onDelete}) => {
  return (
    <section className="contact-list">
      {contacts.map(contact => 
      <ContactItem key={contact.id} id={contact.id} onDelete={onDelete} {...contact} />) }
    </section>
  );
};

export default ContactList