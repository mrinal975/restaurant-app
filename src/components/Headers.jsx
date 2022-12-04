import React from "react";
import Logo from "../img/logo.png";
import {MdShoppingBasket} from "react-icons/md";
import { motion } from "framer-motion";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";

const Header =()=>{
    return (
        <header className="fixed z-50 w-screen p-5 px-20">
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={'/'} className="flex items-center gap-2">
                    <img src={Logo} className="w-10 object-cover" alt="logo"/>
                    <p className="text-headingColor text-xl font-bold">City</p>     
                </Link>
                <div className="flex items-cemter">
                    <ul className="flex items-center gap-8 ml-auto">
                        <li className="text-base text-textColor hover:text-headingColor
                        duration-00 transition-all ease-in-out cursor-pointer">
                            Home
                        </li>
                        <li className="text-base text-textColor hover:text-headingColor
                        duration-00 transition-all ease-in-out cursor-pointer">
                            Menu
                        </li>
                        <li className="text-base text-textColor hover:text-headingColor
                        duration-00 transition-all ease-in-out cursor-pointer gap-5`">
                            About Us
                        </li>
                    </ul>
                    <div className="relative flex items-center justify-center pl-0.5 pr-[20px]">
                        <MdShoppingBasket className="text-textColor text-2xl ml-5
                        cursor-pointer"/>
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg
                        flex items-center justify-center ">
                            <p className="text-xs text-white font-semibold">2</p>
                        </div>
                    </div>
                    <motion.img src ={Avatar} whileTap={{scale:0.6}}
                    className="w-9 min-w-[40px] h-9 min-h-[40px] drop-shadow-2xl cursor-pointer" 
                    alt="userprofile" />
                </div>
            </div>
            <div className="flex md:hidden w-full h-full"></div>
        </header>
    )
}

export default Header;