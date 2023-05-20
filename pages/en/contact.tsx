import Container from '../../components/container'
import Layout from '../../components/en/layout'
import Head from 'next/head'
import { Grid, TextField } from '@mui/material'
import { Phone, Mail, Business } from '@mui/icons-material'
import ContactForm from '../../components/en/contactform'

export default function Contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
        </Head>
        <Container>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='pt-6 text-5xl font-bold tracking-tighter leading-tight'>Contact</h2>
            <div className='my-2 pb-4 pt-2 border rounded-md mt-10 w-[80vw] lg:w-[40vw]'>
              <div className='flex flex-center justify-center'>
                <h2 className='text-xl font-bold'>Contact details</h2>
              </div>
              <div className="ml-6 mt-4 flex items-center">
                <Phone className="h-6 w-6 mr-2" />
                <p className='ml-2'>+90 (312) 474 03 85</p>
              </div>
              <div className="ml-6 mt-4 flex items-center">
                <Mail className="h-6 w-6 mr-2" />
                <p className='ml-2'>info@groupmfh.com</p>
              </div>
              <div className="ml-6 mt-4 flex items-center">
                <Business className="h-6 w-6 mr-2" />
                <p className='ml-2'>Sabri Mermutlu İş Merkezi<br />
                  Ehlibeyt Mahallesi<br />
                  Tekstilciler Caddesi No:33/16<br />
                  06520 Çankaya ANKARA</p>
              </div>

            </div>
            <iframe className="w-[80vw] mt-4 lg:w-[40vw]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382.6684957034527!2d32.81467718596923!3d39.888840999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345fb45398a5d%3A0xfe39e27507995623!2sSabri%20Mermutlu%20%C4%B0%C5%9F%20Merkez!5e0!3m2!1sen!2str!4v1679864974596!5m2!1sen!2str" height="450" loading="lazy"></iframe>

          </div>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
} 