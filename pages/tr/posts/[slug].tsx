import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../../components/container'
import PostBody from '../../../components/post-body'
import PostHeader from '../../../components/post-header'
import Layout from '../../../components/tr/layout'
import { getPostBySlug, getAllPosts } from '../../../lib/api'
import PostTitle from '../../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../../lib/markdownToHtml'
import type PostType from '../../../interfaces/post'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
import type Post from '../../../interfaces/post'
import DateFormatter from '../../../components/date-formatter'

type Props = {
  post: PostType
  allPosts: Post[]
}

export default function Post({ post, allPosts }: Props) {
  const router = useRouter()
  const title = `${post.title}`
  var morePosts = []

  allPosts.forEach((postM) => {
    if (postM.lang === 'tr' && postM.slug !== post.slug) {
      morePosts.push(postM);
    }
  })

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row">
          <div>
            {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <>
                <article className="pb-16 flex flex-col justify-center items-center">
                  <Head>
                    <title>{title}</title>
                    <meta property="og:image" content={post.ogImage.url} />
                  </Head>
                  <PostHeader
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                  />
                  <PostBody content={post.content} date={post.date} />
                </article>
              </>
            )}
          </div>

          <div className="flex flex-col justify-center items-start md:ml-20 pt-10">
            <h2 className='text-2xl md:text-3xl font-bold mx-auto'>Son yazılar</h2>
            <Card className='w-[300px] md:w-[400px] mt-10 mb-10 max-h-[500px]'>
              <CardMedia
                sx={{ height: 140 }}
                image={morePosts[0].coverImage}
                title="image for the most recent post"
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component="div" className='font-bold text-lg'>
                  {morePosts[0].title}
                </Typography>
                <Typography variant="body2" className='text-black max-h-[110px]'>
                  {morePosts[0].excerpt}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: "auto" }} className='flex flex-row items-center justify-between mt-auto'>
           <Link className='hover:bg-black hover:text-white text-2xl pt-1 pb-1 pl-2 pr-2 mt-1 mb-3 duration-1000' href={'/tr/posts/' + morePosts[0].slug}>Devamını oku</Link>
              <DateFormatter dateString={morePosts[0].date} />
              </CardActions>
            </Card>
            <Card className='w-[300px] md:w-[400px] mt-10 mb-10 max-h-[500px]'>
              <CardMedia
                sx={{ height: 140 }}
                image={morePosts[1].coverImage}
                title="image for the 2nd most recent post"
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component="div" className='font-bold text-lg'>
                  {morePosts[1].title}
                </Typography>
                <Typography variant="body2" className='text-black max-h-[110px]'>
                  {morePosts[1].excerpt}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: "auto" }} className='flex flex-row items-center justify-between mt-auto'>
        <Link className='hover:bg-black hover:text-white text-2xl pt-1 pb-1 pl-2 pr-2 mt-1 mb-3 duration-1000' href={'/tr/posts/' + morePosts[1].slug}>Devamını oku</Link>
              <DateFormatter dateString={morePosts[1].date} />
              </CardActions>
            </Card>
            <Card className='w-[300px] md:w-[400px] mt-10 mb-10 max-h-[500px]'>
              <CardMedia
                sx={{ height: 140 }}
                image={morePosts[2].coverImage}
                title="image for the 3rd most recent post"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='text-lg font-bold'>
                  {morePosts[2].title}
                </Typography>
                <Typography variant="body2" className='text-black max-h-[110px]'>
                  {morePosts[2].excerpt}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: "auto" }} className='flex flex-row items-center justify-between mt-auto'>
         <Link className='hover:bg-black hover:text-white text-2xl pt-1 pb-1 pl-2 pr-2 mt-1 mb-3 duration-1000' href={'/tr/posts/' + morePosts[2].slug}>Devamını oku</Link>
              <DateFormatter dateString={morePosts[2].date} />
              </CardActions>
            </Card>
          </div>

        </div>
      </Container>

    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const allPosts = getAllPosts([
    'lang',
    'cat',
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      allPosts,
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
