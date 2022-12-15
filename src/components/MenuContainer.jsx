import React from "react";
import { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");
  console.log("categories", categories);
  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p
          className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-8 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 
        mr-auto"
        >
          Our Hot Dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.length &&
            categories.map((category) => (
              <div
                key={category.id}
                className="group bg-card w-24 min-w-[94px] h-24 cursor-pointer rounded-lg flex flex-col gap-3 items-center drop-shadow-xl justify-center duration-150 transition-all ease-in-out"
              >
                <div className="w-10 h-10 rounded-full bg-cartNumBg group-hover:bg-card flex items-center justify-center">
                  <IoFastFood className="text-card group-hover:text-textColor text-lg" />
                </div>
                <div className="text-sm text-textColor group-hover:text-white">
                  <p>{category.name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
