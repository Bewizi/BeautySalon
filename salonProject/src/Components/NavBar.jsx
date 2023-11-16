import React, { useState } from "react";

// LOGO
import Logo from "../Components/Assests/logo-Frame.png";

// ICONS
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <React.Fragment>
      <header className="max-w-[120rem] px-10 py-5 h-34 mx-0 text-[#fff] text-[1.2rem] flex justify-between items-center ">
        <div>
          <img src={Logo} alt="" className="w-10" />
        </div>
        <nav className=" sm:hidden md:hidden   justify-between ">
          <ul className="flex">
            <li>
              <a href="#" className="px-10">
                Despre
              </a>
            </li>
            <li>
              <a href="#" className="px-10">
                Servicii
              </a>
            </li>
            <li>
              <a href="#" className="px-10">
                Preturi
              </a>
            </li>
            <li>
              <a href="#" className="px-10">
                Contract
              </a>
            </li>
          </ul>
        </nav>
        <div className="sm:hidden md:hidden">
          <a
            href="#"
            className="uppercase border border-[#ECD8BD] rounded-full px-10 py-3 "
          >
            Programmare
          </a>
        </div>

        {/* ICON TOGGLE */}
        <div onClick={handleClick} className="cursor-pointer  lg:hidden xl:hidden">
          {!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        <nav
          className={
            !nav
              ? "fixed left-[40%] top-0 flex items-center flex-col"
              : "fixed top-[-100%] "
          }
        >
          <ul className="flex flex-col py-10  lg:hidden xl:hidden">
            <li className="py-5">
              <a href="#">Despre</a>
            </li>
            <li className="py-5">
              <a href="#" className="">
                Servicii
              </a>
            </li>
            <li className="py-5">
              <a href="#" className="">
                Preturi
              </a>
            </li>
            <li className="py-5">
              <a href="#" className="">
                Contract
              </a>
            </li>
          </ul>
          <div className="lg:hidden xl:hidden">
            <a
              href="#"
              className="uppercase border border-[#ECD8BD] rounded-full px-10 py-3 "
            >
              Programmare
            </a>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default NavBar;
