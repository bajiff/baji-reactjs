import ContactImage from "./ContactImage.jsx";
import ContactDetail from "./ContactDetail.jsx";
import DeleteButton from "./DeleteButton.jsx";
const ContactItem = ({image,name,tag,id,onDelete}) => {
  return (
    <section className="contact-item">
      <ContactImage image={image} />
      <ContactDetail name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </section>
  );
};

export default ContactItem;