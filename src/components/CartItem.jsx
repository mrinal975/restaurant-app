import React from "react";
import { motion } from "framer-motion";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useStateValue } from "../context/StateProvider";
import { useState } from "react";
import { actionType } from "../context/reducer";
import { useEffect } from "react";

const CartItem = (item) => {
  const [qty, setQty] = useState(1);
  const [items, setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartItems: items,
    });
  };

  const updateQty = (action, itemId) => {
    if (action == "add") {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id == itemId) {
          item.qty += 1;
        }
      });
      cartDispatch();
    }
  };

  useEffect(() => {
    setItems(cartItems);
  }, [qty]);

  return (
    <div>
      <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
        <img
          src={item?.imageURL}
          className="w-20 h-20 max-w-[60px] rounded-full object-contain"
          alt=""
        />

        {/* name section */}
        <div className="flex flex-col gap-2">
          <p className="text-base text-gray-50">{item?.title}</p>
          <p className="text-sm block text-gray-300 font-semibold">
            $ {parseFloat(item?.price) * qty}
          </p>
        </div>

        {/* button section */}
        <div className="group flex items-center gap-2 ml-auto cursor-pointer">
          <motion.div
            whileTap={{ scale: 0.75 }}
            onClick={() => updateQty("remove", item?.id)}
          >
            <BiMinus className="text-gray-50" />
          </motion.div>
          <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
            {qty}
          </p>
          <motion.div
            whileTap={{ scale: 0.75 }}
            onClick={() => updateQty("add", item?.id)}
          >
            <BiPlus className="text-gray-50" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
