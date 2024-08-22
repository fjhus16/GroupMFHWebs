import { useState } from "react";
import { TextField } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    isim: "",
    email: "",
    telefon: "",
    company: "",
    mesaj: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch("/api/sendform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message, reset form, etc.)
        console.log("Form başarıyla gönderildi");
        // Optionally reset the form
        setFormData({
          isim: "",
          email: "",
          telefon: "",
          company: "",
          mesaj: "",
        });
      } else {
        // Handle error
        console.error("Form gönderiminde hata oluştu");
      }
    } catch (error) {
      console.error("Ağ hatası:", error);
    }
  };

  return (
    <div className="pb-4 pt-2 border bg-white rounded-md mt-6 mx-auto md:w-[40vw]">
      <form
        className="flex pt-5 gap-5 flex-col md:w-[40vw] justify-center items-center"
        onSubmit={handleSubmit} // Attach the submit handler
      >
        <div className="flex flex-center flex-col justify-center">
          <h2 className="text-2xl font-bold">İletişim Formu</h2>
        </div>
        <div className="flex flex-center flex-col justify-center">
          <h3 className="ml-6 mr-6 pt-3">
            Formu doldurup gönderin, en kısa zamanda isteğinize en uyumlu
            uzmanımız sizinle iletişime geçecek.
          </h3>
        </div>

        <TextField
          required
          className="w-[90%]"
          id="IsimGiris"
          label="İsminiz"
          name="isim"
          variant="outlined"
          value={formData.isim}
          onChange={handleChange}
        />
        <TextField
          required
          className="w-[90%]"
          id="EmailGiris"
          label="E-posta adresiniz"
          name="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          className="w-[90%]"
          id="TelfeonGiris"
          label="Telefon numaranız"
          name="telefon"
          variant="outlined"
          value={formData.telefon}
          onChange={handleChange}
        />
        <TextField
          className="w-[90%]"
          id="SirketGiris"
          label="Şirketinizin adı"
          name="company"
          variant="outlined"
          value={formData.company}
          onChange={handleChange}
        />
        <TextField
          required
          className="w-[90%]"
          multiline
          id="MesajGiris"
          label="Mesajınız"
          name="mesaj"
          variant="outlined"
          value={formData.mesaj}
          onChange={handleChange}
        />
        <input type="text" name="_honey" className="hidden" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <button
          className="w-[25%] py-2 px-2 text-white text-sm ism:text-md mx-3 bg-gray-700 hover:bg-white hover:text-black border border-black font-bold py-3 px-10 lg:px-8 transitions-colors duration-200 mb-6 lg:mb-0"
          type="submit"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
