import React from "react";
import { IoMdMail, IoMdPhonePortrait } from "react-icons/io";
import { ABOUT_ME } from "../utils/data";
import ContactInfoCard from "../Components/ContactInfoCard";
import { MdOutlineWeb } from "react-icons/md";

const ContactMe = () => {
  return (
    <section id="contact">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Contact Me</h4>
          <p className="text-md text-center mt-4 leading-6">
            Need a bug fixer, API wrangler, or just someone to rant about
            semicolons with? Hit me up! I promise I only write clean code (most
            of the time). Let’s connect and debug life together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
          <div>
            <ContactInfoCard
              icon={<IoMdMail size={24} />}
              text={ABOUT_ME.email}
            />
            <ContactInfoCard
              icon={<IoMdPhonePortrait size={24} />}
              text={ABOUT_ME.phone}
            />
            <ContactInfoCard
              icon={<MdOutlineWeb size={24} />}
              text={ABOUT_ME.website}
            />
          </div>
          <h5 className="md:hidden text-[#f4a44f] text-lg font-meadium mt-4 pb-5">
            Contact Form
          </h5>
          <form className="flex flex-col">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              id=""
              className="input-box"
              autoComplete="off"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              id=""
              className="input-box"
              autoComplete="off"
            />
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              id=""
              rows={3}
              className="input-box"
              autoComplete="off"
            />
            <button className="action-btn btn-scale-anim">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
