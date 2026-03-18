
const CardHeader = ({ category, image }) => {
  return (
    <section>
      <h2>{category}</h2>
      <img src={image} alt="Image" />
    </section>
  );
};

export default CardHeader;