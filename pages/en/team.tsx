import Container from '../../components/container'
import ContactForm from '../../components/en/contactform'
import Layout from '../../components/en/layout'
import Head from 'next/head'

export default function Team() {
  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
        <meta
          name="description"
          content="MFH Group: Comprehensive financial, administrative, and legal services. Tax consulting, dispute resolution, establishment procedures, and more. Trust us for tailored solutions."
        />
        <meta name="language" content="EN"/>
        </Head>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Our Team
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              At MFH Group, we work with a specialized team dedicated to providing the best service to our clients. Our success in our business is owed to our talented and experienced team. Through collaboration and teamwork, we bring together our expertise in various fields and aim to exceed our clients' expectations.
              The MFH Group team consists of industry-leading professionals. Each member is specialized in their respective field and possesses the knowledge and skills required to deliver the best service to our clients. We work together, leveraging our diverse backgrounds and experiences, to provide comprehensive solutions.
              We provide training and development opportunities to ensure that our team performs at the highest level. In addition to our passion for what we do, our customer-centric approach and commitment to ethical values set us apart. Each member of our team embraces MFH Group's values and places customer satisfaction at the forefront.
              Our team is guided by fundamental principles such as responsibility, integrity, impartiality, reliability, competence, and diligence. By adhering to these values in every project and task, we deliver trustworthy and high-quality services to our clients.
              As the MFH Group team, we focus on our clients' success. We are eager to work with you and achieve common goals. To learn more about our team or to get in touch with us, please contact us.
            </h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
