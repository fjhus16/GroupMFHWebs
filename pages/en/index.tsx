import Container from '../../components/container'
import MoreStories from '../../components/en/more-stories'
import Layout from '../../components/en/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import Post from '../../interfaces/post'
import Image from 'next/image'
import Link from 'next/link'
import SimpleAccordion from '../../components/en/accordion'

type Props = {
  allPosts: Post[]
}
export default function Index({ allPosts }: Props) {

  const morePosts = allPosts.slice(0, 6)

  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
        </Head>
        <div className='fixed h-[50vh] ism:h-[40vh] md:h-[50vh] w-screen -z-30'>
          <Image src='/assets/homepage/WallStreet.jpg' priority loading='eager' className='bg-right -z-30' fill={true} style={{ objectFit: "cover", objectPosition: "right" }} alt={'Wall Street'} />
          <p className='[text-shadow:_0_2px_0_rgb(0_0_0_/_80%)] text-xl ism:text-2xl md:text-3xl text-white fixed font-bold mt-16 ism:mt-24 md:mt-48 ml-6 ism:ml-8 md:ml-60 -z-20 mx-auto'>A goal, is the first step to success.</p>
          <p className='[text-shadow:_0_2px_0_rgb(0_0_0_/_80%)] text-lg md:text-2xl text-white fixed font-bold mt-28 ism:mt-36 md:mt-64 ml-6 ism:ml-8 md:ml-60 -z-20 mx-auto'>
            Our team, made up of experts in their fields,<br />
            stands ready to guide and support you at every step of your career,<br />
            so you can be certain of the decisions you make while building your future.</p>
        </div>
        <div className='h-[50vh] ism:h-[40vh] md:h-[50vh] -z-40'></div>
        <Container>
          <div className='flex pb-6 flex-col justify-center items-center'>
            <h2 className="mb-8 pt-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Our services
            </h2>
            <SimpleAccordion />
          </div>
          <div className='flex flex-col justify-center items-center'>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            <Link href="/en/blog" className="text-sm ism:text-md mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-10 lg:px-8 duration-200 transition-colors mb-6">
              More posts
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