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

export default function Accounting({ allArticles }: Props) {
  var filteredArticles = allArticles
    .filter((article) =>
        article.data.attributes.locale === "tr" &&
        article.data.attributes.services.includes("Muhasebe ve Mali Danışmanlık Hizmetleri")
    )
    

  let showArticles = filteredArticles.slice(0, 4);
  return (
    <>
      <Head>
        <title>Muhasebe ve Mali Danışmanlık Hizmetleri - GroupMFH</title>
        <meta
          name="description"
          content="MFH Group, müşterilere mali danışmanlık, vergi planlaması ve danışmanlık hizmetleri sunar."
        />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Muhasebe ve Mali Danışmanlık Hizmetleri
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group, müşterilerinin karşılaştığı mali, idari ve hukuki
              olaylara ilişkin ihtiyaç duyabileceği aşağıdaki hizmetleri çözüm
              odaklı bir bakış açısıyla sunmaktadır:
              <br />
              <br />
              <p className="text-left">
                ✓ Mali Danışmanlık
                <br />
                ✓ Vergi Planlaması
                <br />
                ✓ Vergi Mevzuatı ve Uygulamaları Danışmanlığı
                <br />
                ✓ Vergi Uyuşmazlıkları (Vergi Davaları)
                <br />
                ✓ Vergi Uzlaşmaları
                <br />
                ✓ Maliyet Muhasebesi Danışmalığı
                <br />
                ✓ Uluslararası Vergi Danışmanlığı
                <br />
                ✓ İkili Vergi Anlaşmaları Uygulamaları
                <br />
                ✓ Yabancı Sermaye Mevzuatı, Uygulamaları ve Yabancı Sermaye
                Yatırımları ve Mali Danışmanlığı
                <br />
                ✓ Yabancı Uyruklu Kişilerin/ Şirketlerin Vergi Uygulamaları
                <br />
                ✓ Kuruluş İşlemleri (Yerli ve Yabancı Sermayeli Şirket, Şube,
                İrtibat Bürosu ve Temsilcilik Kurulması)
                <br />
                ✓ Devir ve Birleşmeler, Değerleme, Şirket Tasfiyesi
                <br />
                ✓ Ana Sözleşme Değişiklikleri, Genel Kurul Toplantıları
                <br />
                ✓ Sermaye Piyasası Uygulamaları (Halka Arz Çalışmaları)
                <br />✓ Mali Mevzuattaki Değişikliklere İlişkin Güncel Bilgi
                Aktarımları
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
