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

const App = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [activePortfolio, setActivePortfolio] = useState("MyWork");

  return (
    <div className="bg-red-900 w-[100vw] h-[100vh]">
      {/* navbar */}

      <nav className="nav fixed bottom-[2rem] left-[50%] w-[40rem] rounded-[5rem] z-[100] ">
        <ul className="nav-list flex justify-evenly">
          <li className="relative flex text-[3rem] cursor-pointer active">
            <IoHome />
            <span className="tooltip absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
              Home
            </span>
          </li>
          <li className="relative flex text-[3rem] cursor-pointer">
            <FaUser />
            <span className="tooltip  absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
              About
            </span>
          </li>
          <li className="relative flex text-[3rem] cursor-pointer">
            <BiDetail />
            <span className="tooltip  absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
              Resume
            </span>
          </li>
          <li className="relative flex text-[3rem] cursor-pointer">
            <IoBriefcaseOutline />
            <span className="tooltip  absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
              Portfolio
            </span>
          </li>
          <li className="relative flex text-[3rem] cursor-pointer">
            <FaRegEnvelope />
            <span className="tooltip  absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
              Contact
            </span>
          </li>
        </ul>
      </nav>

      <div className="container  ">
        <div className="box">
          {/* Home section  */}
          <section className="section home w-[100vw] h-[100vh] ">
            <div className="home-info ">
              <h3>Hello I'm</h3>
              <h1>Arshil</h1>
              <h3>Full Stack Developer</h3>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                amet tempore minus pariatur blanditiis deleniti voluptate
                magnam, maxime neque totam ipsum.
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

          {/* about section  */}

          <section className="section about">
            <div className="img-wrapper ">
              <div className="img-box about-img relative w-[28vw] h-[28vw] rounded-[50%] ">
                <img src="image\Screenshot 2025-07-13 150322.png" alt="" />
              </div>
            </div>

            <div className="about-info ">
              <h2 className="title">About Me</h2>
              <h3>Full Stack Developer!</h3>
              <p className="desc">
                Hi, I'm Arshil Gondaliya, a passionate and dedicated Full Stack
                Developer from Ahmedabad, Gujarat, India. I started my coding
                journey in 2023, driven by a strong curiosity for how things
                work behind the scenes on the web and in software development.
                I'm currently pursuing my Bachelor's degree in Computer
                Engineering, and I'm set to graduate in 2027. As a full stack
                developer, I enjoy working on both the front-end and back-end of
                web applications.
              </p>
              <a href="" className="btn">
                View More
              </a>
            </div>
          </section>

          {/* Resume section  */}

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
                    [
                      "2016 - 2017",
                      "12th - sci",
                      "Shree Narayana Guru vidhalaya",
                    ],
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Perferendis ea debitis facere rem.
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Portfolio Section  */}

          <section className="section portfolio bg-white">
            <h2 className="title">Portfolio</h2>
            <div className="tab-box">
              <div className="tab-list portfolio-list">
                <button
                  className={`  flex-1 py-2 font-medium ${
                    activePortfolio === "MyWork"
                      ? "border-b-4 border-cyan-400  bg-cyan-400 text-black h-[100%] rounded-[5px]"
                      : ""
                  }`}
                  onClick={() => setActivePortfolio("MyWork")}
                >
                  <h3>My Work</h3>
                </button>
              </div>
              <div className="tab-list portfolio-list">
                <button
                  className={`  flex-1 py-2 font-medium ${
                    activePortfolio === "MyService"
                      ? "border-b-4 border-cyan-400  bg-cyan-400 text-black h-[100%] rounded-[5px]"
                      : ""
                  }`}
                  onClick={() => setActivePortfolio("MyService")}
                >
                  <h3>My Service</h3>
                </button>
              </div>
            </div>
            <div className="tab-wrapper">
              {/* <div className="tab-grid portfolio-box work">
                <div className="tab-item portfolio-item">
                  <p>Work Test</p>
                </div>
              </div> */}
              {activePortfolio === "MyWork" && (
                <div className="tab-grid portfolio-box work">
                  {[
                    [
                      "image",
                      "cryptoWebsite.png",
                      "Frontend Project",
                      "HTML5",
                      "https://crypto-final-website.vercel.app/",
                      "https://github.com/arshil171/crypto-final-website",
                    ],
                    [
                      "image",
                      "E-comerceWebsite.png",
                      "Frontend Project",
                      "HTML5 , CSS3 , JavaScript",
                      "https://e-commerce-web-nu-swart.vercel.app/",
                      "https://github.com/arshil171/E-commerce-web",
                    ],
                    [
                      "image",
                      "foodWebsite.png",
                      "Frontend Project",
                      "HTML5 , CSS3 , ",
                      "https://food-2-nine.vercel.app/",
                      "https://github.com/arshil171/food-2",
                    ],
                    [
                      "image",
                      "LoginPage.png",
                      "Frontend Routing Project",
                      " React.js ",
                      "https://react-project-3-sigma.vercel.app/",
                      "https://github.com/arshil171/React-project-3.",
                    ],
                  ].map(([img, img1, project, lang, priview, github], idx) => (
                    <div key={idx} className="tab-item portfolio-item ">
                      <div className="work-img ">
                        <img src={img + "/" + img1} alt="" />
                      </div>
                      <div className="work-info">
                        <h4 className="head">{project}</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque, quis ea.
                        </p>
                        <div className="tech-used">
                          <p>{lang}</p>
                        </div>
                        <div className="portfolio-icon work-icon">
                          <a href={priview}>
                            <span className="icon1 inline">
                              <IoArrowBackSharp />
                            </span>
                            {/* <span className='tooltip inline'>Priview</span> */}
                          </a>
                          <a href={github}>
                            <span>
                              <FaGithub />
                            </span>
                            {/* <span className='tooltip'>Github Repository</span>  */}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* <div className="tab-grid portfolio-box Service">
                <div className="tab-item portfolio-item">
                  <p>Service Test</p>
                </div>
              </div> */}
              {activePortfolio === "MyService" && (
                <div className="tab-grid portfolio-box service">
                  {[
                    [<FaCode />, "Web Development"],
                    [<IoColorPaletteSharp />, "Graphic Designing"],
                    [<HiMiniPaintBrush />, "UI/UX Design"],
                    [<FaSignal />, "SEO"],
                    [<MdSlideshow />, "Vedio Editing"],
                  ].map(([icon, type], idx) => (
                    <div key={idx} className="tab-item portfolio-item ">
                      <div className="myService-icon">
                        <i className="icon5">{icon}</i>
                        <a href="#" className="icon8">
                          <span className="icon4">
                            <IoArrowBackSharp />
                          </span>
                        </a>
                        <h4>{type}</h4>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Similique beatae quasi, eius quis commodi et
                          neque alias eum nulla labore eos.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Contact Section  */}

          <section className="section contact">
            <h2 className="title">Contact</h2>
            <div className="contact-wrapper">
              <form action="" className="contact-form">
                <h3>Let's Work Together </h3>
                <div className="field-box">
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Email Address" required />
                  <input type="text" placeholder="Phone Number" required />
                  <input type="text" placeholder="Email Subject" required />

                  <textarea name="" id="" placeholder="Your Message" required></textarea>


                </div>
                <div className="contact-btn">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
