import Container from '../../components/container'
import ContactForm from '../../components/tr/contactform'
import Layout from '../../components/tr/layout'
import Head from 'next/head'

export default function OurValues() {
  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
        </Head>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Değerlerimiz
            </h2>
            <h4 className="text-left text-md md:pl-8">
              1. Müşteri Odaklılık: Müşterilerimizin ihtiyaçlarını anlamak ve onlara en üst düzeyde hizmet sunmak için çaba sarf ediyoruz. Onların başarısı bizim başarımızdır ve müşteri memnuniyeti en önemli önceliğimizdir.<br/>
              2. Uzmanlık ve Kalite: Alanında uzmanlaşmış bir kadro olarak, yüksek kaliteli hizmet sunmayı hedefliyoruz. Uluslararası kalite standartlarına uymak ve sürekli olarak kendimizi geliştirmek için çaba gösteriyoruz.<br/>
              3. Etik Değerlere Bağlılık: İşimizi dürüstlük, şeffaflık ve etik değerlere uygun bir şekilde yürütüyoruz. Müşterilerimize ve paydaşlarımıza karşı güven oluşturmak ve uzun vadeli ilişkiler inşa etmek için etik ilkelerimize sıkı sıkıya bağlıyız.<br/>
              4. İnovasyon ve Sürekli Öğrenme: Hızla değişen iş dünyasında rekabetçi olabilmek için sürekli olarak öğrenmeye ve yenilikçi çözümler üretmeye odaklanıyoruz. Teknolojik gelişmeleri yakından takip ediyor ve işimizi daha verimli hale getirmek için en son araçları kullanıyoruz.<br/>
              5. İşbirliği ve Ekip Ruhu: Grup çalışmasını teşvik ediyoruz ve ekip ruhunu önemsiyoruz. Birlikte çalışmanın gücüne inanıyor ve bilgi, deneyim ve farklı perspektiflerin bir araya gelerek daha iyi sonuçlar elde etmemizi sağladığına inanıyoruz.<br/>
              6. Sorumluluk: Müşterilerimize, çalışanlarımıza ve topluma karşı sorumluluklarımızın bilincindeyiz. Sorumluluklarımızı zamanında ve doğru bir şekilde yerine getirmek için çaba sarf ediyoruz.<br/>
              7. Doğruluk ve Güvenilirlik: İşimizde dürüstlük ve doğruluk prensiplerine sıkı sıkıya bağlıyız. Bilgileri doğru ve şeffaf bir şekilde sunarız ve güvenilirliğimizi korumak için yanlış yönlendirmelerden kaçınırız. İşimizi güvenilir bir şekilde yürütmek, söz verdiğimiz hizmetleri zamanında ve eksiksiz bir şekilde yerine getirmek için öncelikli bir değerdir.<br/>
              8. Tarafsızlık: Müşterilerimize ve paydaşlarımıza karşı tarafsızlık ilkesine bağlıyız. Bağımsızlık ve tarafsızlık, objektif değerlendirmeler yapmamızı ve en iyi çözümleri sunmamızı sağlar.<br/>
              Bu değerler, MFH Group olarak kim olduğumuzu ve nasıl çalıştığımızı temsil etmektedir. Bu değerler doğrultusunda müşterilerimize en iyi hizmeti sunmayı ve sürekli olarak kendimizi geliştirmeyi taahhüt ediyoruz.<br/>
            </h4>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
