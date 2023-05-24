import Container from '../../components/container'
import ContactForm from '../../components/tr/contactform'
import Layout from '../../components/tr/layout'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
        </Head>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Hakkımızda
            </h2>
            <h4 className="text-left text-md md:pl-8">
              MFH Group olarak alanında uzmanlaşmış kadromuz ile küresel çapta, bireysel ve kurumsal tüm müşterilerimize en üst seviyede nitelikli hizmet vermek için ekip halinde çalışıyoruz.
              Denetim, tasdik ve danışmanlık hizmetleri müşteri beklentilerini en üst seviyede karşılayacak şekilde uluslararası kalite standartlarına uygun olarak icra edilmektedir.
              MFH Group, müşterilerinin stratejik çözüm ortağı olarak Vergi Denetimi, Mali Danışmanlık, Yönetim ve Kurumsal Finansman Danışmanlığı, Sosyal Güvenlik Danışmanlığı, Gümrük ve Dış Ticaret Danışmanlığı ve Şirketler Hukuku ile ilgili işlemler kapsamında hizmet sunmaktadır.
            </h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
