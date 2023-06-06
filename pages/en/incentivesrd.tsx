import Container from '../../components/container'
import ContactForm from '../../components/en/contactform'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function Incentivesrd() {
  return (
    <>
      <Head>
        <title>Incentives and R&D Consultancy - GroupMFH</title>
        <meta name="description" content="MFH Group: Tax, incentives, and dispute resolution solutions. We offer consultancy on investment, foreign direct investment, R&D incentives, and more. Trust us for expert guidance." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">Incentives and R&D Consultancy
            </h2>
            <h4 className="text-justify text-md text-justify md:pl-8">
              MFH Group offers the following services with a solutions-oriented perspective which clients may require for the resolution of technical and complex issues such as Taxes, Incentives, Exemptions and disputes arising from legislation related to these issues:<br />
              <br />
              ✓ Consultancy on Investment Incentive Legislation (Investment Discount Exemption, VAT Exemption, Tax-Duty Fee Exemption, etc.)<br />
              ✓ Consultancy on the Implementation of the Foreign Direct Investment Law<br />
              ✓ Consultancy on R&D Incentive Legislation<br />
              ✓ Consultancy on Technopark Legislation<br />
              ✓ Consultancy on Free Zone Legislation<br />
              ✓ Consultancy on Trademark Incentive Legislation<br />
              ✓ Consultancy on Fair, Exhibition and Fair Incentive Legislation<br />
              ✓ Analysis of Tax Liabilities in Transactions Defined as "Invisible Transactions"<br />
              ✓ Obligations and Practices Related to the Resource Utilization Support Fund<br />
              ✓ Other Tax Incentives
            </h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
