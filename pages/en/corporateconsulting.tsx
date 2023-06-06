import Container from '../../components/container'
import ContactForm from '../../components/en/contactform'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function Corporateconsulting() {
  return (
    <>
      <Head>
        <title>Management, Corporate Finance and Technology Consulting - GroupMFH</title>
        <meta name="description" content="MFH Group: Tailored solutions, collaborative approach. Expertise, flexibility, industry knowledge. Trust us for consultancy expertise." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Management, Corporate Finance and Technology Consulting
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group's technical knowledge and experience, flexibility and close working relationship with our clients enables us to be a team capable of developing a different approach for each different case. We enrich and differentiate our sector and subject matter expertise, which is the result of our technical knowledge and experience, by working with companies of varying scales and structures. Our goal in every project is to implement feasible and result-oriented approaches that will add value to our customers with our flexible working structure. Our consultancy team is equipped with the most up-to-date theoretical knowledge, as well as practical experience and the latest technological developments in order to realize your projects. MFH Group is organized to provide management consultancy support by acting as a whole in line with customer needs.</h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
