import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function TeamGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <Item><div className='flex flex-col md:flex-row md:flex-row-reverse justify-between items-center'>
                        <div><Image src={"https://picsum.photos/500/900"} alt={'person'} width={300} height={600} /></div>
                        <div>isim<br />meslek<br />bilgi</div>
                    </div></Item>
                </Grid>
                <Grid xs={6}>
                    <Item> <div className='flex flex-col md:flex-row md:flex-row-reverse justify-between items-center'>
                        <div><Image src={"https://picsum.photos/500/900"} alt={'person'} width={300} height={600} /></div>
                        <div>isim<br />meslek<br />bilgi</div>
                    </div></Item>
                </Grid>
                <Grid xs={6}>
                    <Item><div className='flex flex-col md:flex-row justify-between items-center'>
                        <div><Image src={"https://picsum.photos/500/900"} alt={'person'} width={300} height={600} /></div>
                        <div>isim<br />meslek<br />bilgi</div>
                    </div></Item>
                </Grid>
                <Grid xs={6}>
                    <Item><div className='flex flex-col md:flex-row justify-between items-center'>
                        <div><Image src={"https://picsum.photos/500/900"} alt={'person'} width={300} height={600} /></div>
                        <div>isim<br />meslek<br />bilgi</div>
                    </div></Item>
                </Grid>
            </Grid>
        </Box>
    );
}