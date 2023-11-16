import React from "react";

// IMAGES
import Logo from "../Components/Assests/logo-Frame.png";

// ICONS
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
    <React.Fragment>
      <section className="max-w-[100rem] mx-auto md:px-10 lg:px-10 xl:px-10 ">
        <div className="grid sm:grid-cols-1 md:grid-cols-3  lg:flex xl:flex xl:gap-0  ">
          <div className="sm:mb-10 sm:px-5">
            <img src={Logo} alt="" className="mb-5 " />
            <h4 className="text-[#fff] footer-heading  lg:w-[15rem] xl:w-[30rem]">Beauty & More</h4>
            <p className="text-[#9e9e9e] mb-10">Investește în pielea ta!</p>
            <div className="flex gap-5 ">
              
                <TiSocialFacebook size={30} className="bg-[#fff] rounded-full" />
                <IoLogoInstagram size={30} className="bg-[#fff] rounded-full"/>
              
            </div>
          </div>
          <div className="flex sm:grid sm:grid-cols-2  sm:ml-1 sm:gap-16 sm:px-5 md:grid md:grid-cols-2 md:gap-10 lg:gap-24 lg:ml-24 xl:gap-24">
            <ul className="text-[#9e9e9e]">
              <p className="text-[#fff] mb-5">Pagini</p>
              <li>Despre</li>
              <li>Servicii</li>
              <li>Prețuri</li>
              <li>Contact</li>
            </ul>
            <ul className="text-[#9e9e9e] sm:-ml-16">
              <p className="text-[#fff] mb-5">Contact</p>
              <li>0752 232 113</li>
              <li>aestheticlabbrasov@gmail.com</li>
              <li className="md:w-[20rem]">Str. Carpaților 93, Brașov</li>
            </ul>
            <ul className="text-[#9e9e9e]">
              <p className="text-[#fff] mb-5">Program</p>
              <li className="w-[50rem]">L-V: 09:00-19:00</li>
              <li>S: 09:00-17:00</li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Footer;
