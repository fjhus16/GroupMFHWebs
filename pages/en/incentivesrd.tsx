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

export default function Incentivesrd({ allArticles }: Props) {
  var filteredArticles = allArticles
    .filter((article) =>
        article.data.attributes.services.includes("Incentives and R&D Consultancy")
    )
    

  let showArticles = filteredArticles.slice(0, 4);

  return (
    <>
      <Head>
        <title>Incentives and R&D Consultancy - GroupMFH</title>
        <meta
          name="description"
          content="MFH Group: Tax, incentives, and dispute resolution solutions. We offer consultancy on investment, foreign direct investment, R&D incentives, and more. Trust us for expert guidance."
        />
        <meta name="language" content="EN"/>
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Incentives and R&D Consultancy
            </h2>
            <h4 className="text-justify text-md text-justify md:pl-8">
              MFH Group offers the following services with a solutions-oriented
              perspective which clients may require for the resolution of
              technical and complex issues such as Taxes, Incentives, Exemptions
              and disputes arising from legislation related to these issues:
              <br />
              <br />
              <p className="text-left">
                ✓ Consultancy on Investment Incentive Legislation (Investment
                Discount Exemption, VAT Exemption, Tax-Duty Fee Exemption, etc.)
                <br />
                ✓ Consultancy on the Implementation of the Foreign Direct
                Investment Law
                <br />
                ✓ Consultancy on R&D Incentive Legislation
                <br />
                ✓ Consultancy on Technopark Legislation
                <br />
                ✓ Consultancy on Free Zone Legislation
                <br />
                ✓ Consultancy on Trademark Incentive Legislation
                <br />
                ✓ Consultancy on Fair, Exhibition and Fair Incentive Legislation
                <br />
                ✓ Analysis of Tax Liabilities in Transactions Defined as
                "Invisible Transactions"
                <br />
                ✓ Obligations and Practices Related to the Resource Utilization
                Support Fund
                <br />✓ Other Tax Incentives
              </p>
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
  const allArticles =  await getAllArticles('en',50);

  return {
    props: { allArticles },
    revalidate: 600,
  };
};
