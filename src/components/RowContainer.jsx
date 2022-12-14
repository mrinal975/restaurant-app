import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-12  bg-cardOverlay ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className="w-300 md:w-340 bg-gray-100 h-auth backdrop-blur-lg p-2 my-2 hover:drop-shadow-2xl">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="https://firebasestorage.googleapis.com/v0/b/restaurant-app-7726c.appspot.com/o/Images%2F1670952111564-download.jpeg?alt=media&token=5a3b63e7-883e-41da-b510-44d0cf029a09"
            alt="image"
            className="w-44 -mt-8 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Chocolate & Vanela
          </p>
          <p className="mt-1 text-sm text-gray-500">4 calories</p>
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-samibold">
              <span className="text-sm text-red-500">$</span>
              5.25
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
