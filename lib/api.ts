import { Convert, Article } from "../interfaces/post";

const API_URL = "https://api.groupmfh.com/api/articles";

export async function getArticleByID(id: string) {
  
    const response = await fetch(
      `${API_URL}/${id}?populate=*`
    );
    const data = await response.json();
    const jsonString = JSON.stringify(data);
    const Article = Convert.toArticle(jsonString);
    return Article;
  
}

export async function getAllArticles() {
  
    const response = await fetch(`${API_URL}?sort[0]=date:desc&fields[0]=id&locale=all`);
    const data = await response.json();
    const ids = data.data.map(item => item.id);
    const Articles: Article[] = await Promise.all(ids.map((id) => getArticleByID(id)));
    return Articles;

}

export async function getStaticProps() {
  const articles = await getAllArticles();

  return {
    props: {
      articles,
    },
  };
}
