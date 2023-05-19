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
            logo: '/assets/blog/images/7440ekvergi.jpg',
            link: '/taxaudit',
        },
        {
            id: 2,
            text: 'Muhasebe ve Mali Danışmanlık Hizmetleri',
            logo: '/assets/blog/images/top.jpg',
            link: '/accounting',
        },
        {
            id: 3,
            text: 'Teşvik Hizmetleri ve Ar-Ge Danışmalığı',
            logo: '/assets/blog/images/7440ekvergi.jpg',
            link: '/incentivesrd',
        },
        {
            id: 4,
            text: 'Sosyal Güvenlik Danışmalığı',
            logo: '/assets/blog/images/top.jpg',
            link: '/socialsecurity',
        },
        {
            id: 5,
            text: 'Gümrük ve Dış Ticaret Mevzuatı Danışmalığı',
            logo: '/assets/blog/images/7440ekvergi.jpg',
            link: '/foreigntrade',
        },
        {
            id: 6,
            text: 'Yönetim, Kurumsal Finansman ve Teknoloji Danışmanlığı',
            logo: '/assets/blog/images/top.jpg',
            link: '/corporateconsulting',
        },
        {
            id: 7,
            text: 'Şirketler Hukuku Mevzuatı Danışmanlığı',
            logo: '/assets/blog/images/top.jpg',
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
                            className='w-[350px] min-h-[100px]'>
                            <CardMedia
                                sx={{ height: 140 }}
                                title={item.text}
                            ><div className='relative w-full h-[140px]'><Image fill style={{ objectFit: "cover" }} src={item.logo} alt={item.text} /></div></CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant='h5' component="div" className='font-bold text-lg'>
                                    {item.text}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ mt: "auto" }} className='flex flex-row items-center justify-between mt-auto'>
                                <Link className='hover:bg-black hover:text-white text-lg pl-2 pr-2 mb-1 duration-1000' as={`${asPath.substring(0, 3)}${item.link}`} href={`${asPath.substring(0, 3)}${item.link}`}>{asPath.substring(0, 3) == '/en' ? 'More info' : 'Daha fazla bilgi'}</Link>
                            </CardActions>
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
