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


export default function Competition({ allPosts }: Props) {
  const filteredPosts = allPosts
    .filter((post) => post.lang === 'tr' && post.serv.includes('Rekabet Hukuku ve Uyum Hizmetleri'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  let showPosts = filteredPosts.slice(0,4);
  return (
    <>
      <Head>
        <title>Rekabet Hukuku ve Uyum Hizmetleri</title>
        <meta name="description" content="MFH Group, müşterilere mali danışmanlık, vergi planlaması ve danışmanlık hizmetleri sunar." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col text-justify flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Rekabet Hukuku ve Uyum Hizmetleri
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group, 4054 sayılı Rekabetin Korunması Hakkında Kanun kapsamında sektörünüz ve şirketinizin adil rekabet kurallarına uygun ve uyumlu çalışmasını sağlayacak aşağıdaki hizmetleri sunar;<br />
            </h4>
            <br />
            <p className='text-left'>
              ✓ Şirketinize özgü rekabet uyum programının hazırlanması<br />
              ✓ Rekabet Kurulu tarafından yürütülen soruşturmalara ilişkin hukuki danışmanlık hizmetleri (idari yargı aşamaları dahil)<br />
              ✓ Birleşme & devralmalar<br />
              ✓ Menfi tespit ve muafiyet başvurusu işlemleri<br />
            </p>
          </section>
          <div className='flex flex-col justify-center items-center'>
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
