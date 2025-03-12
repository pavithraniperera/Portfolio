import React, { useEffect, useState } from "react";
import { MENU_LINKS } from "../utils/data";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    const handleResize =()=>{
      if (window.innerWidth>=768){
        setIsOpen(true)
      }else{
        setIsOpen(false)
      }
    };
    handleResize()
    // listen to  resize event
    window.addEventListener("resize",handleResize)
    return()=>{
      window.removeEventListener("resize",handleResize)
    }

  },[])
  return (
    <nav className="container mx-auto sticky  top-5 z-10">
      <div className="flex item-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-5 md:p-0">
        {/* Logo */}
        <img className="h-6 md:h-10 ml-1 mb-1" src={Logo} alt="Logo" />

        {/* Hamberger icon */}
        <button
          className="block md:hidden text-[#333] mr-6 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Menu */}
        <ul className={`${isOpen ? "flex" : "hidden"}  menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.to}
                smooth
                spy
                offset={item.offset}
                className="menu-item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <button
          className="hidden md:block h-12 text-[15px] font-medium text-white bg-gradient-to-r from-[#f4a44f] to-[#ac573f]
        rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          {" "}
          Hire Me
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
