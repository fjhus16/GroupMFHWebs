import Container from '../../components/container'
import ContactForm from '../../components/tr/contactform'
import Layout from '../../components/tr/layout'
import Head from 'next/head'

export default function Corporateconsulting() {
  return (
    <>
      <Head>
        <title>Yönetim, Kurumsal Finansman ve Teknoloji Danışmanlığı - GroupMFH</title>
        <meta name="description" content="MFH Group, müşterilere teknik bilgi ve esneklikle yaklaşır, sektör uzmanlığıyla değer odaklı çözümler sunar." />
        </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
          <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
            Yönetim, Kurumsal Finansman ve Teknoloji Danışmanlığı
              </h2>
            <h4 className="text-justify text-md md:pl-8">
            MFH Group’un edinmiş olduğu teknik bilgi ve tecrübe, esneklik ve müşterilerimiz ile kurduğumuz yakın iş ilişkisi, her farklı olay için farklı yaklaşım geliştirebilen bir ekip olmamızı sağlamaktadır. Teknik bilgi ve deneyimlerimiz sonucu oluşan sektör ve konu uzmanlığımızı, farklı ölçek ve yapıya sahip şirketlerle çalışarak, zenginleştirip farklılaştırıyoruz. Her projede hedefimiz esnek çalışma yapımız ile müşterimize değer katacak, uygulanabilir ve sonuç odaklı yaklaşımları hayata geçirebilmektir. Danışmanlık ekibimiz en güncel teorik bilgi ile donanmış olmakla birlikte, projelerin hayata geçebilmesi için uygulama deneyimine ve son teknolojik gelişmelere vakıftır. MFH Group, müşteri ihtiyaçları doğrultusunda bir bütün olarak hareket ederek yönetim danışmanlığı desteği sağlayacak şekilde organize olmuştur.</h4></section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
