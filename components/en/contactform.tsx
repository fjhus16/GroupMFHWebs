import { TextField } from '@mui/material'

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can use the form data to make API requests or perform other actions
  };

  return (
    <div className='my-2 pb-4 pt-2 border rounded-md mt-10 mx-auto md:w-[40vw]'>
      <form className='flex pt-5 gap-5 flex-col md:w-[40vw] justify-center items-center' onSubmit={handleSubmit}>
        <div className='flex flex-center flex-col justify-center'>
          <h2 className='text-2xl font-bold'>Contact Form</h2>
        </div>
        <div className='flex flex-center flex-col justify-center'>
          <h3 className='ml-6 mr-6 pt-3'>Fill in and send the form, our most suitable expert will get in touch with you as soon as possible.</h3>
        </div>
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
  );
};

export default ContactForm;