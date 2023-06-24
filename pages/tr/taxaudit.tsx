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


export default function Taxaudit({ allPosts }: Props) {
  const filteredPosts = allPosts
    .filter((post) => post.lang === 'tr' && post.serv.includes('Vergi Denetimi'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  let showPosts = filteredPosts.slice(0,4);
  return (
    <>
      <Head>
        <title>Vergi Denetimi - GroupMFH</title>
        <meta name="description" content="MFH Group, gerçek ve tüzel kişilerin bilanço, gelir tablosu ve vergi beyanlarını denetler ve tasdik eder. Raporlar müşterilere ve resmi mercilere sunulur." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Vergi Denetimi
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group, gerçek ve tüzel kişilerin (şirket, dernek ve vakıfların, bunların işletme veya teşebbüslerinin) bilanço ve gelir tablolarını, vergi kanunlarına göre verilmiş beyanlarını, vergi kanunlarıyla ilgili taleplerini, vergi kanunları ve genel kabul görmüş muhasebe standartlarına uygunluğu açısından denetler ve tasdik eder. Hazırlanan tasdik raporları müşterilerin ve resmi mercilerin istifadesine sunulur. Kanunlar gereğince resmi mercilere verilen ve Yeminli Mali Müşavirler tarafından tasdik edilmiş tablolar, kamu idarelerince devletin denetim elemanlarınca tasdikin kapsamı ölçüsünde incelenmiş bir belge olarak kabul edilir.
            </h4>
          </section> <div className='flex flex-col justify-center items-center'>
              {showPosts.length > 0 && <MoreStories posts={showPosts} /> }
              {showPosts.length > 0 && <Link href="/en/blog" className="text-sm ism:text-md mx-3 bg-gray-700 hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-10 lg:px-8 duration-200 transition-colors mb-6">
                More posts
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
