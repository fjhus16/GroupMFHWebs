import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`GroupMFH`}</title>
        </Head>
        <Container>
          <div className='py-2 px-2 bg-gray-400 mt-10 mx-auto md:w-[60vw]'>
            <form className='flex grid grid-cols-2 md:w-[60vw] justify-center items-center flex-center' action="https://formsubmit.co/fce71d935be63f864888db98ccb0ccae" method="POST">
              <label className='text-2xl font-bold' htmlFor="isim">İsminiz*</label>
              <input className='my-2 border-solid mx-auto w-[80%] justify-center items-center align-center' type="Name" name="isim" required />
              <label className='text-2xl font-bold' htmlFor="eposta">E-posta adresiniz*</label>
              <input className='my-2 border-solid mx-auto w-[80%] justify-center items-center align-center' type="email" name="email" required />
              <label className='text-2xl font-bold' htmlFor="telefon">Telefon numaranız</label>
              <input className='my-2 border-solid mx-auto w-[80%] justify-center items-center align-center' type="Phone" name="telefon" />
              <label className='text-2xl font-bold' htmlFor="şirket">Şirketinizin adı</label>
              <input className='my-2 border-solid mx-auto w-[80%] justify-center items-center align-center' type="Şirketinizin adı" name="şirket" />
              <input type="text" name="_honey" className="hidden" />
              <input type="hidden" name="_captcha" value="false" />
              <label className='text-2xl font-bold' htmlFor="mesaj">Mesajınız*</label>
              <input className='multiline my-2 border-solid mx-auto w-[80%] justify-center items-center align-center' type="Message" name="mesaj" required />
              <button className='col-span-2 bg-gray-800 text-white' type="submit">Gönder</button>
            </form>
          </div>
        </Container>
      </Layout>
    </>
  )
}
