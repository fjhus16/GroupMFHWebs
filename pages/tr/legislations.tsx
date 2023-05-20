import Container from '../../components/container'
import Layout from '../../components/tr/layout'
import Head from 'next/head'
import ContactForm from '../../components/tr/contactform'

export default function Legislations() {
  return (
    <>
      <Head>
        <title>Şirketler Hukuku Mevzuatı Danışmanlığı - GroupMFH</title>
        <meta name="description" content="6102 sayılı Türk Ticaret Kanunu'na göre, ticari işletmelerin tür değişikliği, birleşme veya bölünme işlemleri vergi mevzuatına uygun hizmetlerle gerçekleştirilir." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Şirketler Hukuku Mevzuatı Danışmanlığı
            </h2>
            <h4 className="text-left text-md md:pl-8">
              6102 sayılı Türk Ticaret Kanunu ve bu Kanuna ilişkin çıkarılan tali mevzuata göre ticari<br />
              işletmelerin ve şirketlerin tür değişikliği; şirketlerin birleşme veya bölünme işlemleri vergi<br />
              mevzuatıyla uyumlu olarak yapılmasında gerekli hizmetler sunulmaktadır.</h4></section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
