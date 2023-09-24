import Logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./NavBar.css";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="lg:bg-transparent bg-[#EBF6E2]">
      <nav className=" container mx-auto flex justify-between items-center lg:py-10 py-4 lg:w-full w-[90%]">
        {/* nav bar logo */}
        <div>
          <img src={Logo} alt="" />
        </div>
        {/* nav items */}
        <ul
          className={`flex lg:flex-row flex-col justify-start lg:justify-center items-center lg:static fixed gap-8 bg-[#EBF6E2] lg:bg-transparent w-[50%] lg:w-auto h-screen lg:h-auto text-[#79C23F] lg:text-[#0B0B0B] ${
            isOpen ? "right-0" : "right-[-100%]"
          } duration-500 z-50 top-[105px] pt-5`}
        >
          <NavLink className="hover:text-[#ff444a] text-[18px] font-semibold" to="/">
            Home
          </NavLink>
          <NavLink className="hover:text-[#ff444a] text-[18px] font-semibold" to="/donation">
            Donation
          </NavLink>
          <NavLink className="hover:text-[#ff444a] text-[18px] font-semibold" to="/statistics">
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
