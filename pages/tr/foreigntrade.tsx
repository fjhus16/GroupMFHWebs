import Container from '../../components/container'
import ContactForm from '../../components/tr/contactform'
import Layout from '../../components/tr/layout'
import Head from 'next/head'

export default function Foreigntrade() {
  return (
    <>
      <Head>
        <title>Gümrük ve Dış Ticaret Mevzuatı Danışmalığı - GroupMFH</title>
        <meta name="description" content="MFH Group, İhracat, İthalat ve Kambiyo Mevzuatı alanında çözüm odaklı hizmetler sunar." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Gümrük ve Dış Ticaret Mevzuatı Danışmalığı
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group, müşterilerinin İhracat, İthalat ve Kambiyo Mevzuatı ve Uygulamaları kapsamında ihtiyaç duyabileceği aşağıdaki hizmetleri çözüm odaklı bir bakış açısıyla sunmaktadır:<br /><br />
              ✓ Gümrük mevzuatı<br />
              ✓ Dış ticaret mevzuatı<br />
              ✓ Dış ticaretle bağlantılı vergi mevzuatı (GMSİ, SMK, tevkifat, KDV,damga vergisi)<br />
              ✓ Türk Parasının Kıymetini Koruma Hakkındaki Mevzuat ile İlgili Danışmanlık<br />
              ✓ KDV-ÖTV mevzuatı ve iade işlemleri<br />
              ✓ İhracat işlemleri<br />
              ✓ Dahilde işleme rejimi<br />
              ✓ Gümrük uzlaşma (uzlaşma sürecinde danışmanlık)<br />
              ✓ Gümrük dava süreci<br />
              ✓ Denetim süreci (müfettiş incelemesi sürecinde danışmanlık)</h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
