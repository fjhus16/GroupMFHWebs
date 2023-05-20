import Container from '../../components/container'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function Accounting() {
  return (
    <>
      <Head>
        <title>Accounting and Financial Consultancy Services - GroupMFH</title>
        <meta name="description" content="MFH Group: Comprehensive financial, administrative, and legal services. Tax consulting, dispute resolution, establishment procedures, and more. Trust us for tailored solutions." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
          <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">          Accounting and Financial Consultancy Services
              </h2>
            <h4 className="text-left text-md md:pl-8">
            MFH Group provides the following services that clients may require during financial, administrative and legal events they face with a solution-oriented perspective:<br />
                        <br />
                        ✓ Financial Consulting<br />
                        ✓ Tax Planning<br />
                        ✓ Tax Legislation and Practices Consultancy<br />
                        ✓ Tax Disputes (Tax Litigation)<br />
                        ✓ Tax Compromises<br />
                        ✓ Cost Accounting Consultancy<br />
                        ✓ International Tax Consulting<br />
                        ✓ Bilateral Tax Treaty Implementation<br />
                        ✓ Foreign Capital Legislation, Practices and Foreign Capital Investments and Financial Advisory<br />
                        ✓ Tax Practices of Foreign Individuals/Companies<br />
                        ✓ Establishment Procedures (Establishment of Domestic and Foreign Capital Companies, Branches, Liaison Offices and Representative Offices)<br />
                        ✓ Mergers and Acquisitions, Valuation, Company Liquidation<br />
                        ✓ Articles of Association Amendments, General Assembly Meetings<br />
                        ✓ Capital Market Practices (Public Offering Studies)<br />
                        ✓ Up-to-date Information Transmissions on Changes in Financial Legislation<br /></h4>
          </section>
        </Container>
      </Layout>
    </>
  )
}
