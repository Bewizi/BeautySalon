import React from "react";

function CallToAction() {
  return (
    <React.Fragment>
      <section className="bg-[#ECD8BD] max-w-[100rem] mx-auto py-28 mb-72 sm:py-14">
        <div>
          <h4 className="text-center text-6xl mb-16 sm:text-4xl  ">
            Abonează-te pentru a primi cele <br /> mai noi oferte de la
            Aesthetic Lab
          </h4>
          <div className="flex  items-center justify-center">
            <label>
              <span className="m-4">
                <input
                  type="text"
                  placeholder="Adresa ta de email "
                  className="placeholder:text-[#212121] rounded-full py-5 pl-4 w-[40rem] sm:w-[20rem]"
                />
                <button className="bg-[#212121] text-[#fff] rounded-full py-5 px-10 -ml-10">
                  ABONEAZĂ-TE
                </button>
              </span>
            </label>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default CallToAction;
