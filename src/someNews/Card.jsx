import CardBody from "./CardBody.jsx";
import CardHeader from "./CardHeader.jsx"
const Card = ({ date, title, content, link, image, category }) => {
  return (
    <section>
      <CardHeader category={category} image={image} />
      <CardBody date={date} title={title} content={content} link={link} />
    </section>
  );
};
export default Card;
