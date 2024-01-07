
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle sending the message
  const handleSendMessage = () => {
    // Extract form data
    const { name, email, phoneNumber, message } = formData;

    // Create email subject and body
    const subject = 'New Contact Form Submission';
    const body = `
      Name: ${name}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
    `;

    // Encode subject and body for the mailto link
    const mailtoLink = `mailto:fatemakm09@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default email client with the pre-filled email
    window.location.href = mailtoLink;
  };

  return (
    /* Contact Section Container */
    <div className=" p-8 items-center" id="contact">
       <Helmet>
        <meta charSet="utf-8" />
        <title>DIU|CP Community|Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
      {/* Max width container for content */}
      <div className="max-w-screen-lg mx-auto py-20">
        {/* Contact Title */}
        <h2 className="text-center dark:text-[#292a2a] text-[#dee5e5] opacity-1 items-center relative font-bold mb-4 pt-16 text-6xl lg:text-9xl">
          CONTACT
        </h2>

        {/* Contact Content */}
        <div className="">
          {/* Get in Touch Title */}
          <h2 className="text-center text-blue-600 items-center -mt-16 pb-4 lg:-mt-24 text-3xl lg:text-4xl font-bold relative">
            Get in Touch
            <div className="h-1 w-24 bg-blue-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 "></div>
          </h2>

          {/* Contact Information and Form */}
          <div className="text-center md:flex gap-28 mt-24 px-6">
            {/* Left side with contact details */}
            <div className="mb-8 lg:mb-0 md:text-start">
              <h1 className="text-xl font-semibold text-black">CONTACT DETAILS</h1>
              {/* Contact Address */}
              <p className="text-gray-500 py-2 font-semibold text-lg">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-700" />
                Satarkul, Dhaka
              </p>
              {/* Contact Phone Number */}
              <p className="text-gray-500 py-2 font-semibold text-lg">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-700" />
                +2 0102 7676 999
              </p>
              {/* Contact Email */}
              <p className="text-gray-500 py-2 font-semibold text-lg inline-flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-700" />
                diucp123@gmail.com
              </p>
              {/* Follow Us Section */}
              <p className="font-semibold text-xl mt-4">FOLLOW US</p>
              <div className="flex gap-4 mt-2 lg:mt-5 text-xl mt-[8px] text-gray-400">
                {/* Add your follow icons here */}
              </div>
            </div>

            {/* Right side with contact form */}
            <div className="flex flex-col w-full ">
              {/* Send a Message Title */}
              <h2 className="text-xl font-semibold text-whit text-start mb-4 lg:mb-6">SEND A MESSAGE</h2>
              {/* Contact Form */}
              <div className="w-full">
                <div className=" w-full">
                  {/* Grid layout for form inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {/* Name Input */}
                    <div className="form-control">
                      <label className="label"></label>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="input input-bordered  bg-[#ebf0f0] focus:border-blue-500 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Email Input */}
                    <div className="form-control">
                      <label className="label"></label>
                      <input
                        type="text"
                        placeholder="Email Address"
                        name="email"
                        className="input input-bordered bg-[#ebf0f0] focus:border-blue-500 w-full"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Phone Number Input */}
                  <div className="form-control w-full">
                    <label className="label"></label>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      className="input input-bordered bg-[#ebf0f0] focus:border-blue-500 w-full"
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Message Input */}
                  <div className="form-control ">
                    <label className="label "></label>
                    <textarea
                      placeholder="Your message goes here.........."
                      name="message"
                      rows="4"
                      className="input input-bordered  bg-[#ebf0f0] focus:border-blue-500 w-full h-32 pt-4 "
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                {/* Send Message Button */}
                <div className="text-center">
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-600 text-lg font-semibold mt-4 text-white px-6 py-2 rounded "
                  >
                    Send Message 📨
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
