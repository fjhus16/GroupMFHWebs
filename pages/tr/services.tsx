import Container from '../../components/container'
import Layout from '../../components/tr/layout'
import Head from 'next/head'

export default function Services() {
  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
        </Head>
        <Container>
        <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
      <h1 className="text-3xl md:text-4xl pt-6 lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-left">
        Hizmetlerimiz
      </h1>
    </section>
          
        </Container>
      </Layout>
    </>
  )
}
