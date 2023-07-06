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

export default function Taxaudit({ allPosts }: Props) {
  const filteredPosts = allPosts
    .filter((post) => post.lang === "en" && post.serv.includes("Tax Auditing"))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  let showPosts = filteredPosts.slice(0, 4);

  return (
    <>
      <Head>
        <title>Tax Auditing - GroupMFH</title>
        <meta
          name="description"
          content="MFH Group: Trusted tax auditing and certification services for individuals and businesses. Compliance, certified reports, and peace of mind."
        />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Tax Auditing
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group audits and certifies the balance sheets, income
              statements and tax declarations of individuals and legal entities
              (companies, associations, foundations, and their enterprises), as
              well as their requests related to tax laws, in terms of compliance
              with tax laws and generally accepted accounting standards. The
              prepared audit reports are submitted for the use of clients and
              official authorities. Tables that have been certified by Sworn-in
              Financial Advisors and given to official authorities in accordance
              with the law are considered as a document that has been examined
              to the extent of certification by the state's audit officials.
            </h4>
          </section>
          <div className="flex flex-col justify-center items-center">
            {showPosts.length > 0 && <MoreStories posts={showPosts} />}
            <Link
              href="/en/blog"
              className="text-sm ism:text-md mx-3 bg-gray-700 hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-10 lg:px-8 duration-200 transition-colors mb-6"
            >
              More posts
            </Link>
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
