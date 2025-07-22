
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

const Home = () => {
  return (
    <div>
      <section className="section home w-[100vw] h-[100vh] ">
        <div className="home-info ">
          <h3>Hello I'm</h3>
          <h1>Arshil</h1>
          <h3>Full Stack Developer</h3>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet
            tempore minus pariatur blanditiis deleniti voluptate magnam, maxime
            neque totam ipsum.
          </p>

          <div className="btn-sci  ">
            <a href="#" className="btn  ">
              Download CV{" "}
            </a>
            <div className="sci ">
              <a href="#">
                <FaGithub className="icon" />
                <span className="tooltip absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
                  Github
                </span>    
              </a>
              <a href="#">
                <FaLinkedinIn className="icon" />
                <span className="tooltip absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
                  Linkedin
                </span>
              </a>
              <a href="#">
                <FaTwitter className="icon" />
                <span className="tooltip absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
                  Twitter
                </span>
              </a>
              <a href="#">
                <FaFacebook className="icon" />
                <span className="tooltip absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
                  Facebook
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="img-wrapper ">
          <div className="img-box home-img relative w-[28vw] h-[28vw] rounded-[50%] flex justify-center">
            <img src="image\Screenshot 2025-07-13 150303.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
