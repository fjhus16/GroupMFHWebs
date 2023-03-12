import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`GroupMFH`}</title>
        </Head>
        <Container>
          <Intro />
          
        </Container>
      </Layout>
    </>
  )
}
