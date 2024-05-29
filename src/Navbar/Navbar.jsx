import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const smoothScroll = (id) => {
    // Scroll to the top of the page first
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Then scroll to the target section after a short delay (e.g., 500 milliseconds)
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        setIsMobileMenuOpen(false); // Close the mobile menu after clicking a link
      }
    }, 500);
  };

  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="mobile-header hidden sm-max:block sm-max:flex md-small:block md-small:flex">
          <a href="/">
            <div className="">
              <h1 className="react-heading text-[30px] font-[600] font-playfair text-transparent -webkit-text-stroke-[0.5px] text-white">
                SHANU
              </h1>
            </div>
          </a>
          {isMobileMenuOpen ? (
            <MdOutlineClose size={30} onClick={toggleMobileMenu} />
          ) : (
            <RxHamburgerMenu
              size={35}
              id="hamburger-icon"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
        <div className="">
          {/* <img  className="h-[50px] lg-small:h-[40px] md-max:h-[40px] md-small:h-[35px] sm-max:h-[35px] " src={carebi} alt=""/> */}
          <h1 className="react-heading text-[35px] font-[600] font-playfair text-transparent -webkit-text-stroke-[0.5px] text-white">
            SHANU
          </h1>
        </div>
        <div
          className={`nav-links-div ${isMobileMenuOpen ? "mobile-menu" : ""}`}
        >
          <ul className="nav-links">
            <li
              onClick={() => {
                smoothScroll("home");
                setIsMobileMenuOpen(false);
              }}
            >
              <a href="#home">
                <h6 className="single">HOME</h6>
              </a>
            </li>
            <li
              onClick={() => {
                smoothScroll("service");
                setIsMobileMenuOpen(false);
              }}
            >
              <a href="#service">
                <h6>EDUCATION</h6>
              </a>
            </li>
            <li
              onClick={() => {
                smoothScroll("project");
                setIsMobileMenuOpen(false);
              }}
            >
              <a href="#experiance">
                <h6>EXPERIANCE</h6>
              </a>
            </li>
            <li
              onClick={() => {
                smoothScroll("contact");
                setIsMobileMenuOpen(false);
              }}
            >
              <a href="#projects">
                <h6>PROJECTS</h6>
              </a>
            </li>
            <li
              onClick={() => {
                smoothScroll("contact");
                setIsMobileMenuOpen(false);
              }}
            >
              <a href="#contact">
                <h6>CONTACT</h6>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-[30px]">
          <a
            href="#contact"
            onClick={() => {
              smoothScroll("contact");
              setIsMobileMenuOpen(false);
            }}
          >
            
           
          </a>
          <a href="" download="resume.pdf">
          <button className="text-[white] tracking-[2px] border-[1px] border-[#a8a8a821] px-[30px] py-[14px] rounded-[50px] text-[14px] font-[500] hover:border-white transition-all duration-300 ease-in-out sm-max:px-[15px] sm-max:text-[10px] sm-max:hidden">
              RESUME
            </button>
            </a>
          
        </div>
      </nav>
    </div>
  );
};

export default Header;
