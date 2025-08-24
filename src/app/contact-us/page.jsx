"use client";

import Navbar from "@/components/myComponent/navbar";
import Footer from "@/components/myComponent/footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full flex flex-col items-center">
        {/* Header */}
        <section
          className="w-full text-center py-16 bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: "url('/contact.png')" }}
        >
          {/* Dark overlay so text pops */}
          <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>

          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              className="text-4xl font-bold mb-4 text-white drop-shadow-lg"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              className="max-w-2xl mx-auto text-lg text-gray-100 drop-shadow"
            >
              Have questions about our premium fabrics or your order? We're here
              to help — reach out anytime.
            </motion.p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section 
  className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 
             grid grid-cols-1 lg:grid-cols-2 gap-12 
             border border-gray-500 dark:border-gray-500 rounded-2xl mt-10 mb-8"
>
  {/* Left Section: Contact Details */}
  <div className="space-y-8">
    <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
      <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-gray-600">
        Get in Touch
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-base max-w-xl mx-auto lg:mx-0">
        For any query or any question or suggestions please contact us on following details or fill the following form our team will contact you as soon as possible.
      </p>
    </div>

    {/* Branch Info */}
    <div className="mt-10 space-y-6 text-center lg:text-left">
      <div>
        <h3 className="text-lg font-semibold text-red-600">Main Office :</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Shershah, Karachi 74000, Pakistan.
          <br />
          Call: 0322-3422489
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-red-600">Lea Market Branch :</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Shop no, Leamarket, Karachi 74000, Pakistan.
          <br />
          Call: 0322-3422489
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-red-600">Chakiwara Branch :</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Shop no, Chakiwara, Karachi 74000, Pakistan.
          <br />
          Call: 0322-3802665
        </p>
      </div>
    </div>

    {/* Optional Map Embed */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1809.9021453241878!2d67.000648!3d24.870533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f05e157a7c9%3A0x67b4922c12b1a237!2sGHANCHIS.PK!5e0!3m2!1sen!2sus!4v1755984621732!5m2!1sen!2sus"
      width="100%"
      height="250"
      allowFullScreen
      loading="lazy"
      className="rounded-lg border border-gray-300 dark:border-gray-700"
    ></iframe>
  </div>

  {/* Right Section: Contact Form */}
<div className="p-8 rounded-2xl shadow-xl dark:bg-[#262626] bg-[#E4E4E7]">
    <h2 className="text-2xl font-semibold mb-6">
      Send Us a Message
    </h2>
    <form className="space-y-6">
      <div>
        <label className="block mb-2 text-sm font-medium">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>

      <div>
        <label className="block mb-2  text-sm font-medium">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>

      <div>
        <label className="block mb-2 k text-sm font-medium">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Write your message..."
          className="w-full p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 font-medium transition-all"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
}
