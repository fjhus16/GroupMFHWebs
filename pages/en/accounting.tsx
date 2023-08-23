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

export default function Accounting({ allArticles }: Props) {
  var filteredArticles = allArticles.filter(
    (article) =>
      article.data.attributes.locale === "en" &&
      article.data.attributes.services.includes(
        "Accounting and Financial Consultancy Services"
      )
  );

  let showArticles = filteredArticles.slice(0, 4);

  return (
    <>
      <Head>
        <title>Accounting and Financial Consultancy Services - GroupMFH</title>
        <meta
          name="description"
          content="MFH Group: Comprehensive financial, administrative, and legal services. Tax consulting, dispute resolution, establishment procedures, and more. Trust us for tailored solutions."
        />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col text-justify flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Accounting and Financial Consultancy Services
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group provides the following services that clients may require
              during financial, administrative and legal events they face with a
              solution-oriented perspective:
              <br />
              <br />
              <p className="text-left">
                ✓ Financial Consulting
                <br />
                ✓ Tax Planning
                <br />
                ✓ Tax Legislation and Practices Consultancy
                <br />
                ✓ Tax Disputes (Tax Litigation)
                <br />
                ✓ Tax Compromises
                <br />
                ✓ Cost Accounting Consultancy
                <br />
                ✓ International Tax Consulting
                <br />
                ✓ Bilateral Tax Treaty Implementation
                <br />
                ✓ Foreign Capital Legislation, Practices and Foreign Capital
                Investments and Financial Advisory
                <br />
                ✓ Tax Practices of Foreign Individuals/Companies
                <br />
                ✓ Establishment Procedures (Establishment of Domestic and
                Foreign Capital Companies, Branches, Liaison Offices and
                Representative Offices)
                <br />
                ✓ Mergers and Acquisitions, Valuation, Company Liquidation
                <br />
                ✓ Articles of Association Amendments, General Assembly Meetings
                <br />
                ✓ Capital Market Practices (Public Offering Studies)
                <br />
                ✓ Up-to-date Information Transmissions on Changes in Financial
                Legislation
                <br />
              </p>
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
  const allArticles = await getAllArticles();

  return {
    props: { allArticles },
  };
};
