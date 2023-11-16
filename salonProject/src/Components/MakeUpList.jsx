import React from "react";
// IMAGES
import MakeUpOne from "./Assests/Rectangle 26.png";
import MakeUpTwo from "./Assests/Rectangle 27.png";
import ListSkinCare from "./ListSkinCare";
function MakeUpList() {
  return (
    <React.Fragment>
      <section className="px-10 ">
        <div className="grid grid-cols-3 mb-24 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-14">
          <img src={MakeUpOne} alt="" className="w-3/4 sm:mb-10 sm:w-full md:w-full md:mb-10 lg:w-full" />
          <div className="flex flex-col text-center items-center justify-center">
          <p className="makeup-text text-[#ECD8BD] sm:mb-5 md:mb-5">Despre noi</p>
          <h2 className="text-[#ffffff] text-[3rem] leading-tight mb-10 sm:text-2xl">Expertiză, combinată cu calitate: Esența frumuseții.</h2>
          <p className="text-[#cacaca] text-[0.9rem] sm:mb-12 md:mb-12 md:leading-relaxed ">
            La Aesthetic Lab avem produse profesionale de îngrijire și frumusețe
            a pielii excepționale. Munca noastră se concetrează pe tine, clienta
            nostră: tot ceea ce facem la Esthetic Lab începe și se termină cu
            tratamentul de înfrumusețare cu produse cosmetice de calitate,
            oferim întotdeauna clientelor noastre un nivel optim de tratament și
            îngrijire cu Produse de calitate premiate si de succes. În calitate
            de specialiști în frumusețe și wellness, vă împărtășim obiectivul
            nostru de a satisface nevoile individuale cu produse de frumusețe
            într-un mod inovator, cu o precizie care inspiră încredere. Acest
            lucru ne-a făcut și continuă să ne facă să fim unici.
          </p>
          </div>
          <img src={MakeUpTwo} alt="" className="w-3/4 ml-[8rem] sm:ml-0 sm:w-full md:w-full md:ml-0  lg:col-start-2 lg:w-full lg:ml-0  " />
        </div>
        <ListSkinCare/>
      </section>
    </React.Fragment>
  );
}

export default MakeUpList;
