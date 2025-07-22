
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

const Portfolio = () => {

      const [activePortfolio, setActivePortfolio] = useState("MyWork");
  return (
    <div>
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
    </div>
  )
}

export default Portfolio