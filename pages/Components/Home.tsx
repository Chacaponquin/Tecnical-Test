import moment from "moment";

interface HomeProps {
  homeArticles: any[];
}

const HomePage = ({ homeArticles }: HomeProps): JSX.Element => {
  return (
    <div className="home">
      {homeArticles &&
        homeArticles.map((article) => (
          <div className="home-post" key={article.objectID}>
            <h1>{article.story_title}</h1>

            <section>
              <h1>Author:</h1>
              <p>{article.author}</p>
            </section>

            <div>
              <p>{moment(new Date(article.created_at)).fromNow()}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default HomePage;
