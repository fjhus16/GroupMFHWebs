import Container from '../../components/container'
import ContactForm from '../../components/tr/contactform'
import Layout from '../../components/tr/layout'
import Head from 'next/head'

export default function Incentivesrd() {
  return (
    <>
      <Head>
        <title>Teşvik Hizmetleri ve Ar-Ge Danışmalığı - GroupMFH</title>
        <meta name="description" content="MFH Group, müşterilere vergi, teşvik ve istisna konularında çözüm odaklı danışmanlık hizmetleri sunar." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Teşvik Hizmetleri ve Ar-Ge Danışmalığı
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group, müşterilerinin Vergi, Teşvik, İstisna gibi teknik ve karmaşık bir yapıya sahip konuları ve bu konulara ilişkin mevzuatlardan kaynaklı uyuşmazlıklarının çözümüne ilişkin ihtiyaç duyabileceği aşağıdaki hizmetleri çözüm odaklı bakış açılarıyla sunmaktadır:<br /><br />
              ✓ Yatırım Teşvik Mevzuatı (Yatırım İndirimi İstisnası, KDV İstisnası, Vergi-Resim, Harç İstisnası vb.) ile İlgili Danışmanlık<br />
              ✓ Doğrudan Yabancı Yatırımlar Kanunu Çerçevesindeki Uygulamalar ile İlgili Danışmanlık<br />
              ✓ Ar-Ge Teşvik Mevzuatı ile İlgili Danışmanlık<br />
              ✓ Teknopark Mevzuatı ile İlgili Danışmanlık<br />
              ✓ Serbest Bölge Mevzuatı Hakkında Danışmanlık<br />
              ✓ Marka Teşvik Mevzuatı Hakkında Danışmanlık<br />
              ✓ Fuar, Sergi, Panayır Teşvik Mevzuatı Hakkında Danışmanlık<br />
              ✓ “Görünmeyen İşlemler” Olarak Tanımlanan İşlemlerdeki Vergisel Yükümlülüklerin Analizi<br />
              ✓ Kaynak Kullanımını Destekleme Fonu ile İlgili Yükümlülükler ve Uygulamaları<br />
              ✓ Diğer Vergi Teşvikleri
            </h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
