import Container from '../../components/container'
import ContactForm from '../../components/en/contactform'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function Socialsecurity() {
  return (
    <>
      <Head>
        <title>Social Security Advisory - GroupMFH</title>
        <meta name="description" content="MFH Group: Labor and social security solutions for companies. We handle procedures, terminations, compliance, and more. Trust us for comprehensive support." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
          <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
            Social Security Advisory
              </h2>
            <h4 className="text-left text-md md:pl-8">
            MFH Group provides solutions to companies in the fields of labor and social security such as Social Security Institution procedures, termination processes, reinstatements and calculations, severances, notice and vacation pay, transfers and mergers, employment contracts and compliance with all legal obligations.
            </h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
