import { TextField } from '@mui/material'

const ContactForm = () => {
   return (
    <div className='mb-4 pt-2 border bg-white rounded-md mt-6 mx-auto md:w-[40vw]'>
      <form className='flex pt-5 gap-5 flex-col md:w-[40vw] justify-center items-center' action="https://formsubmit.co/e4d7aa3a78d1dbb9a2517df63907c970" method="POST">
        <div className='flex flex-center flex-col justify-center'>
          <h2 className='text-2xl font-bold'>İletişim Formu</h2>

        </div>
        <div className='flex flex-center flex-col justify-center'>
          <h3 className='ml-6 mr-6 pt-3'>Formu doldurup gönderin, en kısa zamanda isteğinize en uyumlu uzmanımız sizinle iletişime geçecek.</h3>
        </div>

        <TextField required className='w-[90%]' id="outlined-basic" label="İsminiz" name="isim" variant="outlined" />
        <TextField required className='w-[90%]' id="outlined-basic" label="E-posta adresiniz" name="email" variant="outlined" />
        <TextField className='w-[90%]' id="outlined-basic" label="Telefon numaranız" name="telefon" variant="outlined" />
        <TextField className='w-[90%]' id="outlined-basic" label="Şirketinizin adı" name="şirket" variant="outlined" />
        <TextField required className='w-[90%]' multiline id="outlined-basic" label="Mesajınız" name="mesaj" variant="outlined" />
        <input type="text" name="_honey" className="hidden" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <button className='w-[25%] py-2 px-2 text-white text-sm ism:text-md mx-3 bg-gray-700 hover:bg-white hover:text-black border border-black font-bold py-3 px-10 lg:px-8 transitions-colors duration-200 mb-6 lg:mb-0' type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default ContactForm;