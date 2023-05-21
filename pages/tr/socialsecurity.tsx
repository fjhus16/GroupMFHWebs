import Container from '../../components/container'
import Layout from '../../components/tr/layout'
import Head from 'next/head'
import ContactForm from '../../components/tr/contactform'

export default function Socialsecurity() {
  return (
    <>
      <Head>
        <title>Sosyal Güvenlik Danışmalığı - GroupMFH</title>
        <meta name="description" content="MFH Group, şirketlere iş ve sosyal güvenlik konularında çözüm odaklı hizmetler sunar." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Sosyal Güvenlik Danışmalığı
            </h2>
            <h4 className="text-left text-md md:pl-8">
              MFH Group, şirketlere, Sosyal Güvenlik Kurumu işlemleri, fesih süreçleri, işe iade ve hesaplamaları, kıdem, ihbar ve izin ücreti, işyerinin devri, birleşmesi, iş sözleşmeleri ve yasal tüm yükümlülüklere uyum çalışmasının yapılması gibi iş ve sosyal güvenlik alanında çözüm oluşturmaktadır.
            </h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
