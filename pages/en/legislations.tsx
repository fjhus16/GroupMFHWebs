import Container from "../../components/container";
import ContactForm from "../../components/en/contactform";
import Layout from "../../components/en/layout";
import Head from "next/head";
import { getAllArticles } from "../../lib/api";
import { Article } from "../../interfaces/post";
import MoreStories from "../../components/en/more-stories";
import Link from "next/link";

type Props = {
  allArticles: Article[];
};

export default function Legislations({ allArticles }: Props) {
  var filteredArticles = allArticles.filter(
    (article) =>
      article.data.attributes.services.includes(
        "Company Law Legislation Consultancy"
      )
  );

  let showArticles = filteredArticles.slice(0, 4);
  return (
    <>
      <Head>
        <title>Company Law Legislation Consultancy - GroupMFH</title>
        <meta
          name="description"
          content="MFH Group: We assist with seamless changes in commercial enterprises and companies, complying with Turkish Commercial Code No. 6102 and tax legislation."
        />
        <meta name="language" content="EN"/>
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Company Law Legislation Consultancy
            </h2>
            <h4 className="text-left text-md text-justify md:pl-8">
              Pursuant to the Turkish Commercial Code No. 6102 and the secondary
              legislation issued in relation to this Code, necessary services
              are provided for the change of type of commercial enterprises and
              companies, mergers or divisions of companies in accordance with
              the tax legislation.
            </h4>
          </section>

          <div className="flex flex-col justify-center items-center">
            {showArticles.length > 0 && (
              <MoreStories allArticles={showArticles} />
            )}
            {showArticles.length > 0 && (
              <Link
                href="/en/blog"
                className="text-sm ism:text-md mx-3 bg-gray-700 hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-10 lg:px-8 duration-200 transition-colors mb-6"
              >
                More posts
              </Link>
            )}
          </div>
          <ContactForm />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allArticles =  await getAllArticles('en',50);

  return {
    props: { allArticles },
    revalidate: 600,
  };
};
