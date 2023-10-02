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

export default function Foreigntrade({ allArticles }: Props) {
  var filteredArticles = allArticles
    .filter((article) =>
        article.data.attributes.services.includes("Customs and Foreign Trade Legislation Consultancy")
    )
    

  let showArticles = filteredArticles.slice(0, 4);
  return (
    <>
      <Head>
        <title>
          Customs and Foreign Trade Legislation Consultancy - GroupMFH
        </title>
        <meta
          name="description"
          content="MFH Group: Export, import, and foreign exchange solutions. We cover customs, tax, and trade legislation. Trust us for comprehensive support."
        />
        <meta name="language" content="EN"/>
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Customs and Foreign Trade Legislation Consultancy
            </h2>
            <h4 className="text-md text-justify md:pl-8">
              MFH Group offers the following services that its customers may
              need within the scope of Export, Import and Foreign Exchange
              Legislation and applications with a solution-oriented perspective:
              <br />
              <br /><p className="text-left">
              ✓ Customs legislation
              <br />
              ✓ Foreign trade legislation
              <br />
              ✓ Tax legislation related to foreign trade (GMSI, SMK, withholding
              tax, VAT, stamp tax)
              <br />
              ✓ Consultancy on the Legislation on the Protection of the Value of
              Turkish Currency
              <br />
              ✓ VAT-Tax legislation and refund transactions
              <br />
              ✓ Export transactions
              <br />
              ✓ Inward processing regime
              <br />
              ✓ Customs reconciliation (counseling in the reconciliation
              process)
              <br />
              ✓ Customs litigation
              <br />
              ✓ Audit process (consultancy in the process of inspector review)
              </p>
              <br />
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
  const allArticles = await getAllArticles('en',50);

  return {
    props: { allArticles },
    revalidate: 600,
  };
};
