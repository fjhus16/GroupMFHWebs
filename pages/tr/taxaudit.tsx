import Container from '../../components/container'
import Layout from '../../components/tr/layout'
import Head from 'next/head'
import ContactForm from '../../components/tr/contactform'

export default function Taxaudit() {
  return (
    <>
      <Head>
        <title>Vergi Denetimi - GroupMFH</title>
        <meta name="description" content="MFH Group, gerçek ve tüzel kişilerin bilanço, gelir tablosu ve vergi beyanlarını denetler ve tasdik eder. Raporlar müşterilere ve resmi mercilere sunulur." />
      </Head>
      <Layout>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Vergi Denetimi
            </h2>
            <h4 className="text-justify text-md md:pl-8">
              MFH Group, gerçek ve tüzel kişilerin (şirket, dernek ve vakıfların, bunların işletme veya teşebbüslerinin) bilanço ve gelir tablolarını, vergi kanunlarına göre verilmiş beyanlarını, vergi kanunlarıyla ilgili taleplerini, vergi kanunları ve genel kabul görmüş muhasebe standartlarına uygunluğu açısından denetler ve tasdik eder. Hazırlanan tasdik raporları müşterilerin ve resmi mercilerin istifadesine sunulur. Kanunlar gereğince resmi mercilere verilen ve Yeminli Mali Müşavirler tarafından tasdik edilmiş tablolar, kamu idarelerince devletin denetim elemanlarınca tasdikin kapsamı ölçüsünde incelenmiş bir belge olarak kabul edilir.
            </h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
