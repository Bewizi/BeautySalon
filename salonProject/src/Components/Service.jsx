import React from "react";

// IMAGE
import MaskGroup3 from "../Components/Assests/Mask group 3.png";
import MaskGroup4 from "../Components/Assests/Mask group 4.png";
import MaskGroup5 from "../Components/Assests/Mask group 5.png";
import MaskGroup6 from "../Components/Assests/Mask group 6.png";
import MaskGroup7 from "../Components/Assests/Mask group 7.png";

function Service() {
  const service = [
    {
      id: 1,
      title: "Rejuvenare faciala laser",
      image: MaskGroup3,
      text: "Ofertă",
      text2: "350 Lei",
    },
    {
      id: 2,
      title: "Glow Peel",
      image: MaskGroup4,
      text2: "400 Lei",
    },
    {
      id: 3,
      title: "Peeling chimic",
      image: MaskGroup5,
      text2: "350 Lei",
    },
    {
      id: 4,
      title: "Microneedling",
      image: MaskGroup6,
      text2: "350 Lei",
    },
    {
      id: 5,
      title: "Microneedling cu Botox",
      image: MaskGroup7,
      text2: "1150 Lei",
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-[#ECD8BD]  py-28 mb-36">
        <div className="flex flex-col items-center">
          <h2 className="text-[#212121] text-[4rem] ">Serviciile noastre</h2>
          <p className="text-[#7D5620] text-[0.85rem] mb-16 ">
            Răsfață-te cu serviciile noastre pentru toate vârstele
          </p>
        </div>
        <section className="px-24 mb-20 lg:px-10">
          <ul className="flex sm:flex-wrap sm:gap-14 sm:items-center sm:justify-center md:flex-wrap md:items-center md:justify-center md:gap-14 ">
            {service.map((serviceData) => {
              return (
                <li key={serviceData.id}>
                  <img src={serviceData.image} alt="" className="w-4/5 mb-3 md:w-full" />
                  <p className="service-title text-[2rem] w-3/5 leading-[1.2] mb-2 sm:w-[80%] lg:text-xl  ">
                    {serviceData.title}
                  </p>
                  <div
                    className={` ${
                      serviceData.text === "flex justify-between"
                        ? serviceData.text
                        : ""
                    }`}
                  >
                    <span
                      className={`${
                        serviceData.text && "bg-[#B58224]"
                      } text-[#fff] rounded-full px-4 py-1 mr-2`}
                    >
                      {serviceData.text}
                    </span>
                    <span className="service-text-2 text-[#212121]">
                      {serviceData.text2}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <div className="text-center">
          <a href="#" className="border border-[#212121] rounded-full py-3 px-12">VEZI PAGINA SERVICII</a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Service;
