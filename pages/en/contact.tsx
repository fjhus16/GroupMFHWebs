import Container from '../../components/container'
import Layout from '../../components/en/layout'
import Head from 'next/head'
import { TextField } from '@mui/material'

export default function Contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`GroupMFH`}</title>
        </Head>
        <Container>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='mb-8 pt-6 text-5xl font-bold tracking-tighter leading-tight'>Contact</h2>
            <h3 className='pt-3 text-2xl font-bold tracking-tighter leading-tight'>Fill in and send the form, our most suitable expert will get in touch with you as soon as possible.</h3>
          </div>
          <div className='my-2 pb-4 pt-2 border rounded-md mt-10 mx-auto md:w-[40vw]'>
            <form className='flex pt-5 gap-5 flex-col md:w-[40vw] justify-center items-center' action="https://formsubmit.co/e4d7aa3a78d1dbb9a2517df63907c970" method="POST">
              <TextField required className='w-[90%]' id="outlined-basic" label="Your name" name="isim" variant="outlined" />
              <TextField required className='w-[90%]' id="outlined-basic" label="Your e-mail address" name="email" variant="outlined" />
              <TextField className='w-[90%]' id="outlined-basic" label="Your phone number" name="telefon" variant="outlined" />
              <TextField className='w-[90%]' id="outlined-basic" label="The name of your company" name="şirket" variant="outlined" />
              <TextField required className='w-[90%]' multiline id="outlined-basic" label="Your message" name="mesaj" variant="outlined" />
              <input type="text" name="_honey" className="hidden" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <button className='w-[25%] py-2 px-2 rounded bg-gray-800 text-white' type="submit">Send</button>
            </form>
          </div>
        </Container>
      </Layout>
    </>
  )
} 