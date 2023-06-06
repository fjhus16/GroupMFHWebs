import Container from '../../components/container'
import ContactForm from '../../components/en/contactform'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function London() {
  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
        </Head>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-2 pt-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Starting up a business in the UK
            </h2>
            <h3 className="font-bold text-2xl xl:text-3xl mb-3">
              Can I start up a business in the UK while I live in another country?
            </h3>
            <p className='text-justify'>
              Yes, you can start a business in the UK while living in another country.<br />
              Non-UK residents are allowed to be directors of UK companies. However, every company must have at least one director who is a natural person (i.e., not another company or legal entity), and there are some restrictions on people who can be directors.<br />
              To set up a business in the UK, you'll need to go through several steps:<br /><br />
              <p className='font-bold'>1. Choose a Type of Business Structure:</p> There are several types of business structures in the UK, such as a sole trader, partnership, or limited company. The most common type for foreigners is the private limited company (Ltd), which is a separate legal entity from its owners and can be owned by individuals or corporate entities.
              <p className='font-bold'>2. Choose a Company Name:</p> Your company's name must be unique and cannot be the same as or too similar to an existing company name. You can check this on the UK Companies House register. There are also restrictions on certain sensitive words and phrases, and the name cannot be offensive.
              <p className='font-bold'>3. Register the Company with Companies House:</p> You'll need to provide a UK address for the company's registered office, which will be publicly available. This must be a physical address where official communications can be sent, but it does not have to be where your company carries out its business activities. There are services that provide registered office addresses for overseas owners.
              <p className='font-bold'>4. Appoint Directors and a Company Secretary (optional):</p> You'll need to appoint at least one director who is responsible for running the company. A company secretary is not required but can be appointed to take on some of the director's responsibilities.
              <p className='font-bold'>5. Issue Shares:</p> As a limited company, you'll need to have at least one shareholder, who can be a director.
              <p className='font-bold'>6. Prepare Documents Detailing How to Run Your Company:</p> This includes a 'memorandum of association' and 'articles of association'.
              <p className='font-bold'>7. Check What Records You'll Need to Keep:</p> You'll need to keep certain records and register for taxes.
              <p className='font-bold'>8. Register with HM Revenue and Customs (HMRC):</p>  You must register your company for corporation tax within 3 months of starting to do business.
              <p className='font-bold'>9.Registered Office:</p> You must have a registered office address in the UK. This is the address where all official communications will be sent. The address must be a physical address (not a PO Box) and be located in the same country that your company is registered in (e.g., England and Wales, Scotland, or Northern Ireland).
              <p className='font-bold'>10. Memorandum and Articles of Association:</p> These documents are required when you register your company. The memorandum of association is a legal statement signed by all initial shareholders agreeing to form the company. The articles of association are the written rules about running the company, agreed by the shareholders, directors, and the company secretary.
              <p className='font-bold'>11. Statement of Capital:</p> This document includes the names of all shareholders and the number of shares each one holds, the total number of shares of the company, and the aggregate nominal value of those shares.
              <p className='font-bold'>12. People with Significant Control (PSC):</p> You must identify people with significant control over your company and inform Companies House. A PSC is someone who holds more than 25% of shares or voting rights in your company, can appoint or remove the majority of the board of directors, or has the right to, or actually exercises significant influence or control.
              <p className='font-bold'>13. Standard Industrial Classification (SIC) code:</p> You need to choose a SIC code that matches your business activities. You'll use this when you register your company.<br /><br />

              <h3 className="font-bold text-2xl text-center xl:text-3xl mb-3">
                How much does it cost to open a company in the UK for foreigners?
              </h3>
              The cost of setting up a company in the UK can vary depending on several factors.
              <p className='font-bold'>1. Company Registration Fee:</p> The standard fee to register a company with Companies House is £12 online or £40 by post. There's a same-day service costing £100 if you get your application in by 3 pm.
              <p className='font-bold'>2. Registered Office Address Service:</p> If you don't have a UK address, you'll need to use a registered office address service. Prices for these services vary, but you can expect to pay from £50 to several hundred pounds per year, depending on the provider and the level of service you require.
              <p className='font-bold'>3. Company Secretary Service:</p> This is optional as it's not a legal requirement to have a company secretary for a private limited company. If you do decide to use a company secretary service, the cost will vary depending on the provider. Expect an average cost of £400 per month.
              <p className='font-bold'>4. Accounting Services:</p> Depending on the complexity of your company's financial situation, the cost of hiring an accountant could range from a £500 to £2000 per year.
              <p className='font-bold'>5. Legal Fees:</p> If you seek legal advice, costs can vary widely depending on the complexity of your business and the lawyer's rates. However, expect costs between £1000 and £4000.
              <p className='font-bold'>6. Bank Account Fees:</p> Depending on the bank, there may be fees associated with setting up and maintaining a business bank account. Banks charge between £5 to £15 per month depending on the services you require.
              <p className='font-bold'>7. Licenses and Permits:</p> Depending on the nature of your business, you may need to pay for certain licenses or permits.<br/><br/>
              Remember, these are just the basic setup costs. Running a business involves various ongoing costs, such as taxes, payroll, rent (if you have a physical location), utilities, insurance, marketing, and more.
            </p>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
