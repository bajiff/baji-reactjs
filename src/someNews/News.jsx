import Card from "./Card.jsx";
import Header from "./Header.jsx";
const News = () => {
  // data news
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://picsum.photos/600/400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://picsum.photos/600/400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://picsum.photos/600/400',
      category: 'Travel',
      link: '#'
    }
  ];
 
  return (
    <section>
      <Header/>

      {someNews.map((news, index) => 
        <Card key={index} date={news.date} title={news.title} content={news.content} link={news.link} image={news.image} category={news.category} />)
      }

      {/* {someNews.map((news,index) => (
          <ul key={index}>
            <li>{news.title}</li>
            <li>{news.date}</li>
            <li>{news.content}</li>
            <li><img src={news.image} alt="Infokan" /></li>
            <li>{news.category}</li>
            <a href={news.link}>Find out More</a>
          </ul>
    ))} */}
    </section>
  );
};

export default News;