import Container from '../components/container'
import Layout from '../components/layout'
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
          <div className='my-2 pb-4 pt-2 border rounded-md mt-10 mx-auto md:w-[40vw]'>
            <form className='flex pt-5 gap-5 flex-col md:w-[40vw] justify-center items-center' action="https://formsubmit.co/fce71d935be63f864888db98ccb0ccae" method="POST">
              <TextField className='w-[90%]' id="outlined-basic" label="İsminiz" name="isim" variant="outlined" />
              <TextField className='w-[90%]' id="outlined-basic" label="E-posta adresiniz" name="email" variant="outlined" />
              <TextField className='w-[90%]' id="outlined-basic" label="Telefon numaranız" name="telefon" variant="outlined" />
              <TextField className='w-[90%]' id="outlined-basic" label="Şirketinizin adı" name="şirket" variant="outlined" />
              <TextField className='w-[90%]' id="outlined-basic" label="Mesajınız" name="mesaj" variant="outlined" />
              <input type="text" name="_honey" className="hidden" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <button className='w-[20%] py-2 rounded bg-gray-800 text-white' type="submit">Gönder</button>
            </form>
          </div>
        </Container>
      </Layout>
    </>
  )
}
