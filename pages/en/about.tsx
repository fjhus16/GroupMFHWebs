import Container from '../../components/container'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>GroupMFH</title>
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h4 className="text-left text-md md:pl-8">
            At MFH Group, we work as a team to provide the highest level of quality service globally to all our individual and corporate clients with our team of specialists.<br /><br />Audit, attestation and consultancy services are carried out in accordance with international quality standards to meet customer expectations at the highest level.<br /><br />MFH Group, as a strategic solution partner of its clients, provides services within the scope of Tax Audit, Independent Audit, Financial Consultancy, Management and Corporate Finance Consultancy, Social Security Consultancy, Customs and Foreign Trade Consultancy and Corporate Law related transactions.
            </h4>
          </section>
        </Container>
      </Layout>
    </>
  )
}
