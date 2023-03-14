import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Image from 'next/image'
import Link from 'next/link'
import AccordionItem from '../components/accordionItem'
import { useState } from 'react'

type Props = {
  allPosts: Post[]
}
export default function Index({ allPosts }: Props) {

  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      //if clicked question is already open, then close it
      return setOpen(false);
    } else {
      //if clicked question is not open, then open it
      return setOpen(index);
    }
  }

  const morePosts = allPosts.slice(0, 6)
  const accordionData = [
    {
      title: "Vergi Denetimi",
      desc: <>MFH Group, gerçek ve tüzel kişilerin (şirket, dernek ve vakıfların, bunların işletme veya teşebbüslerinin) bilanço ve gelir tablolarını,<br/>vergi kanunlarına göre verilmiş beyanlarını, vergi kanunlarıyla ilgili taleplerini, vergi kanunları ve genel kabul görmüş muhasebe standartlarına uygunluğu açısından denetler ve tasdik eder.<br/>Hazırlanan tasdik raporları müşterilerin ve resmi mercilerin istifadesine sunulur.<br/>Kanunlar gereğince resmi mercilere verilen ve Yeminli Mali Müşavirler tarafından tasdik edilmiş tablolar,<br/>kamu idarelerince devletin denetim elemanlarınca tasdikin kapsamı ölçüsünde incelenmiş bir belge olarak kabul edilir.</>,
    },
    {
      title: "Bağımsız Denetim Hizmetleri",
      desc: <>KGK ve SPK yetki belgeleri ile şirketlerin finansal bilgilerinin,<br/>düzenleyici kurumlarca belirlenen esaslara göre bağımsız denetimi ve raporlanması faaliyetlerini kapsar.<br/>MFH Group, söz konusu denetimlerde finansal tablolarda şirketin ekonomik durumuna ilişkin verilen bilgilerin<br/>doğruluğunu belirlemeyi amaçlar.</>,
    },
    {
      title: "Muhasebe ve Mali Danışmanlık Hizmetleri",
      desc: <>MFH Group, müşterilerinin karşılaştığı mali, idari ve hukuki olaylara ilişkin ihtiyaç duyabileceği aşağıdaki hizmetleri<br/>çözüm odaklı bir bakış açısıyla sunmaktadır:<br/><br/>✓ Mali Danışmanlık<br/>✓ Vergi Planlaması<br/>✓ Vergi Mevzuatı ve Uygulamaları Danışmanlığı<br/>✓ Vergi Uyuşmazlıkları (Vergi Davaları)<br/>✓ Vergi Uzlaşmaları<br/>✓ Maliyet Muhasebesi Danışmalığı<br/>✓ Uluslararası Vergi Danışmanlığı<br/>✓ İkili Vergi Anlaşmaları Uygulamaları<br/>✓ Yabancı Sermaye Mevzuatı, Uygulamaları ve Yabancı Sermaye Yatırımları ve Mali Danışmanlığı<br/>✓ Yabancı Uyruklu Kişilerin/ Şirketlerin Vergi Uygulamaları<br/>✓ Kuruluş İşlemleri (Yerli ve Yabancı Sermayeli Şirket, Şube, İrtibat Bürosu ve Temsilcilik Kurulması)<br/>✓ Devir ve Birleşmeler, Değerleme, Şirket Tasfiyesi<br/>✓ Ana Sözleşme Değişiklikleri, Genel Kurul Toplantıları<br/>✓ Sermaye Piyasası Uygulamaları (Halka Arz Çalışmaları)<br/>✓ Mali Mevzuattaki Değişikliklere İlişkin Güncel Bilgi Aktarımları</>,
    },
    {
      title: "Teşvik Hizmetleri ve Ar-Ge Danışmalığı",
      desc: <>MFH Group, müşterilerinin Vergi, Teşvik, İstisna gibi teknik ve karmaşık bir yapıya sahip<br/>konuları ve bu konulara ilişkin mevzuatlardan kaynaklı uyuşmazlıklarının çözümüne ilişkin<br/>ihtiyaç duyabileceği aşağıdaki hizmetleri çözüm odaklı bakış açılarıyla sunmaktadır:<br/><br/>✓ Yatırım Teşvik Mevzuatı (Yatırım İndirimi İstisnası, KDV İstisnası, Vergi-ResimHarç İstisnası Vb.) ile İlgili Danışmanlık<br/>✓ Doğrudan Yabancı Yatırımlar Kanunu Çerçevesindeki Uygulamalar ile İlgili Danışmanlık<br/>✓ Ar-Ge Teşvik Mevzuatı ile İlgili Danışmanlık<br/>✓ Teknopark Mevzuatı ile İlgili Danışmanlık<br/>✓ Serbest Bölge Mevzuatı Hakkında Danışmanlık<br/>✓ Marka Teşvik Mevzuatı Hakkında Danışmanlık<br/>✓ Fuar, Sergi, Panayır Teşvik Mevzuatı Hakkında Danışmanlık<br/>✓ “Görünmeyen İşlemler” Olarak Tanımlanan İşlemlerdeki Vergisel Yükümlülüklerin Analizi<br/>✓ Kaynak Kullanımını Destekleme Fonu ile İlgili Yükümlülükler ve Uygulamaları<br/>✓ Diğer Vergi Teşvikleri</>,
    },
    {
      title: "Sosyal Güvenlik Danışmalığı",
      desc: <>MFH Group, şirketlere, Sosyal Güvenlik Kurumu işlemleri, fesih süreçleri, işe iade ve<br/>hesaplamaları, kıdem, ihbar ve izin ücreti, işyerinin devri, birleşmesi, iş sözleşmeleri ve yasal<br/>tüm yükümlülüklere uyum çalışmasının yapılması gibi iş ve sosyal güvenlik alanında çözüm oluşturmaktadır.</>,
    },
    {
      title: "Gümrük ve Dış Ticaret Mevzuatı Danışmalığı",
      desc: <>MFH Group, müşterilerinin İhracat, İthalat ve Kambiyo Mevzuatı ve<br/>Uygulamaları kapsamında ihtiyaç duyabileceği aşağıdaki hizmetleri çözüm odaklı bir bakış<br/>açısıyla sunmaktadır:<br/><br/>✓ Gümrük mevzuatı<br/>✓ Dış ticaret mevzuatı<br/>✓ Dış ticaretle bağlantılı vergi mevzuatı (GMSİ, SMK, tevkifat, KDV,damga vergisi)<br/>✓ Türk Parasının Kıymetini Koruma Hakkındaki Mevzuat ile İlgili Danışmanlık<br/>✓ KDV-ÖTV mevzuatı ve iade işlemleri<br/>✓ İhracat işlemleri<br/>✓ Dahilde işleme rejimi<br/>✓ Gümrük uzlaşma (uzlaşma sürecinde danışmanlık)<br/>✓ Gümrük dava süreci<br/>✓ Denetim süreci (müfettiş incelemesi sürecinde danışmanlık)</>,
    },
    {
      title: "Yönetim, Kurumsal Finansman ve Teknoloji Danışmanlığı",
      desc: <>MFH Group’un edinmiş olduğu teknik bilgi ve tecrübe, esneklik ve müşterilerimiz ile<br/>kurduğumuz yakın iş ilişkisi, her farklı olay için farklı yaklaşım geliştirebilen bir ekip olmamızı<br/>sağlamaktadır. Teknik bilgi ve deneyimlerimiz sonucu oluşan sektör ve konu uzmanlığımızı,<br/>farklı ölçek ve yapıya sahip şirketlerle çalışarak, zenginleştirip farklılaştırıyoruz. Her projede<br/>hedefimiz esnek çalışma yapımız ile müşterimize değer katacak, uygulanabilir ve sonuç odaklı<br/>yaklaşımları hayata geçirebilmektir.<br/>Danışmanlık ekibimiz en güncel teorik bilgi ile donanmış olmakla birlikte, projelerin hayata<br/>geçebilmesi için uygulama deneyimine ve son teknolojik gelişmelere vakıftır. MFH Group,<br/>müşteri ihtiyaçları doğrultusunda bir bütün olarak hareket ederek yönetim danışmanlığı desteği<br/>sağlayacak şekilde organize olmuştur.</>,
    },
    {
      title: "Şirketler Hukuku Mevzuatı Danışmanlığı",
      desc: <>6102 sayılı Türk Ticaret Kanunu ve bu Kanuna ilişkin çıkarılan tali mevzuata göre ticari<br/>işletmelerin ve şirketlerin tür değişikliği; şirketlerin birleşme veya bölünme işlemleri vergi<br/>mevzuatıyla uyumlu olarak yapılmasında gerekli hizmetler sunulmaktadır.</>,
    },
  ]
  return (
    <>
      <Layout>
        <Head>
          <title>{`GroupMFH`}</title>
        </Head>
        <div className='fixed h-[50vh] ism:h-[40vh] md:h-[50vh] w-screen -z-30'>
          <Image src='/assets/homepage/WallStreet.jpg' priority loading='eager' className='bg-right -z-30' fill={true} style={{ objectFit: "cover", objectPosition: "right" }} alt={'Wall Street'} />
          <p className='[text-shadow:_0_2px_0_rgb(0_0_0_/_80%)] text-2xl ism:text-3xl md:text-4xl text-white fixed font-bold mt-16 ism:mt-24 md:mt-48 ml-6 ism:ml-8 md:ml-60 -z-20 mx-auto'>Hedef, başarının ilk adımıdır.</p>
          <p className='[text-shadow:_0_2px_0_rgb(0_0_0_/_80%)] text-lg md:text-2xl text-white fixed font-bold mt-28 ism:mt-36 md:mt-64 ml-6 ism:ml-8 md:ml-60 -z-20 mx-auto'>
            Alanlarında uzman kadrodan oluşan ekibimiz,<br />
            iş hayatınızda attığınız her adımda size rehber ve destek olmaya hazır,<br />
            bilinçli ticari kararlar alıp geleceğinizi inşa ederken yolunuzdan emin olun.</p>
        </div>
        <div className='h-[50vh] ism:h-[40vh] md:h-[50vh] -z-40'></div>
        <Container>
          <div className='flex pb-6 flex-col justify-center items-center'>
            <h2 className="mb-8 pt-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Hizmetlerimiz
            </h2>
            <section className='grid place-items-center'>
              <div className=''>

                {accordionData.map((data, index) => {
                  // @ts-ignore
                  return <AccordionItem key={index} open={index === open} title={data.title} desc={data.desc} toggle={() => toggle(index)} />;
                })}

              </div>
            </section>
          </div>
          <div className='flex flex-col justify-center items-center'>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            <Link href="/blog" className="text-sm ism:text-md mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-10 lg:px-8 duration-200 transition-colors mb-6">
              Daha fazla yazı
            </Link>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])
  return {
    props: { allPosts },
  }
}