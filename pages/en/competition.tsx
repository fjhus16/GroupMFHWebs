import Container from '../../components/container'
import ContactForm from '../../components/en/contactform'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function Competition() {
  return (
    <>
      <Head>
        <title>Competition Law and Compliance Services</title>
        <meta name="description" content="MFH Group: Comprehensive financial, administrative, and legal services. Tax consulting, dispute resolution, establishment procedures, and more. Trust us for tailored solutions." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col text-justify flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Competition Law and Compliance Services
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group provides the following services to ensure that your industry and company operate in compliance with fair competition rules within the scope of Law No. 4054 on Protection of Competition:<br />
            </h4>
            <br />
            <p className='text-left'>
              ✓ Preparation of a customized competition compliance program for your company<br />
              ✓ Legal consultancy services regarding investigations conducted by the Competition Authority (including administrative judicial stages)<br />
              ✓ Mergers & acquisitions<br />
              ✓ Negative clearance and exemption application procedures<br />
            </p>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
