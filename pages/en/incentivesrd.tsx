import Container from "../../components/container";
import ContactForm from "../../components/en/contactform";
import Layout from "../../components/en/layout";
import Head from "next/head";
import { getAllPosts } from "../../lib/api";
import Post from "../../interfaces/post";
import MoreStories from "../../components/en/more-stories";
import Link from "next/link";

type Props = {
  allPosts: Post[];
};

export default function Incentivesrd({ allPosts }: Props) {
  const filteredPosts = allPosts
    .filter(
      (post) =>
        post.lang === "en" &&
        post.serv.includes("Incentives and R&D Consultancy")
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  let showPosts = filteredPosts.slice(0, 4);

  return (
    <>
      <Head>
        <title>Incentives and R&D Consultancy - GroupMFH</title>
        <meta
          name="description"
          content="MFH Group: Tax, incentives, and dispute resolution solutions. We offer consultancy on investment, foreign direct investment, R&D incentives, and more. Trust us for expert guidance."
        />
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
            {showPosts.length > 0 && <MoreStories posts={showPosts} />}
            {showPosts.length > 0 && (
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
  const allPosts = getAllPosts([
    "lang",
    "cat",
    "serv",
    "sector",
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
