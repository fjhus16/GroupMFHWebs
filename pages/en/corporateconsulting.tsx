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

export default function Corporateconsulting({ allArticles }: Props) {
  var filteredArticles = allArticles
    .filter((article) =>
        article.data.attributes.locale === "en" &&
        article.data.attributes.services.includes(
          "Management, Corporate Finance and Technology Consulting"
        )
    )
    

  let showArticles = filteredArticles.slice(0, 4);
  return (
    <>
      <Head>
        <title>
          Management, Corporate Finance and Technology Consulting - GroupMFH
        </title>
        <meta
          name="description"
          content="MFH Group: Tailored solutions, collaborative approach. Expertise, flexibility, industry knowledge. Trust us for consultancy expertise."
        />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Management, Corporate Finance and Technology Consulting
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group's technical knowledge and experience, flexibility and
              close working relationship with our clients enables us to be a
              team capable of developing a different approach for each different
              case. We enrich and differentiate our sector and subject matter
              expertise, which is the result of our technical knowledge and
              experience, by working with companies of varying scales and
              structures. Our goal in every project is to implement feasible and
              result-oriented approaches that will add value to our customers
              with our flexible working structure. Our consultancy team is
              equipped with the most up-to-date theoretical knowledge, as well
              as practical experience and the latest technological developments
              in order to realize your projects. MFH Group is organized to
              provide management consultancy support by acting as a whole in
              line with customer needs.
            </h4>
          </section>
          <div className="flex flex-col justify-center items-center">
            {showArticles.length > 0 && <MoreStories allArticles={showArticles} />}
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
  const allArticles = await getAllArticles();

  return {
    props: { allArticles },
  };
};
