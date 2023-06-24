import Container from '../../components/container'
import ContactForm from '../../components/tr/contactform'
import Layout from '../../components/tr/layout'
import Head from 'next/head'

export default function Competition() {
  return (
    <>
      <Head>
        <title>Rekabet Hukuku ve Uyum Hizmetleri</title>
        <meta name="description" content="MFH Group, müşterilere mali danışmanlık, vergi planlaması ve danışmanlık hizmetleri sunar." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col text-justify flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Rekabet Hukuku ve Uyum Hizmetleri
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group, 4054 sayılı Rekabetin Korunması Hakkında Kanun kapsamında sektörünüz ve şirketinizin adil rekabet kurallarına uygun ve uyumlu çalışmasını sağlayacak aşağıdaki hizmetleri sunar;<br />
            </h4>
            <br />
            <p className='text-left'>
              ✓ Şirketinize özgü rekabet uyum programının hazırlanması<br />
              ✓ Rekabet Kurulu tarafından yürütülen soruşturmalara ilişkin hukuki danışmanlık hizmetleri (idari yargı aşamaları dahil)<br />
              ✓ Birleşme & devralmalar<br />
              ✓ Menfi tespit ve muafiyet başvurusu işlemleri<br />
            </p>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
