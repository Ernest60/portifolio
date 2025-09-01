"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import style, { layout } from "@/app/style";
import { socialMedia } from "@/constants";
import { motion } from "framer-motion";
import location from "../assets/location.png";
import email from "../assets/email.png";
import whatsapp from "../assets/whatsapp.png";

const Contact = () => {
  const inicialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(inicialFormData);

  const [isFetching, setIsFetching] = useState(false);

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsFetching(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ ...formData }),
      });

      setFormData(inicialFormData);
      const { data } = await response.json();
      if (data) toast.success("Email sent successfufly!");
    } catch (error) {
      toast.error("something went wrong");
    }
    setIsFetching(false);
  };

  return (
    <section
      id="contact"
      className={`${style.paddingX} relative bg-gradient-to-r from-[#000b1d] to-[#0a1226] gap-2`}
    >
      <div className="flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col text-center"
        >
          <h1 className={`${style.heading}`}>Contact</h1>
        </motion.div>

        <div className={`${layout.sectionReverse} px-6 gap-10 lg:gap-10`}>
          <div data-aos="fade-right" className="flex flex-col gap-5">
            <h1 className="text-dimWhite font-bold">Let's Connect</h1>

            <p className={`${style.paragraph} max-w-[500px]`}>
              I'm currently aveliable to take on new projects, so my inbox is
              aways open. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="flex gap-2 text-dimWhite">
              <Image src={email} alt="img" className="w-5 h-5" />
              <p className="font-roboto text-[12px]">emandlate4@gmail.com</p>
            </div>

            <div className="flex gap-2 text-dimWhite">
              <Image src={whatsapp} alt="img" className="w-5 h-5" />
              <p className="font-roboto text-[12px]">+258 840 13 5297</p>
            </div>

            <div className="flex gap-2 text-dimWhite text-base">
              <Image src={location} alt="img" className="w-5 h-5" />
              <p className="font-serif text-[12px]">Maputo / Mocambique </p>
            </div>

            {/*SOCIALMEDIA */}
            <div className="flex flex-row items-center px-2">
              {socialMedia.map((social, index) => (
                <Image
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer rounded-sm hover:scale-110 ${
                    index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                />
              ))}
            </div>
          </div>

          <form
            id="form"
            data-aos="fade-up"
            className={`flex flex-col relative gap-5 px-10m lg:min-w-[500px]`}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor=""
                className="text-dimWhite text-[17px] font-paragraph"
              >
                Your Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className=" w-full h-8 px-3 py-2 text-[14px] text-black placeholder-gray-300 bg-white rounded shadow"
              />
            </div>

            <div className="">
              <label
                htmlFor=""
                className="text-dimWhite text-[17px] font-paragraph "
              >
                Enter your email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-8 px-3 py-2 text-black text-[14px] rounded-md placeholder-gray-300 bg-white border-none"
              />
            </div>

            <div className="">
              <label
                htmlFor=""
                className="text-dimWhite text-[17px] font-paragraph"
              >
                Writr your message here
              </label>
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="w-full px-3 py-2 text-black text-[14px] placeholder-gray-300 bg-white border-none rounded-sm shadow"
              ></textarea>
            </div>

            <button
              disabled={isFetching}
              className="h-10 hover:scale-110 animate-pulse relative font-serif px-8 py-3 w-full mr-4  cursor-pointer rounded-full mt-4 bg-gradient-to-r from-blue-700 via-purple-500 to-red-700 text-dimWhite lg:w-fit"
            >
              Submit now
            </button>
          </form>
          <div>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
