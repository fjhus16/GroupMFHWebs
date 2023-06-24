import Container from '../../components/container'
import ContactForm from '../../components/tr/contactform'
import Layout from '../../components/tr/layout'
import Head from 'next/head'

export default function London() {
  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
        </Head>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-2 pt-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              İngiltere'de İş Kurulum Süreci
            </h2>
            <h3 className="font-bold text-2xl xl:text-3xl mb-3">
              Başka bir ülkede yaşarken İngiltere'de bir iş kurabilir miyim?
            </h3>
            <p className='text-justify'>
              Evet, başka bir ülkede yaşarken İngiltere'de bir iş kurabilirsiniz. İngiltere'de ikamet etmeyen kişiler İngiltere şirketlerinin yönetim kurulu üyesi olabilirler. Ancak, her şirketin en az bir gerçek kişi (yani başka bir şirket veya hukuki bir varlık değil) yöneticisi olmalıdır. Yönetici olarak atanabilecek kişilerde bazı şartlar aranır.<br />
              İngiltere'de bir iş kurmak için aşağıdaki adımları izlemeniz gerekecektir:<br /><br />
              <p className='font-bold'>1. Bir Şirket Türü Seçin:</p>
              İngiltere'de birkaç çeşit işletme yapısı bulunur, örneğin; şahıs şirketi, adi ortaklık veya limited şirket gibi. Yabancılar için en yaygın olan tür, sahiplerinden ayrı bir hukuki varlığı olan ve gerçek ya da tüzel kişiler tarafından sahip olunabilen özel limited şirket (Private Limited Company) türüdür.
              <p className='font-bold'>2. Bir Şirket Adı Seçin:</p>
              Şirketinizin adı benzersiz olmalı. Yeni kurulacak şirketin adı mevcut bir şirket adıyla aynı veya çok benzer olamaz. Bu durumu İngiltere Şirketler Sicili'nde (UK Companies House Register) kontrol edebilirsiniz. Şirket adı belirli hassas ifadeleri içermemeli, rahatsızlık verici olmamalıdır.
              <p className='font-bold'>3. Şirketi Şirketler Sicili'ne Kaydedin:</p>
              Şirketinizin kayıtlı ofisi için erişime açık
              bir İngiltere adresi sağlamanız gereklidir. Bu, resmi iletişimin sağlanacağı fiziksel bir adrestir, ancak şirketinizin iş faaliyetleri burada yürütülmek zorunda değildir. Yurtdışındaki şirket sahipleri için kayıtlı ofis adresi sağlayan hizmetler bulunmaktadır.
              <p className='font-bold'>4. Yöneticileri ve Şirket Sekreterini (isteğe bağlı) Atayın:</p>
              Şirketi yönetmekle sorumlu en az bir yönetici atamanız gerekecektir. Şirket sekreteri zorunlu değildir ancak yöneticilerin bazı sorumluluklarını yürütmesi için atanabilir.
              <p className='font-bold'>5. Hisse Senetleri Çıkarın:</p>
              Limited şirket olarak, en az bir hissedarınızın(ortak) olması gerekmektedir, bu yöneticilerden biri de olabilir.
              <p className='font-bold'>6. Şirketinizi Nasıl Yöneteceğinize İlişkin Belgeleri Hazırlayın:</p>
              “Memorandum of association” ve “Articles of Association”, şirket kuruluş anlaşması ve şirket ana sözleşmeleri hazırlanmalıdır.
              <p className='font-bold'>7. Hangi Kayıtları Tutmanız Gerektiğini Kontrol Edin:</p>
              Belirli kayıtları tutmanız ve vergi kayıtları oluşturmanız gerekecektir.
              <p className='font-bold'>8. HM Revenue and Customs (HMRC) (Maliye) ile Kaydolun:</p>
              İş yapmaya başladıktan sonra 3 ay içinde şirketinizi kurumlar vergisi için kaydetmelisiniz.
              <p className='font-bold'>9. Kayıtlı Ofis:</p>
              İngiltere'de bir kayıtlı ofis adresiniz olması gerekmektedir. Bu adres, tüm resmi iletişimlerin yapılacağı adrestir. Adres bir fiziksel adrestir (bir PO Box değil) ve şirketinizin kayıtlı olduğu ülke ile aynı ülkede (örneğin İngiltere ve Galler, İskoçya veya Kuzey İrlanda) bulunmalıdır.
              <p className='font-bold'>10. Anonim Şirketinizi kaydettirirken gerekli olan Memorandum ve Articles of Association belgeleri:</p>
              Memorandum of association, şirketi kurmayı kabul eden tüm başlangıç paydaşları tarafından imzalanan bir yasal beyandır. Articles of association ise hissedarlar, yönetim kurulu üyeleri ve şirket sekreteri tarafından kabul edilen şirketin işleyişi hakkındaki yazılı kurallardır.
              <p className='font-bold'>11. Sermaye Beyanı:</p>
              Tüm hissedarların isimleri ve her birinin sahip olduğu hisse senedi sayısını, şirketin toplam hisse senedi sayısını ve bu hisselerin birim değerinin toplamını içeren bir belgedir.
              <p className='font-bold'>12. Önemli Kontrol Sahipleri (PSC):</p>
              Şirketiniz üzerinde önemli bir kontrol sahibi olan kişileri belirlemeli ve Companies House'a bildirmelisiniz. Bir PSC, şirketinizin %25'ten fazlasına sahip olan veya oy kullanma hakkına sahip olan, yönetim kurulunun çoğunluğunu atama veya azletme yetkisine sahip olan veya önemli bir etki ve kontrol hakkına sahip olan kişidir.
              <p className='font-bold'>13. Standart Endüstri Sınıflandırma (SIC) kodu:</p>
              İşletme faaliyetlerinize uygun bir SIC kodu seçmeniz gereklidir. Şirket kaydedilirken bu kod kullanılır.<br /><br />

              <h3 className="font-bold text-2xl text-center xl:text-3xl mb-3">
                Yabancıların Birleşik Krallıkta Şirket Açma Maliyetleri Nelerdir?
              </h3>
              Yabancılar için Birleşik Krallık’ta bir şirket kurmanın maliyeti çeşitli faktörlere bağlı olarak değişebilir.
              <p className='font-bold'>1. Şirket Kayıt Ücreti:</p>
              Şirketinizi Companies House'a kaydetmek için standart ücret online kayıtta £12, posta yoluyla kayıtta £40'dır. Eğer başvurunuzu saat 15:00'e kadar yaparsanız aynı gün hizmeti £100 olarak ücretlendirilir.
              <p className='font-bold'>2. Kayıtlı Ofis Adresi Hizmeti:</p>
              İngiltere’de bir adresiniz yoksa, kayıtlı bir ofis adresi hizmeti kullanmanız gerekecektir. Bu hizmetlerin fiyatları değişmekle birlikte, sağlayıcıya ve ihtiyaç duyulan hizmet seviyesine bağlı olarak yılda £50 ila birkaç yüz sterlin ödemeniz gerekebilir.
              <p className='font-bold'>3. Şirket Sekreteri Hizmeti:</p>
              Özel bir limited şirketi için bir şirket sekreteri bulundurmak zorunlu olmayıp bu hizmet isteğe bağlıdır. Ancak, bir şirket sekreteri hizmeti kullanmaya karar verirseniz, maliyet sağlayıcıya bağlı olarak değişecektir. Ortalama maliyeti aylık £400’dur.
              <p className='font-bold'>4. Muhasebe Hizmetleri:</p>
              Şirketinizin finansal durumunun karmaşıklığına bağlı olarak, bir muhasebeciyi işe almanın maliyeti yıllık £500 ila £2000 arasında değişebilir.
              <p className='font-bold'>5. Hukuk Ücretleri:</p>
              Hukuki danışmanlık alınması gerekirse maliyeti şirketinizin işlemlerine ve avukatların ücretlerine bağlı olarak değişebilir. Ancak, £1000 ila £4000 arasında maliyeti bulunmaktadır.
              <p className='font-bold'>6. Banka Hesabı Ücretleri:</p>
              Bankaya bağlı olarak, bankada bir işletme hesabı açma ve sürdürme ücretleri hizmetlere göre aylık £5 ila £15 arasında bulunmaktadır.
              <p className='font-bold'>7. Lisanslar ve İzinler:</p>
              İşletmenizin çalışma alanlarına bağlı olarak, belirli lisans veya izinler için ödeme yapmanız gerekebilir.<br /><br />
              Bunlar sadece temel kurulum maliyetleridir. Bir işletmeyi yürütmek, vergiler, maaş bordrosu, kira (fiziksel bir yeriniz varsa), hizmetler, sigorta, pazarlama vb. gibi çeşitli sürekli maliyetleri içerir.</p>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
