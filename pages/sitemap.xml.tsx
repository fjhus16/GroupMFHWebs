import Article from "../interfaces/post";
import { getAllArticles } from "../lib/api";

const URLEn = "https://groupmfh.com/en";
const URLTr = "https://groupmfh.com/tr";

function generateSiteMap(postsEn: Article[], postsTr: Article[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>https://groupmfh.com/en</loc></url>
      <url><loc>https://groupmfh.com/en/about</loc></url>
      <url><loc>https://groupmfh.com/en/accounting</loc></url>
      <url><loc>https://groupmfh.com/en/belgrade</loc></url>
      <url><loc>https://groupmfh.com/en/blog</loc></url>
      <url><loc>https://groupmfh.com/en/competition</loc></url>
      <url><loc>https://groupmfh.com/en/contact</loc></url>
      <url><loc>https://groupmfh.com/en/corporateconsulting</loc></url>
      <url><loc>https://groupmfh.com/en/foreigntrade</loc></url>
      <url><loc>https://groupmfh.com/en/global</loc></url>
      <url><loc>https://groupmfh.com/en/incentivesrd</loc></url>
      <url><loc>https://groupmfh.com/en/legal</loc></url>
      <url><loc>https://groupmfh.com/en/legislations</loc></url>
      <url><loc>https://groupmfh.com/en/london</loc></url>
      <url><loc>https://groupmfh.com/en/ourvalues</loc></url>
      <url><loc>https://groupmfh.com/en/socialsecurity</loc></url>
      <url><loc>https://groupmfh.com/en/taxaudit</loc></url>
      <url><loc>https://groupmfh.com/en/team</loc></url>
      <url><loc>https://groupmfh.com/tr</loc></url>
      <url><loc>https://groupmfh.com/tr/about</loc></url>
      <url><loc>https://groupmfh.com/tr/accounting</loc></url>
      <url><loc>https://groupmfh.com/tr/belgrade</loc></url>
      <url><loc>https://groupmfh.com/tr/blog</loc></url>
      <url><loc>https://groupmfh.com/tr/competition</loc></url>
      <url><loc>https://groupmfh.com/tr/contact</loc></url>
      <url><loc>https://groupmfh.com/tr/corporateconsulting</loc></url>
      <url><loc>https://groupmfh.com/tr/foreigntrade</loc></url>
      <url><loc>https://groupmfh.com/tr/global</loc></url>
      <url><loc>https://groupmfh.com/tr/incentivesrd</loc></url>
      <url><loc>https://groupmfh.com/tr/legal</loc></url>
      <url><loc>https://groupmfh.com/tr/legislations</loc></url>
      <url><loc>https://groupmfh.com/tr/london</loc></url>
      <url><loc>https://groupmfh.com/tr/ourvalues</loc></url>
      <url><loc>https://groupmfh.com/tr/socialsecurity</loc></url>
      <url><loc>https://groupmfh.com/tr/taxaudit</loc></url>
      <url><loc>https://groupmfh.com/tr/team</loc></url>
     ${postsEn.map((post) => {
       return `
      <url>
          <loc>${`${URLEn}/posts/${post.data.id}`}</loc>
      </url>
    `;
     })}
     ${postsTr.map((post) => {
       return `
      <url>
          <loc>${`${URLTr}/posts/${post.data.id}`}</loc>
      </url>
    `;
     })}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  var postsEn: Article[] = await getAllArticles("en", 1000);
  var postsTr: Article[] = await getAllArticles("tr", 1000);

  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(postsEn, postsTr);

  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
