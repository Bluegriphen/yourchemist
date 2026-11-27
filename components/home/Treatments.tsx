import React from "react";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import TreatmentCard from "./treatment/TreatmentCard";
import OrderCard from "./treatment/OrderCard";

const Treatments = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="container-page flex flex-col gap-6">
        {/* row 1  */}
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[40px]">
            Looking for Better Health? Browse Our{" "}
            <span className="text-primary">Treatments</span> or Refill Your{" "}
            <span className="text-primary">Prescriptions </span> Today
          </h2>
          <div className="flex ">
            <button className="h-11 w-11 ">
              <LeftArrow />
            </button>
            <button className="h-11 w-11 ">
              <RightArrow />
            </button>
          </div>
        </div>
        {/* row 2  */}
        <div>
          <TreatmentCard/>
          <TreatmentCard/>
          <OrderCard/>
        </div>
        {/* row 3  */}
        <div className="flex justify-center items-center">
          <button className="bg-primary py-4 px-6 flex items-center gap-2.5 rounded-[100px]">
            <span className="font-semibold font-agenda  text-[16px] text-white text-center">
              Order Prescription
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
