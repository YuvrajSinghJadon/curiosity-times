import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md"; // Import Ionicons from react-icons/md
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.svg";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-5 bg-blue-500 shadow md:flex md:items-center md:justify-between relative text-white">
      <div className="flex justify-between items-center">
        <Link to="/">
          <span className="text-2xl font-[Poppins] cursor-pointer">
            <img className="h-10 inline md:mr-2" src={logo} alt="Logo" />
            CuriousTimes
          </span>
        </Link>
        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </span>
      </div>

      <ul
        className={`md:flex md:items-center md:static absolute bg-blue-500 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 md:opacity-100 ${
          isMenuOpen ? "top-[80px]" : "top-[-400px]"
        } transition-all ease-in-out duration-500`}
      >
        <li className="mx-4 my-6 md:my-0">
          <Link to="/" className="text-xl hover:text-cyan-500 duration-500">
            HOME
          </Link>
        </li>

        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/about"
            className="text-xl hover:text-cyan-500 duration-500"
          >
            ABOUT US
          </Link>
        </li>
        <span className=" hidden md:block">
          <SearchBar />
        </span>
      </ul>
    </nav>
  );
};

export default Navbar;
