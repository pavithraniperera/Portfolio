import React from "react";
import Profile from "../assets/images/Profile.png";
import Python from "../assets/images/python icon.png";
import Java from "../assets/images/java icon.png";
import JavaScript from "../assets/images/javascript icon.png";
import ReactIcon from "../assets/images/react icon.png";
import {STATS} from '../utils/data'
import StatInfoCard from "../Components/StatInfoCard";

const Hero = () => {
 
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row lg:gap-14 items-center lg:items-start lg:justify-start mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-bold text-black">
            Hi, 👋 I'm Pavithrani Perera
          </h3>
          <h1
            className="w-full lg:w-[530px] text-4xl lg:text-5xl  font-bold leadin-[50px] lg:leading-[60px] 
            mt-3 sm:bg-gradient-to-r from-[#f4a44f] to-[#ac573f] bg-clip-text text-transparent bg-[#f4a44f] "
          >
            Engineering the Future, One Line of Code at a Time
          </h1>

          <p className="w-full lg:w-[700px] text-md mt-4">
            Passionate Full Stack Developer with expertise in React, TypeScript,
            Node.js, Express.js, MySQL, Java,Python... Honestly, the list keeps
            growing—I’d add more, but there’s only so much space here 😄! I
            enjoy crafting dynamic, responsive, and high-performing applications
            with a focus on security and scalability.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md-gap-8 mt-6">
            <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
              View My Work
            </button>
            <button className="flex-1 md:flex-none action-btn btn-scale-anim">
              Download Resume
            </button>
          </div>
        </div>
        <div className="w-[400px] md:w-[370px] h-[350px] md:h-[420px] md:bg-orange-100/50 rounded-3xl relative  order-1 lg:order-2 lg:ml-auto lg:justify-between  ">
          <img src={Profile} alt="Profile Pic" className="profile-pic" />
          <img
            src={ReactIcon}
            alt="Icon 1"
            className="icon-img left-[-30px] bottom-20 rotate-[1.75deg] "
          />
          <img
            src={JavaScript}
            alt="Icon 2"
            className="icon-img left-[-6px] md:left-[-6px] -bottom-8 rotate-[2.75deg] "
          />
          <img
            src={Java}
            alt="Icon 3"
            className="icon-img left-[90px] md:left-[120px] -bottom-13 rotate-[3.75deg] "
          />
          <img
            src={Python}
            alt="Icon 4"
            className="icon-img left-[238px] md:left-[225px] bottom-[-49px] md:bottom-[-49px] rotate-[4.75deg] "
          />
        </div>
      </div>

      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
      {STATS.map((item) => (
             <StatInfoCard key={item.id} count={item.count} label={item.label}/>
          
          ))}
        
      </div>
    </section>
  );
};
export default Hero;
