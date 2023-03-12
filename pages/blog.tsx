import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Image from 'next/image'

type Props = {
  allPosts: Post[]
}

export default function Blog({ allPosts }: Props) {
  const morePosts = allPosts
  return (
    <>
      <Layout>
        <Head>
          <title>{`GroupMFH`}</title>
        </Head>
        <Container>
          <div id='yazılar' className='pt-10 ism:pt-12'></div>
          <div>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
