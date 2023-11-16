import React from "react";
// IMAGES
import HeroImage from "./Assests/beautiful-woman-white-dress-white-background-portrait-with-beautiful-long-hair-touching-face .png";
import OfBadge from "./Assests/ofbadge 1.png";

// ICONS
import {IoDiamondOutline} from 'react-icons/io5';
import {GrCertificate} from 'react-icons/gr';
import {BiSolidBadgeCheck} from 'react-icons/bi'


function HeroSection() {
  return (
    <React.Fragment>
    <div className=" relative">
      <div className=" flex justify-center py-[9.6rem] px-[2.4rem]  gap-10 sm:flex-wrap md:flex-wrap lg:flex-wrap lg:items-center lg:justify-center">
        <div>
          <h1 className="text-[#ecd8bd] text-[6rem] leading-tight mb-5 sm:text-7xl sm:leading-snug lg:text-7xl lg:text-center">
            Investește în pielea ta cu Aestethic Lab
          </h1>
          <p className="text-white text-[1.3rem] mb-16 sm:text-[1rem] lg:text-center">
            Oferim servicii de înfrumusețare și tratamente, de cea mai bună
            calitate.
          </p>
          <div className="flex items-center gap-5">
            <img src={OfBadge} alt="" className="w-28" />
            <section>
              <p className="text-white text-[1.2rem] w-3/5 leading-tight mb-1 sm:w-full sm:leading-snug">
                Surprinde Persoana Iubită cu un Voucher Cadou!
              </p>
              <p className="text-[#AFAFAF] mb-2">
                Alege cel mai frumos si ​inspirat cadou!
              </p>
              <a href="#" className="text-[#ECD8BD] ">
                Rezervă acum &rarr;
              </a>
            </section>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="" className="" />
        </div>
      </div>
      <div className="bg-[#ECD8BD] py-[3rem] px-[2.4rem] absolute top-[68.4%] -z-10 w-full sm:top-[90%] md:top-[95%]  lg:top-full ">
        <ul className="flex gap-20 sm:gap-0 sm:items-center sm:justify-center md:items-center md:justify-center lg:items-center lg:justify-center">
          <li>  
            <IoDiamondOutline className="text-[2.8rem] text-[#212121] mb-2.5 translate-x-14 sm "/>
            <p className="sm:text-sm sm:w-[10rem] ">Produse de calitate</p>
          </li>
          <li>  
            <GrCertificate className="text-[2.8rem] text-[#212121] mb-2.5 translate-x-14 "/>
            <p className="sm:text-sm sm:w-[10rem]">Personal calificat</p>
          </li>
          <li>  
            <BiSolidBadgeCheck className="text-[2.8rem] text-[#212121] mb-2.5 translate-x-14 "/>
            <p className="sm:text-sm sm:w-[10rem]">Standarde înalte</p>
          </li>
        </ul>
      </div>
      </div>
    </React.Fragment>
  );
}

export default HeroSection;
