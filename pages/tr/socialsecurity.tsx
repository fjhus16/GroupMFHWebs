import Container from "../../components/container";
import ContactForm from "../../components/tr/contactform";
import Layout from "../../components/tr/layout";
import Head from "next/head";
import { getAllArticles } from "../../lib/api";
import { Article } from "../../interfaces/post";
import MoreStories from "../../components/tr/more-stories";
import Link from "next/link";

type Props = {
  allArticles: Article[];
};

export default function Socialsecurity({ allArticles }: Props) {
  var filteredArticles = allArticles
    .filter((article) => article.data.attributes.services.includes("Sosyal Güvenlik Danışmalığı")
    )
    

  let showArticles = filteredArticles.slice(0, 4);
  return (
    <>
      <Head>
        <title>Sosyal Güvenlik Danışmalığı - GroupMFH</title>
        <meta
          name="description"
          content="MFH Group, şirketlere iş ve sosyal güvenlik konularında çözüm odaklı hizmetler sunar."
        />
        <meta name="language" content="TR"/>
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Sosyal Güvenlik Danışmalığı
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group, şirketlere, Sosyal Güvenlik Kurumu işlemleri, fesih
              süreçleri, işe iade ve hesaplamaları, kıdem, ihbar ve izin ücreti,
              işyerinin devri, birleşmesi, iş sözleşmeleri ve yasal tüm
              yükümlülüklere uyum çalışmasının yapılması gibi iş ve sosyal
              güvenlik alanında çözüm oluşturmaktadır.
            </h4>
          </section>{" "}
          <div className="flex flex-col justify-center items-center">
            {showArticles.length > 0 && <MoreStories allArticles={showArticles} />}
            {showArticles.length > 0 && (
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
  const allArticles = await getAllArticles('tr',50);

  return {
    props: { allArticles },
    revalidate: 600,
  };
};
