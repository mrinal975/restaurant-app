import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/Data";

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
      <div className="py-2  flex-1 flex items-center">
        <div className="w-full flex flex-1 items-center justify-center relative">
          <img src={HeroBg} className="m-auto h-650" alt="hero bg" />

          <div
            className="flex flex-1 flex-wrap w-full items-center justify-center
                      py-4   h-full absolute top-0 left-0"
          >
            {heroData &&
              heroData.map((n) => (
                <div
                  key={n.id}
                  className=" lg:w-190 p-4 min-w-[190px] bg-cardOverlay 
                  backdrop-blur-md rounded-3xl text-center
                  flex flex-col item-center justify-center 
                  drop-shadow-lg"
                >
                  <img
                    src={n.imageSrc}
                    className="w-20 lg:w-40 lg:-mt-20 -mt-10 "
                    a
                    lt="i1"
                  />
                  <p className="text-base lg:text-xl font-semibold text-textColor ">
                    {n.name}
                  </p>
                  <p className="text-[11px] lg:text-sm text-lightTextGray font-semibold my-1 lg:my-3">
                    {n.decp}
                  </p>
                  <p className="text-sm font-semibold text-headingColor">
                    <span className="text-xs text-red-600">$</span> {n.price}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
