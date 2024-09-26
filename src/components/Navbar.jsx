import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import logo from "../assets/logo1.png";
import { menu, close } from "../assets";

// Utility function remains the same
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState("transparent"); // Initial background color
  const navigate = useNavigate();

  const handleLinkClick = (id, title) => {
    setActive(title);
    scrollToSection(id);
    navigate(`/#${id}`, { replace: true });
  };

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor("#050816"); // Set background color when scrolling down
      } else {
        setBgColor("transparent"); // Reset to transparent at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`} style={{ backgroundColor: bgColor }}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center">
            Bharathi Kishna 
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} 
              onClick={() => handleLinkClick(link.id, link.title)}
            >
              {link.title}
            </li>
          ))}
        </ul>
        
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className="w-[28px] h-[28px] object-contain cursor-pointer" 
            onClick={() => setToggle(!toggle)} 
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li 
                  key={link.id} 
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} 
                  onClick={() => {
                    setToggle(!toggle);
                    handleLinkClick(link.id, link.title);
                  }}
                >
                  {link.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;