import { useState } from 'react';

const Services = () => {
    const [selectedButton, setSelectedButton] = useState(0);

    const handleClick = (index: number) => {
        setSelectedButton(index);
    };

    const services = [
        {
            title: 'Vergi Denetimi',
            text: <>MFH Group, gerçek ve tüzel kişilerin (şirket, dernek ve vakıfların, bunların işletme veya
                teşebbüslerinin)<br />
                bilanço ve gelir tablolarını, vergi kanunlarına göre verilmiş beyanlarını, vergi
                kanunlarıyla ilgili taleplerini,<br />
                vergi kanunları ve genel kabul görmüş muhasebe standartlarına
                uygunluğu açısından denetler ve tasdik eder.<br />
                Hazırlanan tasdik raporları müşterilerin ve resmi mercilerin istifadesine sunulur.<br />
                Kanunlar gereğince resmi mercilere verilen ve Yeminli Mali Müşavirler tarafından tasdik
                edilmiş tablolar,<br />
                kamu idarelerince devletin denetim elemanlarınca tasdikin kapsamı ölçüsünde
                incelenmiş bir belge olarak kabul edilir.</>
        },
        {
            title: 'Muhasebe ve Mali Danışmanlık Hizmetleri',
            text: <>MFH Group, müşterilerinin karşılaştığı mali, idari ve hukuki olaylara ilişkin ihtiyaç duyabileceği aşağıdaki hizmetleri<br />
            çözüm odaklı bir bakış açısıyla sunmaktadır:<br /><br />
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
            ✓ Mali Mevzuattaki Değişikliklere İlişkin Güncel Bilgi Aktarımları</>
        },
        {
            title: 'Teşvik Hizmetleri ve Ar-Ge Danışmalığı',
            text: <>MFH Group, müşterilerinin Vergi, Teşvik, İstisna gibi teknik ve karmaşık bir yapıya sahip<br />
            konuları ve bu konulara ilişkin mevzuatlardan kaynaklı uyuşmazlıklarının çözümüne ilişkin<br />
            ihtiyaç duyabileceği aşağıdaki hizmetleri çözüm odaklı bakış açılarıyla sunmaktadır:<br /><br />
            ✓ Yatırım Teşvik Mevzuatı (Yatırım İndirimi İstisnası, KDV İstisnası, Vergi-Resim, Harç İstisnası vb.) ile İlgili Danışmanlık<br />
            ✓ Doğrudan Yabancı Yatırımlar Kanunu Çerçevesindeki Uygulamalar ile İlgili Danışmanlık<br />
            ✓ Ar-Ge Teşvik Mevzuatı ile İlgili Danışmanlık<br />
            ✓ Teknopark Mevzuatı ile İlgili Danışmanlık<br />
            ✓ Serbest Bölge Mevzuatı Hakkında Danışmanlık<br />
            ✓ Marka Teşvik Mevzuatı Hakkında Danışmanlık<br />
            ✓ Fuar, Sergi, Panayır Teşvik Mevzuatı Hakkında Danışmanlık<br />
            ✓ “Görünmeyen İşlemler” Olarak Tanımlanan İşlemlerdeki Vergisel Yükümlülüklerin Analizi<br />
            ✓ Kaynak Kullanımını Destekleme Fonu ile İlgili Yükümlülükler ve Uygulamaları<br />
            ✓ Diğer Vergi Teşvikleri</>
        },
        {
            title: 'Sosyal Güvenlik Danışmalığı',
            text: <>MFH Group, şirketlere, Sosyal Güvenlik Kurumu işlemleri, fesih süreçleri, işe iade ve<br />
            hesaplamaları, kıdem, ihbar ve izin ücreti, işyerinin devri, birleşmesi, iş sözleşmeleri ve yasal<br />
            tüm yükümlülüklere uyum çalışmasının yapılması gibi iş ve sosyal güvenlik alanında çözüm oluşturmaktadır.</>
        },
        {
            title: 'Gümrük ve Dış Ticaret Mevzuatı Danışmalığı',
            text:  <>MFH Group, müşterilerinin İhracat, İthalat ve Kambiyo Mevzuatı ve<br />
            Uygulamaları kapsamında ihtiyaç duyabileceği aşağıdaki hizmetleri çözüm odaklı bir bakış<br />
            açısıyla sunmaktadır:<br /><br />
            ✓ Gümrük mevzuatı<br />
            ✓ Dış ticaret mevzuatı<br />
            ✓ Dış ticaretle bağlantılı vergi mevzuatı (GMSİ, SMK, tevkifat, KDV,damga vergisi)<br />
            ✓ Türk Parasının Kıymetini Koruma Hakkındaki Mevzuat ile İlgili Danışmanlık<br />
            ✓ KDV-ÖTV mevzuatı ve iade işlemleri<br />
            ✓ İhracat işlemleri<br />
            ✓ Dahilde işleme rejimi<br />
            ✓ Gümrük uzlaşma (uzlaşma sürecinde danışmanlık)<br />
            ✓ Gümrük dava süreci<br />
            ✓ Denetim süreci (müfettiş incelemesi sürecinde danışmanlık)</>
        },
        {
            title: 'Yönetim, Kurumsal Finansman ve Teknoloji Danışmanlığı',
            text: <>MFH Group’un edinmiş olduğu teknik bilgi ve tecrübe, esneklik ve müşterilerimiz ile<br />
            kurduğumuz yakın iş ilişkisi, her farklı olay için farklı yaklaşım geliştirebilen bir ekip olmamızı<br />
            sağlamaktadır. Teknik bilgi ve deneyimlerimiz sonucu oluşan sektör ve konu uzmanlığımızı,<br />
            farklı ölçek ve yapıya sahip şirketlerle çalışarak, zenginleştirip farklılaştırıyoruz. Her projede<br />
            hedefimiz esnek çalışma yapımız ile müşterimize değer katacak, uygulanabilir ve sonuç odaklı<br />
            yaklaşımları hayata geçirebilmektir.<br />
            Danışmanlık ekibimiz en güncel teorik bilgi ile donanmış olmakla birlikte, projelerin hayata<br />
            geçebilmesi için uygulama deneyimine ve son teknolojik gelişmelere vakıftır. MFH Group,<br />
            müşteri ihtiyaçları doğrultusunda bir bütün olarak hareket ederek yönetim danışmanlığı desteği<br />
            sağlayacak şekilde organize olmuştur.</>
        },
        {
            title: 'Şirketler Hukuku Mevzuatı Danışmanlığı',
            text: <>6102 sayılı Türk Ticaret Kanunu ve bu Kanuna ilişkin çıkarılan tali mevzuata göre ticari<br />
            işletmelerin ve şirketlerin tür değişikliği; şirketlerin birleşme veya bölünme işlemleri vergi<br />
            mevzuatıyla uyumlu olarak yapılmasında gerekli hizmetler sunulmaktadır.</>
        },
    ];

    return (
        <div className="flex-col justify-center items-center hidden lg:flex">
            <div className="flex flex-wrap justify-center items-center">{services.map((service, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`py-2 px-4 font-bold my-2 mx-1 hover:bg-black hover:text-white transition-colors duration-500 ${selectedButton === index ? 'bg-black text-white' : 'text-black'}`}
                    style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)', transitionProperty: 'box-shadow, transform', transitionDuration: '0.5s', transformOrigin: 'center' }}
                >
                    {service.title}
                </button>
            ))}</div>
            {selectedButton !== -1 && (
                <div
                    className="bg-gray-100 p-4 my-2 w-full md:w-3/4 lg:w-2/3"
                    style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)' }}
                >
                    <h2 className="text-lg font-bold text-gray-800">{services[selectedButton].title}</h2>
                    <p>{services[selectedButton].text}</p>
                </div>
            )}
        </div>
    );
};

export default Services;
