import React from "react";

// IMAGE
import MaskEight from '../Components/Assests/Mask group8.png';
import MaskNine from "../Components/Assests/Mask group 9.png";
import MaskTen from "../Components/Assests/Mask group 10.png";

function Ofertele() {
  const oferteleData = [
    {
      id: 1,
      image: MaskEight,
      title: "Laminare sprâncene",
      main: "Stilizare, laminare sprâncene",
      span: "110 lei / ședință",
    },
    {
      id: 2,
      image: MaskNine,
      title: "Epilare Definitivă - Pachet Smart",
      main: "Axilă, inghinal integral, picioare integral",
      span: "450 lei / ședință",
    },
    {
      id: 3,
      image: MaskTen,
      title: "Epilare Progresiv Definitivă",
      main: "Pachet 6 ședințe FULL BODY + 6 ședințe Rejuvenare Facială Laser",
      div: "6900 lei",
      span2: "3200 lei",
    },
  ];
  return (
    <React.Fragment>
      <section className="bg-[#ECD8BD] py-28 mb-48">
        <div className="flex flex-col items-center">
          <h2 className="text-[#212121] text-[4rem]  ">Ofertele lunii</h2>
          <p className="text-[#7D5620] text-[0.85rem] mb-16 ">
            Profită de ofertele noastre!
          </p>
        </div>
        <div className="px-24 md:px-5">
        <ul className="grid grid-cols-3 sm:grid-cols-1 sm:gap-20">
          {
            oferteleData.map((oferteleObj,index)=>(
              <li key={index}>
                <img src={oferteleObj.image} alt="" className="w-[90%] mb-5" />
                <h4 className="text-4xl w-[60%] mb-2 sm:w-full md:text-xl md:w-[70%] lg:text-2xl lg:w-[75%] xl:w-[90%]">{oferteleObj.title}</h4>
                <p className="text-[#7D5620] text-[0.85rem] w-[75%] main mb-1">{oferteleObj.main}</p>
                <span className="span">{oferteleObj.span}</span>
                <div className="inline span line-through">{oferteleObj.div}</div>
                <span className="ml-5 span2">{oferteleObj.span2}</span>
              </li>

            ))
          }
        </ul>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Ofertele;
