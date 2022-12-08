import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen">
      <div
        className="py-2 flex-1 flex flex-col
       items-center md:items-start justify-center gap-6"
      >
        <div
          className="flex item-started gap-2 justify-center
     bg-orange-100 p-2 rounded-full"
        >
          <p>Bike Delivery</p>
          <div className="w-6 h-6 rounded-full bg-white overflow-hidden">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p>
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem]">your City</span>
        </p>
        <p className="text-base text-textColor text-center md:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-400
            w-full px-4 py-2 rounded-lg hover:sha translate-all ease-in-out duration-100
            md:w-auto"
        >
          Order now
        </button>
      </div>
      <div className="py-2  flex-1">
        <div className="w-full flex items-center justify-center relative">
          <img src={HeroBg} alt="hero bg" />
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
