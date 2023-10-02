import { Convert, Article } from "../interfaces/post";

const API_URL = "https://api.groupmfh.com/api/articles";

export async function getArticleByID(id: string) {
  const response = await fetch(
    `${API_URL}/${id}?fields[0]=title&fields[1]=date&fields[2]=excerpt&fields[3]=category&fields[4]=services&fields[5]=content&fields[6]=sector&fields[7]=locale&fields[8]=keywords&populate[coverImage][fields][0]=name&populate[coverImage][fields][1]=url&populate[localizations][fields][0]=locale`
  );
  const data = await response.json();
  const jsonString = JSON.stringify(data);
  const Article = Convert.toArticle(jsonString);
  return Article;
}

export async function getAllArticles(lang: string, count: number) {
  const fetchUrl = `${API_URL}?sort[0]=date:desc&fields[0]=title&fields[1]=date&fields[2]=excerpt&fields[3]=category&fields[4]=services&fields[5]=sector&fields[6]=locale&populate[coverImage][fields][0]=name&populate[coverImage][fields][1]=url&locale=${lang}&pagination[pageSize]=${count}`;
  const response = await fetch(fetchUrl);
  const data = await response.json();
  var Articles: Article[] = [];
  data.data.forEach((element) => {
    Articles.push(
      Convert.toArticle('{"data":' + JSON.stringify(element) + "}")
    );
  });
  return Articles;
}

/*
export async function getStaticProps() {
  const articles = await getAllArticles();

  return {
    props: {
      articles,
    },
  };
}
*/
