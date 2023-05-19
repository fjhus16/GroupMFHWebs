import Container from '../../components/container'
import MoreStories from '../../components/en/more-stories'
import Layout from '../../components/en/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import Post from '../../interfaces/post'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TopPostPreview from '../../components/top-post-preview'
import SwiperCore, { Autoplay } from 'swiper';
import Services from '../../components/en/services'
import SimpleAccordion from '../../components/en/accordion'

type Props = {
  allPosts: Post[]
}
export default function Index({ allPosts }: Props) {

  SwiperCore.use([Autoplay]);

  const morePosts = []
  const topPosts = []

  allPosts.forEach((post) => { post.lang === 'en' ? morePosts.push(post) : null })
  morePosts.forEach((post) => { post.cat === 'Headlines' ? topPosts.push(post) : null })

  const showPosts = morePosts.slice(0, 4)
  const showTopPosts = topPosts.slice(0, 4)

  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
        </Head>
        <div className='flex flex-col md:flex-row w-full top-[96px] z-10 md:fixed g-[800px] md:h-[400px]'>
          <div className='flex flex-col w-full md:w-[45%] h-[400px] items-center justify-center'>
            <Image src='/assets/homepage/WallStreet.jpg' priority loading='eager' className='-z-10' alt='WallStreet' fill style={{objectFit:"cover"}} />
            <div className='flex mt-auto pb-6 px-2 flex-col items-center justify-center flex-end text-white'>
              <h3 className="font-bold text-white text-2xl xl:text-3xl mr-auto [text-shadow:_3px_3px_3px_rgb(0_0_0_/_80%)] mb-3">A goal, is the first step to success.</h3>
              <p className='text-white text-md xl:text-lg [text-shadow:_3px_3px_3px_rgb(0_0_0_/_80%)]'>
                Our team, made up of experts in their fields,<br />
                stands ready to guide and support you at every step of your career,<br />
                so you can be certain of the decisions you make while building your future.
              </p>
            </div>
          </div>
          <div className='w-full md:w-[55%] h-[400px]'>
            <Swiper className='bg-white w-full h-full'
              loop={true}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}>
              <SwiperSlide><TopPostPreview title={showTopPosts.at(0).title} coverImage={showTopPosts.at(0).coverImage} date={showTopPosts.at(0).date} excerpt={showTopPosts.at(0).excerpt} slug={showTopPosts.at(0).slug} /></SwiperSlide>
              <SwiperSlide><TopPostPreview title={showTopPosts.at(1).title} coverImage={showTopPosts.at(1).coverImage} date={showTopPosts.at(1).date} excerpt={showTopPosts.at(1).excerpt} slug={showTopPosts.at(1).slug} /></SwiperSlide>
              <SwiperSlide id="services-section"><TopPostPreview title={showTopPosts.at(2).title} coverImage={showTopPosts.at(2).coverImage} date={showTopPosts.at(2).date} excerpt={showTopPosts.at(2).excerpt} slug={showTopPosts.at(2).slug} /></SwiperSlide>
              {/*<SwiperSlide><TopPostPreview title={showTopPosts.at(3).title} coverImage={showTopPosts.at(3).coverImage} date={showTopPosts.at(3).date} excerpt={showTopPosts.at(3).excerpt} slug={showTopPosts.at(3).slug} /></SwiperSlide>*/}
            </Swiper>
          </div>
        </div>
        <div className='z-20 relative md:mt-[400px]'>
          <Container>
            <div  className='flex pb-6 flex-col justify-center items-center'>
              <h2 className="mb-2 pt-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
                Our services
              </h2>
              <Services />
              <SimpleAccordion />
            </div>
            <div className='flex flex-col justify-center items-center'>
              {showPosts.length > 0 && <MoreStories posts={showPosts} />}
              <Link href="/en/blog" className="text-sm ism:text-md mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-10 lg:px-8 duration-200 transition-colors mb-6">
                More posts
              </Link>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'lang',
    'cat',
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