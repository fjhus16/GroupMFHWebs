import Container from '../../components/container'
import ContactForm from '../../components/en/contactform'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function Foreigntrade() {
  return (
    <>
      <Head>
        <title>Customs and Foreign Trade Legislation Consultancy - GroupMFH</title>
        <meta name="description" content="MFH Group: Export, import, and foreign exchange solutions. We cover customs, tax, and trade legislation. Trust us for comprehensive support." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
          <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
            Customs and Foreign Trade Legislation Consultancy
              </h2>
            <h4 className="text-left text-md md:pl-8">
              MFH Group offers the following services that its customers may need within the scope of Export, Import and Foreign Exchange Legislation and applications with a solution-oriented perspective:<br />
              <br />
              ✓ Customs legislation<br />
              ✓ Foreign trade legislation<br />
              ✓ Tax legislation related to foreign trade (GMSI, SMK, withholding tax, VAT, stamp tax)<br />
              ✓ Consultancy on the Legislation on the Protection of the Value of Turkish Currency<br />
              ✓ VAT-Tax legislation and refund transactions<br />
              ✓ Export transactions<br />
              ✓ Inward processing regime<br />
              ✓ Customs reconciliation (counseling in the reconciliation process)<br />
              ✓ Customs litigation<br />
              ✓ Audit process (consultancy in the process of inspector review)<br /></h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
