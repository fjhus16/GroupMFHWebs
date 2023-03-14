import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'

export default function Team() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`GroupMFH`}</title>
        </Head>
        <Container>
          <div className='flex pb-10 flex-col md:flex-row place-content-around items-center'>

            <div className='flex flex-col md:w-[30vw] md:flex-row md:flex-row-reverse justify-between items-center'>
              <div><Image src={"https://picsum.photos/500/900"} alt={'person'} width={300} height={600} /></div>
              <div>isim<br />meslek<br />bilgi</div>
            </div>

            <div className='flex flex-col md:w-[30vw] md:flex-row md:flex-row-reverse justify-between items-center'>
              <div><Image src={"https://picsum.photos/500/900"} alt={'person'} width={300} height={600} /></div>
              <div>isim<br />meslek<br />bilgi</div>
            </div>
            
          </div>

          <div className='flex flex-col md:flex-row  place-content-around items-center'>

            <div className='flex flex-col md:w-[30vw] md:flex-row justify-between items-center'>
              <div><Image src={"https://picsum.photos/500/900"} alt={'person'} width={300} height={600} /></div>
              <div>isim<br />meslek<br />bilgi</div>
            </div>

            <div className='flex flex-col md:w-[30vw] md:flex-row justify-between items-center'>
              <div><Image src={"https://picsum.photos/500/900"} alt={'person'} width={300} height={600} /></div>
              <div>isim<br />meslek<br />bilgi</div>
            </div>

          </div>
        </Container>
      </Layout>
    </>
  )
}
