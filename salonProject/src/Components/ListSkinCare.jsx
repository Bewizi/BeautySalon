import React from "react";

function ListSkinCare() {
  return (
    <React.Fragment>
      <section className="max-w-[100rem] mx-auto mb-48">
        <div className="flex flex-col justify-center">
          <h2 className="text-[#ffffff] mb-10 text-4xl sm:text-2xl">
            KLAPP - Tratamente cosmetice inovatoare
          </h2>
          <div>
            <ul className="flex text-[#ffffff] gap-24 mb-12 sm:grid sm:justify-center sm:items-center sm:gap-14 md:grid md:items-center md:justify-center md:gap-14 lg:grid lg:items-center lg:justify-center lg:gap-14 " >
              <li className="border border-[#ECD8BD] rounded-full px-12 py-2 hover:bg-[#ECD8BD] hover:text-[#212121] hover:cursor-pointer transition-all duration-500 ">
                A Classic Gold
              </li>
              <li className="border border-[#ECD8BD] rounded-full px-12 py-2 hover:bg-[#ECD8BD] hover:text-[#212121] hover:cursor-pointer transition-all duration-500">
                Caviar Power
              </li>
              <li className="border border-[#ECD8BD] rounded-full px-12 py-2 hover:bg-[#ECD8BD] hover:text-[#212121] hover:cursor-pointer transition-all duration-500">
                X-Treme Hyaluron Infusion
              </li>
              <li className="border border-[#ECD8BD] rounded-full px-12 py-2 hover:bg-[#ECD8BD] hover:text-[#212121] hover:cursor-pointer transition-all duration-500">
                Clinical Care
              </li>
              <li className="border border-[#ECD8BD] rounded-full px-12 py-2 hover:bg-[#ECD8BD] hover:text-[#212121] hover:cursor-pointer transition-all duration-500">
                Peeling Acid
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-[45rem] sm:grid-cols-1 sm:gap-10 sm:items-center sm:justify-center md:grid-cols-1 md:gap-10 lg:gap-44">
              <p className="text-[#cacaca] w-[50rem] sm:w-full md:w-full lg:w-full">
                Vitamina A are o importanță fundamentală în structura și
                funcționarea pielii, ​având un efect stimulant în combaterea
                îmbătrânirii. Se stimulează formarea ​colagenului și activitatea
                enzimatică și are un efect benefic asupra ​mecanismelor de
                reparare a pielii. Retinolul utilizat de GK a făcut dovada
                ​înaltei sale eficiente obtinandu-se rezultate remarcabile.
                Produsele au o ​eficiență maximă, ingredientele active fiind
                perfect echilibrate, realizând în ​felul acesta la un tratament
                remarcabil, cu rezultate dorite: o piele proaspătă și elastică.
              </p>
              <div>
                <p className="text-[#ffffff]">Efectele tratamentului:</p>
                <ul className="text-[#cacaca] md:leading-loose">
                  <li className="list-disc"> Stimulează mușchii feței</li>
                  <li className="list-disc">Armonizează fluxul de energie</li>
                  <li className="list-disc">Revitalizează, reîmprospătează, regenerează</li>
                  <li className="list-disc">Reduce vizibil liniile de expresie</li>
                  <li className="list-disc">Reînnoire celulară</li>
                  <li className="list-disc">Îndepărtează toxinele</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ListSkinCare;
