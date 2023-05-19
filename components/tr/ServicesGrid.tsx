import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { useRouter } from 'next/router'

const Grid = () => {
    const gridData = [
        {
            id: 1,
            text: 'Vergi Denetimi',
            logo: '/assets/homepage/tax.jpg',
            link: '/taxaudit',
        },
        {
            id: 2,
            text: 'Muhasebe ve Mali Danışmanlık Hizmetleri',
            logo: '/assets/homepage/calc.jpg',
            link: '/accounting',
        },
        {
            id: 3,
            text: 'Teşvik Hizmetleri ve Ar-Ge Danışmalığı',
            logo: '/assets/homepage/tablet.jpg',
            link: '/incentivesrd',
        },
        {
            id: 4,
            text: 'Sosyal Güvenlik Danışmalığı',
            logo: '/assets/homepage/receipts.jpg',
            link: '/socialsecurity',
        },
        {
            id: 5,
            text: 'Gümrük ve Dış Ticaret Mevzuatı Danışmalığı',
            logo: '/assets/homepage/globe.jpg',
            link: '/foreigntrade',
        },
        {
            id: 6,
            text: 'Yönetim, Kurumsal Finansman ve Teknoloji Danışmanlığı',
            logo: '/assets/homepage/international.jpg',
            link: '/corporateconsulting',
        },
        {
            id: 7,
            text: 'Şirketler Hukuku Mevzuatı Danışmanlığı',
            logo: '/assets/homepage/factory.jpg',
            link: '/legislations',
        },
    ];

    const { asPath } = useRouter()

    return (
        <div className="grid-container">
            {gridData.map((item) => (
                <div className="grid-item" key={item.id}>
                    <Link href={`${asPath.substring(0, 3)}${item.link}`}>
                        <Card square sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column"
                        }}
                            className='w-[300px] 2xl:w-[340px] min-h-[100px]'>
                            <CardMedia
                                sx={{ height: 140 }}
                                title={item.text}
                            ><div className='relative w-full h-[140px]'><Image fill style={{ objectFit: "cover" }} src={item.logo} alt={item.text} /></div></CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant='h5' component="div" className='font-bold text-lg'>
                                    {item.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            ))}
            <style jsx>{`
        .grid-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .grid-item {
          flex: 0 0 auto;
          padding: 3px;
          text-align: center;
        }
      `}</style>
        </div>
    );
};

export default Grid;
