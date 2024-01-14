import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your custom logic here, such as sending the form data to a server
    console.log(formData);
  };

  return (
    <section>
      {/* Banner */}
      <div className="bg-pool bg-center bg-contact-banner bg-cover h-[560px] relative flex justify-center items-center">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* Title */}
        <h1 className="text-6xl z-10 font-primary text-center text-white">
          Contactez-Nous
        </h1>
      </div>
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-primary mt-12 mb-6">Entrez en Contact</h2>
        <p className="text-lg mb-8">
          Vous avez une question, un commentaire ou une demande spéciale ? Nous
          aimerions avoir de vos nouvelles. Veuillez utiliser le formulaire
          ci-dessous pour entrer en contact avec nous.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xl mb-2">Votre Nom</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 bg-white rounded-md shadow-sm focus:ring focus:ring-accent focus:ring-opacity-50 text-black"
              />
            </div>
            <div>
              <label className="block text-xl mb-2">Votre Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 bg-white rounded-md shadow-sm focus:ring focus:ring-accent focus:ring-opacity-50 text-black"
              />
            </div>
            <div>
              <label className="block text-xl mb-2">Objet</label>
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 bg-white rounded-md shadow-sm focus:ring focus:ring-accent focus:ring-opacity-50 text-black"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-xl mb-2">Votre Message</label>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-2 bg-white rounded-md shadow-sm focus:ring focus:ring-accent focus:ring-opacity-50 text-black"
            />
          </div>
          <button type="submit" className="btn btn-lg btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
