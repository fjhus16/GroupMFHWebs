import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Grid = () => {
    const gridData = [
        {
            id: 1,
            text: 'Vergi Denetimi',
            logo: '/assets/homepage/iconmonstr-coin-10.svg',
            link: '/taxaudit',
        },
        {
            id: 2,
            text: 'Muhasebe ve Mali Danışmanlık Hizmetleri',
            logo: '/assets/homepage/iconmonstr-calculator-9.svg',
            link: '/accounting',
        },
        {
            id: 3,
            text: 'Teşvik Hizmetleri ve Ar-Ge Danışmalığı',
            logo: '/assets/homepage/iconmonstr-building-26.svg',
            link: '/incentivesrd',
        },
        {
            id: 4,
            text: 'Sosyal Güvenlik Danışmalığı',
            logo: '/assets/homepage/iconmonstr-construction-15.svg',
            link: '/socialsecurity',
        },
        {
            id: 5,
            text: 'Gümrük ve Dış Ticaret Mevzuatı Danışmalığı',
            logo: '/assets/homepage/iconmonstr-delivery-13.svg',
            link: '/foreigntrade',
        },
        {
            id: 6,
            text: 'Yönetim, Kurumsal Finansman ve Teknoloji Danışmanlığı',
            logo: '/assets/homepage/iconmonstr-building-46.svg',
            link: '/corporateconsulting',
        },
        {
            id: 7,
            text: 'Şirketler Hukuku Mevzuatı Danışmanlığı',
            logo: '/assets/homepage/iconmonstr-education-1.svg',
            link: '/legislations',
        },
    ];

    const { asPath } = useRouter();

    const [flippedCard, setFlippedCard] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const flipTimeoutRef = useRef(null);

    const handleCardFlip = (id) => {
        if (isAnimating) {
            return;
        }

        clearTimeout(flipTimeoutRef.current);

        if (flippedCard !== id) {
            setFlippedCard(id);
            setIsAnimating(true);
        } else {
            setFlippedCard(null);
            setIsAnimating(true);
        }

        flipTimeoutRef.current = setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    const handleCardLeave = () => {
        clearTimeout(flipTimeoutRef.current);
        setIsAnimating(false);
        setFlippedCard(null);
    };

    return (
        <div className="grid-container">
            {gridData.map((item) => (
                <div
                    className={`grid-item w-[250px] 2xl:w-[300px] h-[250px] 2xl:h-[300px] ${flippedCard === item.id ? 'flipped' : ''}`}
                    key={item.id}
                    onMouseEnter={() => handleCardFlip(item.id)}
                    onMouseLeave={handleCardLeave}
                >
                    <Link href={`${asPath.substring(0, 3)}${item.link}`}>
                        <Card
                            square
                            sx={{
                                borderRadius: '50%',
                                overflow: 'hidden',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '1px 1px 3px 2px grey',
                            }}
                            className=""
                        >
                            <div className="card-inner">
                                <div className="card-front">
                                    <CardMedia sx={{ height: 80 }} title={item.text}>
                                        <div className="relative w-[full] mt-[25px] 2xl:mt-[75px] h-[90px]">
                                            <Image fill style={{ objectFit: 'contain' }} src={item.logo} alt={item.text} />
                                        </div>
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className="font-bold text-lg">
                                            {item.text}
                                        </Typography>
                                    </CardContent>
                                </div>
                                <div className="card-back">
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className="font-bold text-lg">
                                            {item.text}
                                        </Typography>
                                        <Button className='hover:bg-black rounded-none text-black hover:text-white pt-1 pb-1 pl-2 pr-2 mt-1 mb-3 duration-1000'>
                                            Daha Fazla Bilgi
                                        </Button>
                                    </CardContent>
                                </div>
                            </div>
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
                    transform: scaleX(1);
                    transition: transform 0.5s;
                    flex: 0 0 auto;
                    padding: 3px;
                    text-align: center;
                    position: relative;
                    perspective: 1000px;
                }

                .grid-item .card-inner {
                    width: 100%;
                    height: 100%;
                    transition: transform 0.5s;
                    transform-style: preserve-3d;
                }

                .grid-item.flipped {
                    transform: scaleX(-1);
                    transition: transform 0.5s;
                }

                .grid-item.flipped .card-inner {
                    transform: rotateY(180deg);
                }

                .grid-item .card-front,
                .grid-item .card-back {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                }

                .grid-item .card-front {
                    z-index: 2;
                    transform: rotateY(0deg);
                }

                .grid-item .card-back {
                    transform: rotateY(180deg) scaleX(-1);
                }

                .grid-item.flipped .card-front {
                    transform: rotateY(0deg);
                }

                .grid-item.flipped .card-back {
                    transform: rotateY(180deg) scaleX(-1);
                }

                .card-back {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>
    );
};

export default Grid;