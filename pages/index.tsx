import { server } from "../config";
import styles from "../styles/Home.module.css";
import ArticleList from "../components/ArticleList";
import { ArticleItemType } from "../components/ArticleItem";

interface HomeProps {
  articles: ArticleItemType[];
}

const Home = ({ articles }: HomeProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1 className="ta-center">Welcome to Dev News</h1>
      <div className="mt-50">
        <ArticleList articles={articles} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts?_limit=6`
  // );
  let articles = [];
  let error = "";
  try {
    const res = await fetch(`${server}/api/articles`, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });
    articles = await res.json();
  } catch (e: any) {
    error = e.toString();
  }
  return {
    props: {
      articles,
      error
    },
  };
};

export default Home;
