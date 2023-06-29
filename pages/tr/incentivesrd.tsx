import Container from '../../components/container'
import ContactForm from '../../components/tr/contactform'
import Layout from '../../components/tr/layout'
import Head from 'next/head'
import { getAllPosts } from '../../lib/api'
import Post from '../../interfaces/post'
import MoreStories from '../../components/tr/more-stories'
import Link from 'next/link'


type Props = {
  allPosts: Post[]
}


export default function Incentivesrd({ allPosts }: Props) {
  const filteredPosts = allPosts
    .filter((post) => post.lang === 'tr' && post.serv.includes('Teşvik Hizmetleri ve Ar-Ge Danışmalığı'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  let showPosts = filteredPosts.slice(0,4);
  return (
    <>
      <Head>
        <title>Teşvik Hizmetleri ve Ar-Ge Danışmalığı - GroupMFH</title>
        <meta name="description" content="MFH Group, müşterilere vergi, teşvik ve istisna konularında çözüm odaklı danışmanlık hizmetleri sunar." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Teşvik Hizmetleri ve Ar-Ge Danışmalığı
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group, müşterilerinin Vergi, Teşvik, İstisna gibi teknik ve karmaşık bir yapıya sahip konuları ve bu konulara ilişkin mevzuatlardan kaynaklı uyuşmazlıklarının çözümüne ilişkin ihtiyaç duyabileceği aşağıdaki hizmetleri çözüm odaklı bakış açılarıyla sunmaktadır:<br /><br />
              ✓ Yatırım Teşvik Mevzuatı (Yatırım İndirimi İstisnası, KDV İstisnası, Vergi-Resim, Harç İstisnası vb.) ile İlgili Danışmanlık<br />
              ✓ Doğrudan Yabancı Yatırımlar Kanunu Çerçevesindeki Uygulamalar ile İlgili Danışmanlık<br />
              ✓ Ar-Ge Teşvik Mevzuatı ile İlgili Danışmanlık<br />
              ✓ Teknopark Mevzuatı ile İlgili Danışmanlık<br />
              ✓ Serbest Bölge Mevzuatı Hakkında Danışmanlık<br />
              ✓ Marka Teşvik Mevzuatı Hakkında Danışmanlık<br />
              ✓ Fuar, Sergi, Panayır Teşvik Mevzuatı Hakkında Danışmanlık<br />
              ✓ “Görünmeyen İşlemler” Olarak Tanımlanan İşlemlerdeki Vergisel Yükümlülüklerin Analizi<br />
              ✓ Kaynak Kullanımını Destekleme Fonu ile İlgili Yükümlülükler ve Uygulamaları<br />
              ✓ Diğer Vergi Teşvikleri
            </h4>
          </section> <div className='flex flex-col justify-center items-center'>
              {showPosts.length > 0 && <MoreStories posts={showPosts} /> }
              {showPosts.length > 0 && <Link href="/tr/blog" className="text-sm ism:text-md mx-3 bg-gray-700 hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-10 lg:px-8 duration-200 transition-colors mb-6">
                Daha fazla yazı
              </Link> }              
            </div>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}


export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'lang',
    'cat',
    'serv',
    'sector',
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
