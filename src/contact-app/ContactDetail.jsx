const ContactDetail = ({ name, tag }) => {
  return (
    <section className="contact-item__body">
      <h3 className="contact-item__title">{name}</h3>
      <p className="contact-item__username">@{tag}</p>
    </section>
  );
};

export default ContactDetail;