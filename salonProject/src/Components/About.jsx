import React from "react";

// IMAGES
import MaskGroup from "./Assests/Mask group.png";
import MaskGroup2 from "./Assests/Mask group 2.png";

import { BsClock } from "react-icons/bs";

function About() {
  return (
    <React.Fragment>
      <section className=" max-w-[120rem] px-16 mb-28 sm:mt-36 md:mt-96 lg:mt-64">
        <div className="grid grid-cols-2 items-center sm:grid-cols-1 sm:gap-0 md:grid-cols-1 lg:gap-24">
          <img src={MaskGroup} alt="" className="w-3/4 sm:w-full md:w-full lg:w-full" />
          <div className="sm:-mt-44 md:-mt-36">
            <h2 className="text-white text-[4.5rem] mb-10 mt-64 leading-[1.2] sm:text-5xl sm:leading-snug lg:text-[2.5rem]">
              Produse profesionale de îngrijire și ​frumusețe a pielii de nivel
              premium
            </h2>
            <p className="text-white text-[1rem] w-3/4 sm:mb-10 sm:w-full">
              Expertiză, combinată cu calitate: Esența frumuseții. La Aesthetc
              Lab avem produse profesionale de îngrijire și frumusețe a pielii
              excepționale.
            </p>
            <div className="flex my-8 sm:my-0">
              <a
                href="#"
                className="flex items-center uppercase gap-5 bg-[#ECD8BD] px-5 py-5 rounded-full mb-24 text-[1.2rem]"
              >
                <BsClock className="text-[1.6rem] " />
                programare
              </a>
            </div>
            <img src={MaskGroup2} alt="" className="sm:w-full"/>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
