
import React, { useState } from "react";

import { BiDetail } from "react-icons/bi";
import { DiDjango, DiPostgresql } from "react-icons/di";
import {
  FaAngular,
  FaBootstrap,
  FaCode,
  FaFacebook,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinkedinIn,
  FaNode,
  FaPhp,
  FaPython,
  FaReact,
  FaRegEnvelope,
  FaSignal,
  FaSketch,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { HiMiniPaintBrush } from "react-icons/hi2";
import {
  IoArrowBackSharp,
  IoBriefcaseOutline,
  IoColorPaletteSharp,
  IoHome,
  IoLogoCss3,
  IoLogoJavascript,
} from "react-icons/io5";
import { MdSlideshow } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const About = () => {
  return (
    <div>
     
      <section className="section about">
        <div className="img-wrapper ">
          <div className="img-box about-img relative w-[28vw] h-[28vw] rounded-[50%] ">
             <img src="image/Screenshot 2025-07-13 150322.png" alt="" />
            
          </div>
        </div>
       
         
        <div className="about-info ">
          <h2 className="title">About Me</h2>
          <h3>Full Stack Developer!</h3>
          <p className="desc">
            Hi, I'm Arshil Gondaliya, a passionate and dedicated Full Stack
            Developer from Ahmedabad, Gujarat, India. I started my coding
            journey in 2023, driven by a strong curiosity for how things work
            behind the scenes on the web and in software development. I'm
            currently pursuing my Bachelor's degree in Computer Engineering, and
            I'm set to graduate in 2027. As a full stack developer, I enjoy
            working on both the front-end and back-end of web applications.
          </p>
          <a href="" className="btn">
            View More
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
