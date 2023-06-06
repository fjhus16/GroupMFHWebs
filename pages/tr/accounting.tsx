import Container from '../../components/container'
import ContactForm from '../../components/tr/contactform'
import Layout from '../../components/tr/layout'
import Head from 'next/head'

export default function Accounting() {
  return (
    <>
      <Head>
        <title>Muhasebe ve Mali Danışmanlık Hizmetleri - GroupMFH</title>
        <meta name="description" content="MFH Group, müşterilere mali danışmanlık, vergi planlaması ve danışmanlık hizmetleri sunar." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Muhasebe ve Mali Danışmanlık Hizmetleri
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group, müşterilerinin karşılaştığı mali, idari ve hukuki olaylara ilişkin ihtiyaç duyabileceği aşağıdaki hizmetleri çözüm odaklı bir bakış açısıyla sunmaktadır:<br /><br />
              ✓ Mali Danışmanlık<br />
              ✓ Vergi Planlaması<br />
              ✓ Vergi Mevzuatı ve Uygulamaları Danışmanlığı<br />
              ✓ Vergi Uyuşmazlıkları (Vergi Davaları)<br />
              ✓ Vergi Uzlaşmaları<br />
              ✓ Maliyet Muhasebesi Danışmalığı<br />
              ✓ Uluslararası Vergi Danışmanlığı<br />
              ✓ İkili Vergi Anlaşmaları Uygulamaları<br />
              ✓ Yabancı Sermaye Mevzuatı, Uygulamaları ve Yabancı Sermaye Yatırımları ve Mali Danışmanlığı<br />
              ✓ Yabancı Uyruklu Kişilerin/ Şirketlerin Vergi Uygulamaları<br />
              ✓ Kuruluş İşlemleri (Yerli ve Yabancı Sermayeli Şirket, Şube, İrtibat Bürosu ve Temsilcilik Kurulması)<br />
              ✓ Devir ve Birleşmeler, Değerleme, Şirket Tasfiyesi<br />
              ✓ Ana Sözleşme Değişiklikleri, Genel Kurul Toplantıları<br />
              ✓ Sermaye Piyasası Uygulamaları (Halka Arz Çalışmaları)<br />
              ✓ Mali Mevzuattaki Değişikliklere İlişkin Güncel Bilgi Aktarımları</h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
