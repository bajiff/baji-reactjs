import Button from "./Button.jsx";

const CardBody = ({ date, title, content, link }) => {
  return (
    <article>

      <p>{date}</p>
      <h3>{title}</h3>
      <p>{content}</p>
      <Button link={link} />

    </article>
  );
};

export default CardBody;