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

export default function Competition({ allArticles }: Props) {
  var filteredArticles = allArticles.filter(
    (article) =>
      article.data.attributes.locale === "en" &&
      article.data.attributes.services.includes(
        "Competition Law and Compliance Services"
      )
  );

  let showArticles = filteredArticles.slice(0, 4);

  return (
    <>
      <Head>
        <title>Competition Law and Compliance Services</title>
        <meta
          name="description"
          content="MFH Group: Comprehensive financial, administrative, and legal services. Tax consulting, dispute resolution, establishment procedures, and more. Trust us for tailored solutions."
        />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col text-justify flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Competition Law and Compliance Services
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group provides the following services to ensure that your
              industry and company operate in compliance with fair competition
              rules within the scope of Law No. 4054 on Protection of
              Competition:
              <br />
            </h4>
            <br />
            <p className="text-left">
              ✓ Preparation of a customized competition compliance program for
              your company
              <br />
              ✓ Legal consultancy services regarding investigations conducted by
              the Competition Authority (including administrative judicial
              stages)
              <br />
              ✓ Mergers & acquisitions
              <br />
              ✓ Negative clearance and exemption application procedures
              <br />
            </p>
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
  const allArticles = await getAllArticles();

  return {
    props: { allArticles },
    revalidate: 600,
  };
};
