import Container from '../../components/container'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function Legislations() {
  return (
    <>
      <Head>
        <title>Company Law Legislation Consultancy - GroupMFH</title>
        <meta name="description" content="MFH Group: We assist with seamless changes in commercial enterprises and companies, complying with Turkish Commercial Code No. 6102 and tax legislation." />
        </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
          <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">          Company Law Legislation Consultancy
              </h2>
            <h4 className="text-left text-md md:pl-8">
            Pursuant to the Turkish Commercial Code No. 6102 and the secondary legislation issued in relation to this Code, necessary services are provided for the change of type of commercial enterprises and companies, mergers or divisions of companies in accordance with the tax legislation.</h4></section>
        </Container>
      </Layout>
    </>
  )
}
