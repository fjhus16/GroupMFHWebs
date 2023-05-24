import Container from '../../components/container'
import ContactForm from '../../components/en/contactform'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function OurValues() {
  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
        </Head>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Our Values
            </h2>
            <h4 className="text-left text-md md:pl-8">
              1. Customer Focus: We strive to understand our customers' needs and provide them with the highest level of service. Their success is our success, and customer satisfaction is our top priority.<br/>
              2. Expertise and Quality: As a team of specialized professionals, we aim to deliver high-quality services. We adhere to international quality standards and continuously strive to improve ourselves.<br/>
              3. Commitment to Ethical Values: We conduct our business with honesty, transparency, and adherence to ethical principles. We are committed to building trust with our customers and stakeholders and fostering long-term relationships.<br/>
              4. Innovation and Continuous Learning: In the rapidly changing business world, we focus on continuous learning and generating innovative solutions. We closely follow technological advancements and utilize the latest tools to make our work more efficient.<br/>
              5. Collaboration and Team Spirit: We promote teamwork and value the power of collaboration. We believe that working together harnesses the knowledge, experience, and diverse perspectives that lead to better outcomes.<br/>
              6. Responsibility: We are aware of our responsibilities to our customers, employees, and society. We make efforts to fulfill our responsibilities in a timely and accurate manner.<br/>
              7. Integrity and Reliability: We firmly adhere to the principles of honesty and integrity in our work. We present information accurately and transparently, avoiding misleading practices. Conducting our business in a reliable manner and delivering promised services on time and in full are of paramount importance.<br/>
              8. Impartiality: We are committed to impartiality towards our customers and stakeholders. Independence and impartiality enable us to make objective assessments and provide the best solutions.<br/>
              These values represent who we are and how we operate at MFH Group. We commit to delivering the best service to our customers and continuously improving ourselves based on these values.<br/>
            </h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
