import Logo from "../../assets/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./NavBar.css";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const naviagate = useNavigate();
  const handleNavigate = () => {
    naviagate("/");
  };
  return (
    <header className="lg:bg-transparent bg-[#EBF6E2] relative z-50">
      <nav className=" container mx-auto flex justify-between items-center lg:py-10 py-4 lg:w-full w-[90%]">
        {/* nav bar logo */}
        <div className="cursor-pointer">
          <img className="w-[150px] lg:w-full" src={Logo} alt="Site Logo" onClick={handleNavigate} />
        </div>
        {/* nav items */}
        <ul
          className={`flex lg:flex-row flex-col justify-start lg:justify-center items-center lg:static fixed gap-8 bg-[#EBF6E2] lg:bg-transparent w-[50%] lg:w-auto h-screen lg:h-auto text-[#79C23F] lg:text-[#0B0B0B] ${
            isOpen ? "right-0" : "right-[-100%]"
          } duration-500 z-50 top-[83px] pt-5`}
        >
          <NavLink
            className="hover:text-[#ff444a] text-[18px] font-semibold"
            onClick={() => {setOpen(false)}}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-[#ff444a] text-[18px] font-semibold"
            onClick={() => {setOpen(false)}}
            to="/donation"
          >
            Donation
          </NavLink>
          <NavLink
            className="hover:text-[#ff444a] text-[18px] font-semibold"
            onClick={() => {setOpen(false)}}
            to="/statistics"
          >
            Statistics
          </NavLink>
        </ul>
        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
