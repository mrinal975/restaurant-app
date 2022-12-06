import React from "react";
import Logo from "../img/logo.png";
import {MdShoppingBasket, MdAdd, MdLogout, MdMonetizationOn} from "react-icons/md";
import { motion } from "framer-motion";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { useState } from "react";

const Header =()=>{

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    const [{user}, dispath] = useStateValue();

    const [isMenu, setIsMenu]  = useState(false);

    const login = async() =>{
        if(!user){
            const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
            dispath({
                type: actionType.SET_USER,
                user: providerData[0]
            });
            localStorage.setItem("user", JSON.stringify(providerData[0]));
        }
        else{
            setIsMenu(!isMenu);
        }
        
    };
    const logout = async() =>{
        setIsMenu(false);
        localStorage.clear();
        dispath({
            type:actionType.SET_USER,
            user:null
        });
    };

    return (
        <header className="fixed z-50 w-screen p-5 px-20">
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={'/'} className="flex items-center gap-2">
                    <img src={Logo} className="w-10 object-cover" alt="logo"/>
                    <p className="text-headingColor text-xl font-bold">City</p>     
                </Link>
                <div className="flex items-cemter">
                    <motion.ul 
                    initial={{opacity:0,x:200}}
                    animate={{opacity:1,x:0}}
                    exit={{opacity: 0, x:200}}
                    className="flex items-center gap-8 ml-auto">
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
                    </motion.ul>
                    <div className="relative flex items-center justify-center pl-0.5 pr-[20px]">
                        <MdShoppingBasket className="text-textColor text-2xl ml-5
                        cursor-pointer"/>
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg
                        flex items-center justify-center ">
                            <p className="text-xs text-white font-semibold">2</p>
                        </div>
                    </div>
                    <div className="relative">
                        <motion.img 
                        src ={user ? user.photoURL : Avatar} 
                        whileTap={{scale:0.6}}
                        className="w-9 min-w-[40px] h-9 min-h-[40px] 
                        rounded-full
                        drop-shadow-2xl cursor-pointer" 
                        alt="userprofile" 
                        onClick={login}
                        />
                        {isMenu &&(
                            <motion.div 
                            initial={{ opacity:0, scale: 0.6}}
                            animate={{ opacity:1, scale: 1}}
                            exit={{ opacity:0, scale: 0.6 }}
                             className="w-40 bg-gray shadow-xl flex
                                flex-col rounded-lg absolute
                                px-4 py-2 left-0">
                                {user && user.email=="mrinal35-975@diu.edu.bd" && (
                                    <Link to={'/createItem'} className="py-2 flex items-center gap-3
                                    cursor-pointer tranaition-all duration-100 ease-in-out text-textColor
                                    text-base hover:bg-slate-100">
                                    New item <MdAdd />
                                    </Link>
                                )}
                                <p className="py-2 flex items-center gap-3
                                cursor-pointer tranaition-all duration-100 ease-in-out text-textColor
                                text-base hover:bg-slate-100"
                                onClick={logout}
                                >Logout <MdLogout /> </p>
                            </motion.div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
            <div className="flex md:hidden w-full h-full"></div>
        </header>
    )
}

export default Header;