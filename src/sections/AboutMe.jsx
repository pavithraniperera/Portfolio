import React from "react";
import ProfilePic from "../assets/images/Profile.png";
import { ABOUT_ME } from "../utils/data";

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-8 py-16">
      <h4 className="block lg:hidden w-[200px] section-title text-center mb-16 mx-auto">
        About Me
      </h4>
      <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
        <div className="flex-1">
          <h4 className="hidden lg:block w-[200px] section-title mx-auto">
            About Me
          </h4>
          <p className="text-md text-justify leading-6 whitspace-pre-line mt-4">
            {ABOUT_ME.content.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>

          <div className="flex gap-4 mt-6">
            {ABOUT_ME.socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group"
              >
                <item.icon
                  className="text-2xl text-[#f4a44f] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 
      group-hover:translate-y-[-2px] group-hover:text-[#F6A64F]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
