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
        setFormData({
          isim: "",
          email: "",
          telefon: "",
          company: "",
          mesaj: "",
        });
      } else {
        // Handle error
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="pb-4 pt-2 border bg-white rounded-md mt-6 mx-auto md:w-[40vw]">
      <form
        className="flex pt-5 gap-5 flex-col md:w-[40vw] justify-center items-center"
        onSubmit={handleSubmit} // Attach the submit handler
      >
        <div className="flex flex-center flex-col justify-center">
          <h2 className="text-2xl font-bold">Contact Form</h2>
        </div>
        <div className="flex flex-center flex-col justify-center">
          <h3 className="ml-6 mr-6 pt-3">
            Fill in and send the form, our most suitable expert will get in
            touch with you as soon as possible.
          </h3>
        </div>
        <TextField
          required
          className="w-[90%]"
          id="InputName"
          label="Your name"
          name="isim"
          variant="outlined"
          value={formData.isim}
          onChange={handleChange}
        />
        <TextField
          required
          className="w-[90%]"
          id="InputMail"
          label="Your e-mail address"
          name="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          className="w-[90%]"
          id="InputPhone"
          label="Your phone number"
          name="telefon"
          variant="outlined"
          value={formData.telefon}
          onChange={handleChange}
        />
        <TextField
          className="w-[90%]"
          id="InputCompany"
          label="The name of your company"
          name="company"
          variant="outlined"
          value={formData.company}
          onChange={handleChange}
        />
        <TextField
          required
          className="w-[90%]"
          multiline
          id="InputMessage"
          label="Your message"
          name="mesaj"
          variant="outlined"
          value={formData.mesaj}
          onChange={handleChange}
        />
        <button
          className="w-[25%] py-2 px-2 text-white text-sm ism:text-md mx-3 bg-gray-700 hover:bg-white hover:text-black border border-black font-bold py-3 px-10 lg:px-8 transitions-colors duration-200 mb-6 lg:mb-0"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
