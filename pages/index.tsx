import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts.slice(0,6)
  return (
    <>
      <Layout>
        <Head>
          <title>{`GroupMFH`}</title>
        </Head>
        <div className='fixed h-[50vh] ism:h-[40vh] md:h-[50vh] w-screen -z-30'>
          <Image src='/assets/homepage/WallStreet.jpg' loading='eager' className='bg-right -z-30' fill={true} style={{ objectFit: "cover", objectPosition: "right" }} alt={'Wall Street'} />
          <p className='[text-shadow:_0_2px_0_rgb(0_0_0_/_80%)] text-2xl ism:text-3xl md:text-4xl text-white fixed font-bold mt-16 ism:mt-24 md:mt-48 ml-6 ism:ml-8 md:ml-60 -z-20 mx-auto'>Hedef, başarının ilk adımıdır.</p>
          <p className='[text-shadow:_0_2px_0_rgb(0_0_0_/_80%)] text-lg md:text-2xl text-white fixed font-bold mt-28 ism:mt-36 md:mt-64 ml-6 ism:ml-8 md:ml-60 -z-20 mx-auto'>
            Alanlarında uzman kadrodan oluşan ekibimiz,<br />
            iş hayatınızda attığınız her adımda rehberlik ve destek olmaya hazır,<br />
            bilinçli ticari kararlar alıp geleceğinizi inşa ederken yolunuzdan emin olun.</p>
        </div>
        <div className='h-[50vh] ism:h-[40vh] md:h-[50vh] -z-40'></div>
        <Container>
          <div id='yazılar' className='pt-10 ism:pt-12'></div>
          <div className='flex flex-col justify-center items-center'>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            <Link href="/blog" className="text-sm ism:text-md mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-10 lg:px-8 duration-200 transition-colors mb-6">
          Daha fazla yazı
          </Link>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
