import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/aniyadav264@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Message could not be sent");
      }

      form.reset();
      setStatus("Message sent successfully. I will reply soon.");
    } catch {
      setStatus("Message could not be sent. Please email me directly at aniyadav264@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className=" text-cyan-300 min-h-screen flex justify-center items-center px-6 py-16 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-20 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 bottom-10 right-10 animate-pulse"></div>

      <div className="z-10 w-full max-w-6xl grid md:grid-cols-2 gap-12">
        {/* Left Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 shadow-2xl rounded-2xl p-6 md:p-10 space-y-6 text-left hover:translate-y-[-5px] transition-transform duration-300"
        >
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <div>
            <label className="block mb-2 text-cyan-400">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-black border border-cyan-500 text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-cyan-400">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-black border border-cyan-500 text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-cyan-400">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-black border border-cyan-500 text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p className="text-sm text-cyan-200">
              {status}
            </p>
          )}
        </form>

        {/* Right Side - Social Contact Section */}
        <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start w-full">
          <div className="mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Contact Me</h2>
            <div className="h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" style={{width: '120px'}}></div>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-cyan-200 mb-6 sm:mb-8">
            Get in touch with me via social media, email, or phone.
          </p>

          {/* 2-column Grid for Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            <a
              href="https://x.com/theaniketyadav1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400"
            >
              <FaTwitter className="text-3xl text-sky-400" />
              Twitter
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400"
            >
              <FaFacebook className="text-3xl text-blue-500" />
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/aniket-kumar-0ab18a340/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400"
            >
              <FaLinkedin className="text-3xl text-blue-600" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/the.aniket.yadav?igsh=NGF3c2hyd3ZnMTk3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400"
            >
              <FaInstagram className="text-3xl text-pink-500" />
              Instagram
            </a>
            <a
              href="mailto:aniyadav264@gmail.com"
              className="flex items-center gap-3 hover:text-cyan-400"
            >
              <FaEnvelope className="text-3xl text-red-500" />
              aniyadav264@gmail.com
            </a>

            <a
              href="tel:+919798168320"
              className="flex items-center gap-3 hover:text-cyan-400"
            >
              <FaPhone className="text-3xl text-green-500" style={{ transform: 'scaleX(-1)' }} />
              Phone - +91 9798168320
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
