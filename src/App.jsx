import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { scroller } from "react-scroll";
import logo from "./assets/images/logo/logo2.png";
import { Links } from "./Constants";
import { CgMenuLeft } from "react-icons/cg";
import { menuLinks } from "./Constants";
import OpenModalConstant from "./Components/OpenModalConstant"
import MainHeader from "./Components/MainHeader";
import "./assets/Css/fonts.css"
import AboutSection from "./Components/AboutSection";
import "@fortawesome/fontawesome-free/css/all.css";
import QualityHeader from "./Components/QualityHeader";
import WorkExperience from "./Components/WorkExperience";
import Projects from "./Components/Projects";
import { ToastContainer } from "react-toastify";
import Education from "./Components/Education";

const AlterMessage = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (url) => {
    window.open(url);
  };
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleCloseMenu = (id) => {
    setMenuOpen(false);
    scroller.scrollTo(id, {
      duration: 1000,
      delay: 1,
      smooth: "easeInOutQuart",
    });
  };

  const navbarClass = isScrolled ? "bg-white md:px-3 px-4 shadow-lg  " : " md:px-3 px-4 bg-transparent";
  return (

    <div className=" scroll-smooth" id="#main">
      <div className={`w-full ${navbarClass} fixed top-0 pt-3 left-0 z-50`}>
        <div className="container w-full  mx-auto">
          <div className="flex items-center py-3 pb-4">
            {/* Left Side of Navbar */}
            <div className="flex w-full">
              <img src={logo} alt="logo" className="w-12 h-10" />
              <div className="ml-2 md:ml-4 w-[100%] ">
                <p className="text-xs  xs:w-[200px]  md:text-[20px] font-bold text-[#00004B] font-poppins mb-[3px] tracking-[1px]">
                  Akansh Goel
                </p>
                <p className="text-[#00004B] md:text-[#00004B] text-[10px] tracking-[5.5px] font-serif">
                  Portfolio
                </p>
              </div>
            </div>

            {/* Right Side of Navbar */}
            <div className="justify-end flex-1 flex items-right">
              <ul className="flex text-[#00004B] justify-end mr-2">
                {Links.map((nav, index) => (
                  <li
                    key={index}
                    className="mr-5"
                    onClick={() => handleClick(nav.url)}
                  >
                    <div className="text-[20px] cursor-pointer">
                      {/* Remove md:block hidden, so the icons are visible on all screen sizes */}
                      <i className={nav.icon}></i>
                    </div>
                  </li>
                ))}
              </ul>
            </div>


            {/* Menu Toggle Button */}
            <div
              className={`menu cursor-pointer flex justify-end right-0 text-2xl bg-[#000000] rounded-[60%] ${isMenuOpen ? "menu-open" : ""
                }`}
              onClick={handleMenuToggle}
            >
              <span className="menu-toggle text-white flex px-3 right-0 py-3 items-center">
                <CgMenuLeft />
              </span>
            </div>
            {isMenuOpen && (
              <div className="fixed left-0 top-0 z-50 h-full w-[90%] md:w-[38%] opacity-100  bg-[#000000f3] text-white">
                <div className="text-black bg-white logo-temp">
                  <button
                    onClick={handleCloseMenu}
                    className="absolute text-4xl cursor-pointer top-7 right-4"
                  >
                    &times;
                  </button>
                  <div className="flex items-center py-5 pl-4">
                    <img src={logo} alt="logo" className="w-12 h-10 mr-2 " />
                    <div>
                      <p className="text-xs md:text-[20px] font-bold text-[#00004B] font-poppins tracking-[1px]">Akansh Goel</p>
                      <p className=" md:text-[13px] text-[10px]  tracking-[5px] font-serif">
                        Portfolio
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="py-3 text-left text-white">
                  {menuLinks.map((nav, index) => (
                    <li
                      key={index}
                      className="p-[2rem] py-4 font-semibold   transition-all cursor-pointer"
                      onClick={() => handleCloseMenu(nav.toggle)}
                    >
                      <a href={nav.toggle}>
                        <div className="h-[2rem] ">
                          <div className="text-[16px] CerHeadlines py-4 px-6 hover:text-[#000000] rounded-sm hover:bg-[#ffff] transition-all cursor-pointer">{nav.title}</div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="App scroll-smooth overflow-hidden absolute w-full bg-gradient-to-tr from-purple-200 via-purple-100 via-pink-100 to-[#fffb0086]">

        <div className="relative hero-section mt-[12rem] m-[2.5rem]">
          <MainHeader />
        </div>
        <div className="bg-[#000]  intern text-[#fff] mt-[0rem]   w-full">
          <QualityHeader />
        </div>
        <div className="w-full bg-white" id="AboutSection">
          <AboutSection />
        </div>
        <div className="w-full bg-[rgb(255,255,255)] " id="Education">
          <Education />
        </div>

        <div className="z-0 BannerFlexed">
          <h1 className=" text-[10rem]  font-extrabold absolute text-[#00004823] pl-[2rem] xl:pl-[22rem] md:pl-[8rem] hidden md:block -mt-[5rem] scrolling-text">Professional Journey</h1>
        </div>
        <div className="w-full bg-[rgb(255,255,255)] " id="SkillsSection">
          <WorkExperience />
        </div>
        <div className="w-full bg-[rgb(255,255,255)] " id="ProjectsSection">
          <Projects />
        </div>



        <div>
          <ToastContainer />
          <OpenModalConstant />
        </div>
      </div>
    </div>
  );
};

export default AlterMessage;
