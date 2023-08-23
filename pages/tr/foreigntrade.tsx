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

export default function Foreigntrade({ allArticles }: Props) {
  var filteredArticles = allArticles
    .filter((article) =>
        article.data.attributes.locale === "tr" && article.data.attributes.services.includes("Gümrük ve Dış Ticaret")
    )
    

  let showArticles = filteredArticles.slice(0, 4);
  return (
    <>
      <Head>
        <title>Gümrük ve Dış Ticaret Mevzuatı Danışmalığı - GroupMFH</title>
        <meta
          name="description"
          content="MFH Group, İhracat, İthalat ve Kambiyo Mevzuatı alanında çözüm odaklı hizmetler sunar."
        />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Gümrük ve Dış Ticaret Mevzuatı Danışmalığı
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group, müşterilerinin İhracat, İthalat ve Kambiyo Mevzuatı ve
              Uygulamaları kapsamında ihtiyaç duyabileceği aşağıdaki hizmetleri
              çözüm odaklı bir bakış açısıyla sunmaktadır:
              <br />
              <br />
              <p className="text-left">
                ✓ Gümrük mevzuatı
                <br />
                ✓ Dış ticaret mevzuatı
                <br />
                ✓ Dış ticaretle bağlantılı vergi mevzuatı (GMSİ, SMK, tevkifat,
                KDV,damga vergisi)
                <br />
                ✓ Türk Parasının Kıymetini Koruma Hakkındaki Mevzuat ile İlgili
                Danışmanlık
                <br />
                ✓ KDV-ÖTV mevzuatı ve iade işlemleri
                <br />
                ✓ İhracat işlemleri
                <br />
                ✓ Dahilde işleme rejimi
                <br />
                ✓ Gümrük uzlaşma (uzlaşma sürecinde danışmanlık)
                <br />
                ✓ Gümrük dava süreci
                <br />✓ Denetim süreci (müfettiş incelemesi sürecinde
                danışmanlık)
              </p>
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
  const allArticles = await getAllArticles();

  return {
    props: { allArticles },
  };
};
