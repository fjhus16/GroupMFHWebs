import Container from '../../components/container'
import ContactForm from '../../components/en/contactform'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function About() {
  return (
    <>
    <Layout>
      <Head>
        <title>GroupMFH</title>
      </Head>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              About Us
            </h2>
            <h4 className="text-left text-md md:pl-8">
              MFH Group is a team of specialized professionals working collaboratively to provide high-quality services to individual and corporate clients on a global scale. Our services in auditing, attestation, and consultancy are carried out in accordance with international quality standards to meet the highest level of customer expectations.
              As a strategic solution partner for our clients, MFH Group offers services in Tax Auditing, Financial Consultancy, Management and Corporate Finance Consultancy, Social Security Consultancy, Customs and Foreign Trade Consultancy, as well as Corporate Law-related transactions.
              We are dedicated to delivering qualified services that cater to the diverse needs of our clients, and our expertise enables us to serve as a trusted advisor in various areas of their business. With a strong commitment to professionalism and upholding ethical values, we strive to exceed our clients' expectations and contribute to their long-term success.
            </h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
