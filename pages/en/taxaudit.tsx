import Container from '../../components/container'
import ContactForm from '../../components/en/contactform'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function Taxaudit() {
  return (
    <>
      <Head>
        <title>Tax Auditing - GroupMFH</title>
        <meta name="description" content="MFH Group: Trusted tax auditing and certification services for individuals and businesses. Compliance, certified reports, and peace of mind." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
          <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
            Tax Auditing
              </h2>
            <h4 className="text-left text-md md:pl-8">
              MFH Group audits and certifies the balance sheets, income statements and tax declarations of individuals and legal entities (companies, associations, foundations, and their enterprises), as well as their requests related to tax laws, in terms of compliance with tax laws and generally accepted accounting standards. The prepared audit reports are submitted for the use of clients and official authorities. Tables that have been certified by Sworn-in Financial Advisors and given to official authorities in accordance with the law are considered as a document that has been examined to the extent of certification by the state's audit officials.
            </h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
