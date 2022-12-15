import React from "react";
import { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { useStateValue } from "../context/StateProvider";
import { categories } from "../utils/data";
import { motion } from "framer-motion";

import RowContainer from "./RowContainer";
const MenuContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const [filter, setFilter] = useState("chicken");
]
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
              <motion.div
                whileTap={{ scale: 0.6 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName
                    ? "bg-cartNumBg"
                    : "bg-card"
                } bg-card w-24 min-w-[94px] h-24 cursor-pointer rounded-lg flex flex-col gap-3 items-center drop-shadow-xl justify-center duration-150 transition-all ease-in-out`}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-cartNumBg"
                  } w-10 h-10 rounded-full bg-cartNumBg group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={` ${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-card"
                    }  group-hover:text-textColor text-lg`}
                  />
                </div>
                <div
                  className={` ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } text-sm text-textColor group-hover:text-white"`}
                >
                  <p>{category.name}</p>
                </div>
              </motion.div>
            ))}
        </div>
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category === filter)}
          />
          <h1>sss</h1>
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
