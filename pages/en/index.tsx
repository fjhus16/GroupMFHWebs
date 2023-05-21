import Container from '../../components/container'
import MoreStories from '../../components/en/more-stories'
import Layout from '../../components/en/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import Post from '../../interfaces/post'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TopPostPreview from '../../components/top-post-preview'
import SwiperCore, { Autoplay } from 'swiper';
import ServicesGrid from '../../components/en/ServicesGrid'
import Image from 'next/image'
import ContactForm from '../../components/en/contactform'

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
          <meta name="description" content="We are a specialized institution in tax consultancy, tax litigation, investment, incentives, and government support." />
        </Head>
        <div className='flex flex-col md:flex-row w-full top-[96px] z-10 md:fixed g-[800px] md:h-[350px]'>
          <div className='w-full h-[350px]'>
            <Swiper className='bg-white w-full h-full'
              loop={true}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}>

              <SwiperSlide>
                <div className='h-[350px] flex flex-col items-center justify-center'>
                  <Image fill style={{ objectFit: "cover" }} priority loading='eager' src='/assets/homepage/documents.jpg' className='-z-10' alt={''} />
                  <div className='flex mt-auto pb-6 w-[80%] flex-col items-center justify-center flex-end text-white'>
                    <h3 className="font-bold text-white text-2xl xl:text-3xl mr-auto [text-shadow:_3px_3px_3px_rgb(0_0_0_/_80%)] mb-3">
                      Expert Audit
                    </h3>
                    <h3 className="font-bold text-black bg-orange-500 text-2xl xl:text-3xl mr-auto px-1 pb-1">
                      Forward-thinking
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-[350px] flex flex-col items-center justify-center'>
                  <Image fill style={{ objectFit: "cover" }} priority loading='eager' src='/assets/homepage/globe.jpg' className='-z-10' alt={''} />
                  <div className='flex w-[80%] flex-col items-center justify-center flex-end text-white'>
                    <h3 className="font-bold text-white text-2xl xl:text-3xl [text-shadow:_3px_3px_3px_rgb(0_0_0_/_80%)] mb-3">
                      Strategic Solutions for
                    </h3>
                    <h3 className="font-bold text-black bg-red-600 text-2xl xl:text-3xl px-1 pb-1">
                      Global Expansion
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-[350px] flex flex-col items-center justify-center'>
                  <Image fill style={{ objectFit: "cover" }} priority loading='eager' src='/assets/homepage/businessDistrict.jpg' className='-z-10' alt={''} />
                  <div className='flex mb-auto pt-6 w-[80%] flex-col items-center justify-center flex-end text-white'>
                    <h3 className="font-bold bg-black text-white text-2xl xl:text-3xl ml-auto mr-14 px-1 pb-1">
                      Unleash
                    </h3>
                    <h3 className="font-bold text-white bg-black text-2xl xl:text-3xl ml-auto px-1 pb-1 mb-6">
                      Your Potential
                    </h3>
                  </div>
                </div>
              </SwiperSlide> </Swiper>
          </div>
        </div>
        <div className='z-20 relative md:mt-[350px]'>
          <Container>
            <div className='flex pb-6 flex-col justify-center items-center'>
              <h2 className="mb-2 pt-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
                Our services
              </h2>
              <ServicesGrid />
            </div>
            <ContactForm />
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