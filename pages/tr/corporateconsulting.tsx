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

export default function Corporateconsulting({ allArticles }: Props) {
  var filteredArticles = allArticles
    .filter((article) =>
        article.data.attributes.locale === "tr" &&
        article.data.attributes.services.includes(
          "Yönetim, Kurumsal Finansman ve Teknoloji Danışmanlığı"
        )
    )
    

  let showArticles = filteredArticles.slice(0, 4);
  return (
    <>
      <Head>
        <title>
          Yönetim, Kurumsal Finansman ve Teknoloji Danışmanlığı - GroupMFH
        </title>
        <meta
          name="description"
          content="MFH Group, müşterilere teknik bilgi ve esneklikle yaklaşır, sektör uzmanlığıyla değer odaklı çözümler sunar."
        />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Yönetim, Kurumsal Finansman ve Teknoloji Danışmanlığı
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group’un edinmiş olduğu teknik bilgi ve tecrübe, esneklik ve
              müşterilerimiz ile kurduğumuz yakın iş ilişkisi, her farklı olay
              için farklı yaklaşım geliştirebilen bir ekip olmamızı
              sağlamaktadır. Teknik bilgi ve deneyimlerimiz sonucu oluşan sektör
              ve konu uzmanlığımızı, farklı ölçek ve yapıya sahip şirketlerle
              çalışarak, zenginleştirip farklılaştırıyoruz. Her projede
              hedefimiz esnek çalışma yapımız ile müşterimize değer katacak,
              uygulanabilir ve sonuç odaklı yaklaşımları hayata geçirebilmektir.
              Danışmanlık ekibimiz en güncel teorik bilgi ile donanmış olmakla
              birlikte, projelerin hayata geçebilmesi için uygulama deneyimine
              ve son teknolojik gelişmelere vakıftır. MFH Group, müşteri
              ihtiyaçları doğrultusunda bir bütün olarak hareket ederek yönetim
              danışmanlığı desteği sağlayacak şekilde organize olmuştur.
            </h4>
          </section>
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
