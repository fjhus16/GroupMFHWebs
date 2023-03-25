import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
    return (
        <div>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography variant="h5">Vergi Denetimi</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>KGK ve SPK yetki belgeleri ile şirketlerin finansal bilgilerinin,<br />düzenleyici kurumlarca belirlenen esaslara göre bağımsız denetimi ve raporlanması faaliyetlerini kapsar.<br />MFH Group, söz konusu denetimlerde finansal tablolarda şirketin ekonomik durumuna ilişkin verilen bilgilerin<br />doğruluğunu belirlemeyi amaçlar.</>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header">
                    <Typography variant="h5">Muhasebe ve Mali Danışmanlık Hizmetleri</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>MFH Group, müşterilerinin karşılaştığı mali, idari ve hukuki olaylara ilişkin ihtiyaç duyabileceği aşağıdaki hizmetleri<br />çözüm odaklı bir bakış açısıyla sunmaktadır:<br /><br />✓ Mali Danışmanlık<br />✓ Vergi Planlaması<br />✓ Vergi Mevzuatı ve Uygulamaları Danışmanlığı<br />✓ Vergi Uyuşmazlıkları (Vergi Davaları)<br />✓ Vergi Uzlaşmaları<br />✓ Maliyet Muhasebesi Danışmalığı<br />✓ Uluslararası Vergi Danışmanlığı<br />✓ İkili Vergi Anlaşmaları Uygulamaları<br />✓ Yabancı Sermaye Mevzuatı, Uygulamaları ve Yabancı Sermaye Yatırımları ve Mali Danışmanlığı<br />✓ Yabancı Uyruklu Kişilerin/ Şirketlerin Vergi Uygulamaları<br />✓ Kuruluş İşlemleri (Yerli ve Yabancı Sermayeli Şirket, Şube, İrtibat Bürosu ve Temsilcilik Kurulması)<br />✓ Devir ve Birleşmeler, Değerleme, Şirket Tasfiyesi<br />✓ Ana Sözleşme Değişiklikleri, Genel Kurul Toplantıları<br />✓ Sermaye Piyasası Uygulamaları (Halka Arz Çalışmaları)<br />✓ Mali Mevzuattaki Değişikliklere İlişkin Güncel Bilgi Aktarımları</>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header">
                    <Typography variant="h5">Teşvik Hizmetleri ve Ar-Ge Danışmalığı</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>MFH Group, müşterilerinin Vergi, Teşvik, İstisna gibi teknik ve karmaşık bir yapıya sahip<br />konuları ve bu konulara ilişkin mevzuatlardan kaynaklı uyuşmazlıklarının çözümüne ilişkin<br />ihtiyaç duyabileceği aşağıdaki hizmetleri çözüm odaklı bakış açılarıyla sunmaktadır:<br /><br />✓ Yatırım Teşvik Mevzuatı (Yatırım İndirimi İstisnası, KDV İstisnası, Vergi-ResimHarç İstisnası Vb.) ile İlgili Danışmanlık<br />✓ Doğrudan Yabancı Yatırımlar Kanunu Çerçevesindeki Uygulamalar ile İlgili Danışmanlık<br />✓ Ar-Ge Teşvik Mevzuatı ile İlgili Danışmanlık<br />✓ Teknopark Mevzuatı ile İlgili Danışmanlık<br />✓ Serbest Bölge Mevzuatı Hakkında Danışmanlık<br />✓ Marka Teşvik Mevzuatı Hakkında Danışmanlık<br />✓ Fuar, Sergi, Panayır Teşvik Mevzuatı Hakkında Danışmanlık<br />✓ “Görünmeyen İşlemler” Olarak Tanımlanan İşlemlerdeki Vergisel Yükümlülüklerin Analizi<br />✓ Kaynak Kullanımını Destekleme Fonu ile İlgili Yükümlülükler ve Uygulamaları<br />✓ Diğer Vergi Teşvikleri</>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header">
                    <Typography variant="h5">Sosyal Güvenlik Danışmalığı</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>MFH Group, şirketlere, Sosyal Güvenlik Kurumu işlemleri, fesih süreçleri, işe iade ve<br />hesaplamaları, kıdem, ihbar ve izin ücreti, işyerinin devri, birleşmesi, iş sözleşmeleri ve yasal<br />tüm yükümlülüklere uyum çalışmasının yapılması gibi iş ve sosyal güvenlik alanında çözüm oluşturmaktadır.</>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header">
                    <Typography variant="h5">Gümrük ve Dış Ticaret Mevzuatı Danışmalığı</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>MFH Group, müşterilerinin İhracat, İthalat ve Kambiyo Mevzuatı ve<br />Uygulamaları kapsamında ihtiyaç duyabileceği aşağıdaki hizmetleri çözüm odaklı bir bakış<br />açısıyla sunmaktadır:<br /><br />✓ Gümrük mevzuatı<br />✓ Dış ticaret mevzuatı<br />✓ Dış ticaretle bağlantılı vergi mevzuatı (GMSİ, SMK, tevkifat, KDV,damga vergisi)<br />✓ Türk Parasının Kıymetini Koruma Hakkındaki Mevzuat ile İlgili Danışmanlık<br />✓ KDV-ÖTV mevzuatı ve iade işlemleri<br />✓ İhracat işlemleri<br />✓ Dahilde işleme rejimi<br />✓ Gümrük uzlaşma (uzlaşma sürecinde danışmanlık)<br />✓ Gümrük dava süreci<br />✓ Denetim süreci (müfettiş incelemesi sürecinde danışmanlık)</>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7a-content"
                    id="panel7a-header">
                    <Typography variant="h5">Yönetim, Kurumsal Finansman ve Teknoloji Danışmanlığı</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>MFH Group’un edinmiş olduğu teknik bilgi ve tecrübe, esneklik ve müşterilerimiz ile<br />kurduğumuz yakın iş ilişkisi, her farklı olay için farklı yaklaşım geliştirebilen bir ekip olmamızı<br />sağlamaktadır. Teknik bilgi ve deneyimlerimiz sonucu oluşan sektör ve konu uzmanlığımızı,<br />farklı ölçek ve yapıya sahip şirketlerle çalışarak, zenginleştirip farklılaştırıyoruz. Her projede<br />hedefimiz esnek çalışma yapımız ile müşterimize değer katacak, uygulanabilir ve sonuç odaklı<br />yaklaşımları hayata geçirebilmektir.<br />Danışmanlık ekibimiz en güncel teorik bilgi ile donanmış olmakla birlikte, projelerin hayata<br />geçebilmesi için uygulama deneyimine ve son teknolojik gelişmelere vakıftır. MFH Group,<br />müşteri ihtiyaçları doğrultusunda bir bütün olarak hareket ederek yönetim danışmanlığı desteği<br />sağlayacak şekilde organize olmuştur.</>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8a-content"
                    id="panel8a-header">
                    <Typography variant="h5">Şirketler Hukuku Mevzuatı Danışmanlığı</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>6102 sayılı Türk Ticaret Kanunu ve bu Kanuna ilişkin çıkarılan tali mevzuata göre ticari<br />işletmelerin ve şirketlerin tür değişikliği; şirketlerin birleşme veya bölünme işlemleri vergi<br />mevzuatıyla uyumlu olarak yapılmasında gerekli hizmetler sunulmaktadır.</><>6102 sayılı Türk Ticaret Kanunu ve bu Kanuna ilişkin çıkarılan tali mevzuata göre ticari<br />işletmelerin ve şirketlerin tür değişikliği; şirketlerin birleşme veya bölünme işlemleri vergi<br />mevzuatıyla uyumlu olarak yapılmasında gerekli hizmetler sunulmaktadır.</>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}