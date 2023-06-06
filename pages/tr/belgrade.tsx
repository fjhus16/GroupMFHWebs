import Container from '../../components/container'
import ContactForm from '../../components/tr/contactform'
import Layout from '../../components/tr/layout'
import Head from 'next/head'

export default function Belgrade() {
  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
        </Head>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-2 pt-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Sırbistan'da Şirket Kuruluşu İle İlgili Bilgiler
            </h2>
           <p className='text-justify'> 
            <p className='font-bold'>1. Şirket Türleri</p>         
            Sırbistan Şirketler Kanunu, şirketleri dört başlıkta düzenlemekte olup Sırbistan’da iş yapmak isteyen yerli veya yabancı uyruklu tüm gerçek ve tüzel kişiler, bu şirket türlerinden herhangi birini kurma veya kurulu olan bir şirkete ortak olma hakkına sahiptirler.<br /><br />
            <ul>
              <li>- Limited Şirket (Društvo s ograničenom odgovornošću, d.o.o.)</li>
              <li>-	Anonim Şirket (Akcionarsko društvo, a.d.)</li>
              <li>-	Kolektif Şirket (Ortačko društvo, o.d.)</li>
              <li>-	Komandit Şirket (Komanditno društvo, k.d.)</li>
            </ul><br />
            Bunlara ek olarak ticari faaliyetler şube ve temsilcilik ofisi şeklinde de yürütülebilmektedir.<br/>
            <p className='font-bold'>1.1. Limited Şirket</p>
            Limited şirket Sırbistan’da küçük ve orta ölçekli yerli ve yabancı girişimcilerin en çok tercih ettiği şirket türüdür. Bir veya daha çok gerçek veya tüzel kişi tarafından kurulabilmektedir. Ortak sayısı en fazla 50 olabilir. Ortakların sorumlulukları sermayeleri ile sınırlıdır. Limited şirketlerde asgari kayıtlı sermaye tutarının en az 100 RSD (yaklaşık 1 Avro) olması gerekir. Şirket sermayesinin nakdi veya ayni olarak ödenmesi mümkündür.
            Limited şirketlerde yönetici, şirketin yasal temsilcisidir. Şirket müdürünün Sırbistan vatandaşı olması veya Sırbistan’da oturum iznine sahip olması şartı bulunmamaktadır. Ayrıca şirket müdürü, şirket ortaklarından birisi de olabilir.
            <p className='font-bold'>1.2. Anonim Şirket</p>
            Anonim şirket, sermayesi belirli ve paylara bölünmüş, ortakların yalnızca şirkete karşı taahhüt ettikleri miktarlarla sınırlı olarak sorumlu oldukları şirket türüdür. Diğer şirket türleri ile karşılaştırıldığında kuruluşu en karmaşık olan şirket türüdür. Bir veya daha çok gerçek veya tüzel kişi tarafından kurulabilmektedir.
            Şirketin kuruluş aşamasında şirket hissedarları kuruluş sözleşmesini ve şirket ana sözleşmesini imzalar. Anonim şirketlerde asgari kayıtlı sermaye tutarının en az 3.000.000 RSD (yaklaşık 25.000 Avro) olması gerekir. Şirket sermayesinin nakdi veya ayni olarak ödenmesi mümkündür.
            <p className='font-bold'>1.3. Kolektif Şirket</p>
            Kolektif şirket iki veya daha fazla gerçek veya tüzel kişi tarafından kurulan ve bu kişilerin şirketin tüm borç ve alacaklarından bütün varlıkları ile sorumlu olduğu şirkettir. Kolektif şirketler için asgari sermaye şartı bulunmamaktadır.
            <p className='font-bold'>1.4. Komandit Şirket</p>
            Komandit şirket biri komandite diğeri komanditer olmak üzere en az iki ortak tarafından kurulur. Komandite ortak, şirket borçlarına karşı sınırsız sorumluluğu olan ortaktır. Komanditer ortak ise sorumluğu şirkete koyduğu sermaye ile sınırlı olan ortaktır.  Komandit şirkete iki veya daha fazla kişi ortak olabilmektedir. Asgari sermaye şartı bulunmamaktadır.
            <p className='font-bold'>1.5. Diğer</p>
            Sırbistan’da faaliyette bulunmak isteyen yabancı yatırımcılar, yukarıda belirtilen şirket türlerine ilaveten şube veya temsilcilik ofisi biçiminde de faaliyet gösterebilmektedir.
            Sırbistan’da yabancı bir firmanın şubesinin açılması mümkündür, fakat şubelerin de tescil zorunluluğu bulunduğundan bu işlem yeni bir şirket açılmasından çok farklı bir süreç değildir. Yurt dışı şube, yasalara uygun olarak ticari faaliyette bulunan bir şirketin ayrı bir organizasyon birimi olarak tanımlanmıştır. Şubenin ayrı bir tüzel kişiliği bulunmaz, ancak şirket adına faaliyetlerini yürütebilir.
            Yabancı şirketler Sırbistan’da bir temsilcilik ofisi de açabilir. Temsilcilik ofisinin Türkiye’deki şirketten ayrı bir tüzel kişiliği bulunmamaktadır. Temsilcilik ofisi temel olarak Türkiye’deki ana şirket adına Sırbistan’da destekleyici faaliyetler (reklam, ürünlerin pazarlanması, müşteri bulma vb.) yürütür. Temsilcilik ofislerinin ticari faaliyette bulunmasına izin verilmez, bu nedenle kurumlar vergisi ödeme sorumluluğu bulunmamaktadır.
            <p className='font-bold'>2. Şirket Kurma Prosedürü</p>
            Sırbistan’da yerli veya yabancı gerçek veya tüzel kişiler tarafından kurulan tüm şirketlerin, Sırp İş Kayıt Ajansı’na (APR) kayıt olma zorunluluğu bulunmaktadır. Şirketlerin kayıt işlemleri yaklaşık yedi iş günü içinde tamamlansa da bu sürenin uzamaması için başvuru adımlarının uygun şekilde yapılması gerekmektedir.
            Yabancı gerçek veya tüzel kişiler tarafından kurulan şirketler, Sırp ortağı olup olmadığına bakılmaksızın Sırp şirketi olarak kabul edilmekte ve yerli şirketler ile aynı koşullarda faaliyet yürütmektedir. Ayrıca, yabancı gerçek kişilerin veya yabancı tüzel kişilerin temsilcilerinin şirketin kuruluşunu tamamlamak için Sırbistan’da bulunmaları gerekmemektedir. Bu kapsamda, bir şirketin kurulup tamamen faaliyete geçmesi için gerekli olan işlemlere ilişkin detaylı rehberlik ekibimiz tarafından sağlanmaktadır.
            Sırbistan’da şirket kurma prosedürü Sırp İş Kayıt Ajansı üzerinden yürütülmekte olup, şirket kuruluş sürecinde izlenecek adımlar aşağıda yer almaktadır:
            <p className='font-bold'>2.1. Şirket Türünün Seçilmesi</p>
            Sırbistan’da şirket kurabilmek için öncelikle yukarıda sayılan şirket türlerinden birinin seçilmesi gerekmektedir. Kuruluş maliyetleri seçilen şirket türüne göre değişmektedir.
            <p className='font-bold'>2.2. Ticaret Unvanının Seçilmesi</p>
            Ticaret unvanlarının şirketin adı, yasal şekli ve merkezinin kayıtlı olduğu yer gibi bazı temel unsurları içermesi gerekmektedir. Bunun yanı sıra ticaret unvanlarının; kanunlarda, yönergelerde ve diğer düzenlemelerde yer alan kısıtlamalara da uygun olması gerekmektedir.
            Ticaret unvanlarının benzersiz olması ve mevcut bir unvanla aynı veya çok benzer olmaması gerekmektedir. Bunun kontrolü Sırp İş Kayıt Ajansı kayıtları üzerinden yapılabilmektedir.
            <p className='font-bold'>2.3. Faaliyet Kodunun Seçilmesi</p>
            Tüm tüzel kişilerin ve ticari kuruluşların faaliyet kodlarını (esas olarak yapacakları faaliyet) seçmesi gerekmektedir. Faaliyet kodu, bir firmanın kâr elde etmek için çoğunlukla yapacağı ana faaliyetini ifade etmektedir. Ana faaliyet konusunun seçilmesi, aksi öngörülmemidiği sürece diğer faaliyetlerin yürütülmesine engel olmamaktadır.
            <p className='font-bold'>2.4. Adres Beyanı</p>
            Fiziki ofis yerine sanal ofis kiralamak ve faaliyetlerin gerçekleştirildiği yerden bağımsız olarak şirketin ana ofisini bu adrese kaydettirmek mümkündür.
            Sanal ofisler; şirket adresini kaydetmek ve postaları kabul etmek, firmalara idari destek vermek, telefonları cevaplamak vb. amaçlar için kullanılmaktadır. Bu ofisler esnek yapıları ve esas faaliyet merkezinden bağımsız olabilmeleri sebebiyle yeni kurulan şirketler için başta maliyet olmak üzere birçok avantaj sağlamaktadır.
            <p className='font-bold'>2.5. Kuruluş Kararının Hazırlanması</p>
            Kuruluş kararının (şirketin tek ortaklı kurulması durumunda kuruluş sözleşmesi, birden fazla ortak ile kurulması durumunda kuruluş anlaşması) notere tasdik ettirilmesi gerekmektedir.
            Şirket kuruluş kararında; şirketin adı, merkez adresi, ana faaliyet türü (NACE kodu), sermaye miktarı, şirket ortaklarının adı, soyadı, kimlik/pasaport numarası, adresi (şirket ortağının bir başka şirket olması durumunda şirket unvanı, vergi numarası, merkezinin bulunduğu ülke, sicil kaydı), ortakların payları, her bir ortağın sermaye miktarı, şirket temsilcisinin adı, soyadı, kimlik/pasaport numarası, adresi, şirket kuruluş süresinin sınırlı olup olmadığı, imza yetkisine sahip kişilere ilişkin bilgiler, eğer atanması gerekiyorsa denetim kurulu ve murakıba ilişkin bilgiler vb. bilgilerin yer alması gerekmektedir.
            <p className='font-bold'>2.6. Geçici Banka Hesabının Açılması</p>
            Bankada geçici bir hesap açtırılması ve kayıt ücretlerinin ödenmesi gerekmektedir. Bankada açılan geçici hesap, Sırbistan İş Kayıt Ajansı’ndan alınan evrak ile aktif hale getirilecektir.
            <p className='font-bold'>2.7. Sırbistan İş Kayıt Ajansı’na Başvuru Yapılması Başvuru için gerekli belgeler:</p>
            <ul>
              <li>•	Başvuru kayıt formu</li>
              <li>•	Şirket hissedarlarının imza sirküleri ile notere tasdik ettirilmiş şirket kuruluş kararı</li>
              <li>•	Yabancı ülke vatandaşları için pasaport fotokopisi, Sırp vatandaşı ortak var ise kimlik belgesi fotokopisi, kurucu tüzel kişilik ise ticaret sicil kaydının onaylı örneği</li>
              <li>•	Kuruluştan önce nakit ödenecek sermayeye ilişkin banka onayı</li>
              <li>• Şirket kuruluş harçlarına ilişkin ödeme makbuzları</li>
              <li>•	Eğer başvuru vekalet ile yapıldıysa vekaletname</li>
            </ul>
            Onay süreci tamamlandığında, şirket kaydı APR’nin resmi web sayfasında yayımlanmaktadır. APR’nin şirket kaydına ilişkin aldığı Karar’ın basılı bir nüshası, talep edilmesi halinde şirket yetkilisine verilmektedir. Söz konusu talebin başvuru sırasında ayrıca belirtilmesi gerekmektedir.
            <p className='font-bold'>2.8. Yeminli Tercüme</p>
            Başvuru sırasında kullanılan yabancı dildeki tüm belgelerin, yeminli tercüman tarafından Sırpça’ya çevirisinin yapılması gerekmektedir.
            <p className='font-bold'>2.9. Ticari Banka Hesabının Açılması</p>
            Kurucuların/hissedarların şirketi tescil ettirmeden önce kuruluş sermayesini ödemeyecek olmaları halinde, şirket kaydı tamamlandıktan sonra Sırbistan Cumhuriyeti’ndeki bankalardan birinde bir banka hesabı açmaları ve sermayeyi yatırmaları gerekmektedir.
            <p className='font-bold'>2.10. Vergi Kimlik Numarası ve Sicil Numarası Alınması</p>
            Şirket kaydı tamamlandıktan sonra Sırbistan Vergi İdaresi’nden (PURS) bir vergi kimlik numarası (PIB) ve Sırbistan İstatistik Ofisi’nden bir sicil numarası alınması gerekmektedir.
            <p className='font-bold'>2.11. Sosyal Güvenlik Başvurularının Yapılması</p>
            Şirket ortakları ile çalışanlar için zorunlu sigortaların ve diğer sosyal güvenlik ödemelerinin
            (sosyal sigorta, sağlık sigortası ve işsizlik sigortası) yapılabilmesi için gerekli başvuruların yapılması gerekmektedir.
            <p className='font-bold'> 2.12. Kaşe ve Mühür</p>
            İhtiyaca göre yeterli sayıda şirkete ait resmi kaşenin bastırılması gerekmektedir. Öte yandan, zorunlu olmamakla birlikte uygulamada halen sözleşmelerin vb. evrakın mühürlenmesi talep edilebildiğinden, mühür bastırılmasında da fayda görülmektedir.
            <p className='font-bold'>2.13. Nitelikli elektronik imza/sertifika temini</p>
            Belgelerin elektronik olarak imzalanması, sunulması ve onaylanması için nitelikli elektronik imzanın; şirketin yıllık mali tablolarının ve vergi beyanlarının ibraz edilmebilmesi için bir elektronik sertifikanın temin edilmesi gerekmektedir.
            Bir şirket kurmak ve muhasebe, vergi ve bordro hizmetleri ile ilgili destek sağlamak için güvenilir bir ortağa ihtiyacınız olduğunu varsayıyoruz. Söz konusu hususlar ile diğer tüm faaliyetlerde size yardımcı olacak ekibimizle iletişime geçebilirsiniz.
            </p>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
