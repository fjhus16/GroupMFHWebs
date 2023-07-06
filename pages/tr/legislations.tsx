import Container from "../../components/container";
import ContactForm from "../../components/tr/contactform";
import Layout from "../../components/tr/layout";
import Head from "next/head";
import { getAllPosts } from "../../lib/api";
import Post from "../../interfaces/post";
import MoreStories from "../../components/tr/more-stories";
import Link from "next/link";

type Props = {
  allPosts: Post[];
};

export default function Legislations({ allPosts }: Props) {
  const filteredPosts = allPosts
    .filter(
      (post) =>
        post.lang === "tr" &&
        post.serv.includes("Şirketler Hukuku Mevzuatı Danışmanlığı")
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  let showPosts = filteredPosts.slice(0, 4);
  return (
    <>
      <Head>
        <title>Şirketler Hukuku Mevzuatı Danışmanlığı - GroupMFH</title>
        <meta
          name="description"
          content="6102 sayılı Türk Ticaret Kanunu'na göre, ticari işletmelerin tür değişikliği, birleşme veya bölünme işlemleri vergi mevzuatına uygun hizmetlerle gerçekleştirilir."
        />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Şirketler Hukuku Mevzuatı Danışmanlığı
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              6102 sayılı Türk Ticaret Kanunu ve bu Kanuna ilişkin çıkarılan
              tali mevzuata göre ticari işletmelerin ve şirketlerin tür
              değişikliği; şirketlerin birleşme veya bölünme işlemleri vergi
              mevzuatıyla uyumlu olarak yapılmasında gerekli hizmetler
              sunulmaktadır.
            </h4>
          </section>{" "}
          <div className="flex flex-col justify-center items-center">
            {showPosts.length > 0 && <MoreStories posts={showPosts} />}
            {showPosts.length > 0 && (
              <Link
                href="/tr/blog"
                className="text-sm ism:text-md mx-3 bg-gray-700 hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-10 lg:px-8 duration-200 transition-colors mb-6"
              >
                Daha fazla yazı
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
