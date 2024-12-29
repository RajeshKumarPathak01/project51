import { NavLink } from "react-router";
import { Links } from "react-router";
import logoIcon from "/src/assets/logoIcon.png";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (isOpen) => setIsOpen(!isOpen);

  return (
    <div className="container flex flex-wrap items-center justify-between mx-0 sm:mx-0  bg-white rounded-md sticky sm:top-0  top-0 border-b-[2px]">
      <div className=" -mr-6 text-xl flex    ">
        <img className=" h-[90px] w-[90px] " src={logoIcon} alt="Logo" />{" "}
        <span className=" py-8 text-2xl font-bold "> Movie world</span>
      </div>
 
      <div
        className={` sm:flex sm:items-center sm:mx-4  py-1   flex flex-wrap bg-blue-900 text-white rounded-lg sm:-mr-[30%] -mr-[38%] 
         
        }`}
      >
        <nav>
          <ul className="flex flex-row   flex-wrap mx-0 sm:-ml-0 sm:mx-0 sm:gap-0  text-md font-medium py-2 ">
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            |
            <li>
              <NavLink to="movie">Search Movies</NavLink>
            </li>
            |
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            |
            <li>
              <NavLink to="contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <hr className="mx-2 sm:mx-5 sm:my-5 sm:text-blue-800" />
    </div>
  );
}
export default Header;
