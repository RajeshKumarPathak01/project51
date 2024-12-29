import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data :", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col mx-[35%] sm:mx-[14%]  my-9 sm:my-4 rounded items-center justify-center min-h-8  text-gray-800">
      <div className="w-full max-w-2xl mx-8  px-2 py-1 bg-white mb-1 shadow-xl rounded-lg">
        <h1 className="text-3xl mt-4 font-bold text-center text-blue-900 mb-6 ">
          Contact Us
        </h1>
        <hr className="mx-5 mt-5 mb-4" />
        <p className="text-lg text-center font-bold mb-6">
          Have questions, feedback, or suggestions? We'd love to hear from you!
        </p>
        <form onSubmit={handleSubmit} className="space-y-2 mx-10 my-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2  rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2  rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full h-16 px-4   rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2  rounded-lg text-lg font-semibold hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
