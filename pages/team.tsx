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
          <TeamGrid />
        </Container>
      </Layout>
    </>
  )
}
