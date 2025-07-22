import React from "react";
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

const Resume = () => {

    const [activeTab, setActiveTab] = useState("experience");
  return (
    <div>
      <section className="section resume ">
        <h2 className="title">Resume</h2>
        <div className=" tab-box ">
          <button
            className={` resume-list flex-1 py-2 font-medium ${
              activeTab === "experience"
                ? "border-b-4 border-cyan-400 text-cyan-400"
                : ""
            }`}
            onClick={() => setActiveTab("experience")}
          >
            <h3> Experience</h3>
          </button>
          <button
            className={`flex-1 py-2 font-medium ${
              activeTab === "skills"
                ? "border-b-4 border-cyan-400 text-cyan-400"
                : ""
            }`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`flex-1 py-2 font-medium ${
              activeTab === "education"
                ? "border-b-4 border-cyan-400 text-cyan-400"
                : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        <div className="tab-wrapper">
          {/* 
                      <div className="tab-grid resume-box experience">
                        <div className="tab-item resume-item">
        
                        </div>
                      </div> */}
          {activeTab === "experience" && (
            <div className="tab-grid resume-box experience">
              {[
                ["2022 - Present", "Frontend Developer", "Google"],
                ["2021 - 2022", "Full Stack Developer", "YouTube"],
                ["2020 - 2021", "Backend Developer", "Infosys"],
                ["2019 - 2020", "Frontend Developer Intern", "Amazon"],
                ["2018 - 2019", "UI/UX Developer", "Microsoft"],
                ["2017 - 2018", "Junior Developer", "Chevron"],
              ].map(([year, title, company], i) => (
                <div key={i} className=" tab-item resume-item ">
                  <h4 className="">{year}</h4>
                  <h4 className="">{title}</h4>
                  <h4 className="">
                    {company}
                    <span className="" />
                  </h4>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="tab-grid resume-box skills">
              {[
                [<FaHtml5 />, "HTML5"],
                [<IoLogoCss3 />, "CSS3"],
                [<IoLogoJavascript />, "JavaScript"],
                [<FaReact />, "React.js"],
                [<RiTailwindCssFill />, "Tailwind CSS"],
                [<FaBootstrap />, "Bootstrap"],
                [<FaAngular />, "Angular"],
                [<FaNode />, "Node.js"],
                [<FaJava />, "Java"],
                [<FaPhp />, "PHP"],
                [<FaPython />, "Python"],
                [<DiDjango />, "Django"],
                [<SiMongodb />, "MongoDB"],
                [<DiPostgresql />, "PostgreSQL"],
                [<FaSketch />, "Sketch"],
                [<FaFigma />, "Figma"],
              ].map(([icon, name], idx) => (
                <div key={idx} className="tab-item resume-item ">
                  <span>{icon}</span>

                  <p className="text-white text-sm">{name}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="tab-grid resume-box education">
              {[
                ["2024", "Programming Course", "Online Course"],
                [
                  "2022 - 2023",
                  "Web Development Bootcamp",
                  "Online Course Platform",
                ],
                ["2020", "Certified Web Development", "Online Course"],
                [
                  "2017 - 2021",
                  "Computer Engineering",
                  "Gujrat Technological University",
                ],
                ["2016 - 2017", "12th - sci", "Shree Narayana Guru vidhalaya"],
                [
                  "2021 - 2023",
                  "Master Of Computer Engineering",
                  "Gujrat Technological University",
                ],
              ].map(([year, course, type], idx) => (
                <div key={idx} className="tab-item resume-item ">
                  <h4>{year}</h4>
                  <h4>{course}</h4>
                  <h4>{type}</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Perferendis ea debitis facere rem.
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resume;
