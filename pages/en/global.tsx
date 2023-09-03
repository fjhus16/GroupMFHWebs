import Container from '../../components/container'
import ContactForm from '../../components/en/contactform'
import Layout from '../../components/en/layout'
import Head from 'next/head'
import MapChart from '../../components/map'

export default function Global() {
  return (
    <>
    <Layout>
      <Head>
        <title>GroupMFH</title>
      </Head>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
                Our Global Network
            </h2>
            <div className='w-[80vw] md:w-[80vw] fhd:w-[60vw] border-2'>
            <MapChart></MapChart>
            </div>
            <h4 className="text-justify text-md md:pl-8">
            </h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
