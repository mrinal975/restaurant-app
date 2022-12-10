import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdFastfood } from "react-icons/md";
import { categories } from "../utils/Data";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageAsset, setImageAsset] = useState("");
  const [field, setField] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div
        className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg 
      p-4 flex flex-col items-center justify-center"
      >
        {field && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold 
                ${
                  alertStatus === "danger"
                    ? "bg-red-400 text-red-800"
                    : " bg-emerald-400 text-emerald-800"
                }
            `}
          >
            {msg}
          </motion.p>
        )}
        <div
          className="w-full py-2 border-b border-gray-300 flex
        items-center gap-2"
        >
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={title}
            placeholder="Give me a title ..."
            className="w-full h-full text-lg bg-transparent font-semibold
            outline-none border-none placeholder:text-gray-500"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full">
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="other" className="bg-white">
              Select category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base border-0 outline-none capitalize bg-white
                    text-headlingcolor"
                  value={item.urlParams}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
