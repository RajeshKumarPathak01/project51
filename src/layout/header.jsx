import { NavLink } from "react-router";
import { Links } from "react-router";
import logoIcon from "/src/assets/logoIcon.png";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (isOpen) => setIsOpen(!isOpen);

  return (
    <div className="container flex flex-wrap items-center justify-between mx-0 sm:mx-3  bg-white rounded-md sticky sm:top-0  top-0 border-b-[2px]">
      <div className=" -mr-6 text-xl flex    ">
        <img className=" h-[90px] w-[90px] " src={logoIcon} alt="Logo" />{" "}
        <span className=" py-8 text-2xl font-bold "> Movie world</span>
      </div>
 
      <div
        className={` sm:flex sm:items-center sm:mx-0  py-1 transition-all duration-300 ease-in-outflex flex-wrap bg-blue-900 text-white rounded-lg sm:-mr-[10%] -mr-[38%] 
         
        }`}
      >
        <nav>
          <ul className="flex flex-row   gap-3 flex-wrap mx-0 sm:-mx-1 sm:gap-0  text-lg font-medium py-2 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            |
            <li>
              <NavLink to="/movie">Search Movies</NavLink>
            </li>
            |
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            |
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <hr className="mx-2 sm:mx-5 sm:my-5 sm:text-blue-800" />
    </div>
  );
}
export default Header;
