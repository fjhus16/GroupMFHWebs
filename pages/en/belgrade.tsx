import Container from '../../components/container'
import ContactForm from '../../components/en/contactform'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function Belgrade() {
  return (
    <>
    <Layout>
      <Head>
        <title>GroupMFH</title>
      </Head>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
