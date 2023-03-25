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
              MFH Group is working as a team with its staff specialized in the field to provide high-quality services to all individual and corporate customers globally. <br /><br />
              Audit, verification, and consultancy services are carried out in accordance with international quality standards that will meet customer expectations at the highest level.<br /><br />
              MFH Group serves its customers as a strategic solution partner in Tax Audit, Independent Audit, Financial Consultancy, Management and Corporate Finance Consultancy, Social Security Consultancy, Customs and Foreign Trade Consultancy, and Transactions related to Corporate Law.
            </h4>
          </section>
        </Container>
      </Layout>
    </>
  )
}
