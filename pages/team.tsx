import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import TeamGrid from '../components/teamgrid'

export default function Team() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`GroupMFH`}</title>
        </Head>
        <Container>
          <div className='flex flex-col justify-center items-center'>
          <h2 className='mb-8 pt-6 text-5xl font-bold tracking-tighter leading-tight'>Ekibimiz</h2>
          </div>
          <TeamGrid />
        </Container>
      </Layout>
    </>
  )
}
