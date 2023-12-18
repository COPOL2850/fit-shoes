"use client";

interface category {
    id: string;
    name: string;
  }
  

import { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import useWindowSize from "./windowSize";
import Header from "./header";
import Link from "next/link";
export default function Navigation() {
    const [open, setOpen] = useState(true);
    const [sideBarCategoriesIsOpen,setSideBarCategoriesIsOpen] = useState(true)
    const [categories,setCategories] = useState<category[]>()

    console.log();
    
    useEffect(() => {
        fetch("https://fit-shoes-server.vercel.app/categories")
          .then((res) => res.json())
          .then((data) => setCategories(data));
     }, []);

     
     
    return (
        <div className="">
            {useWindowSize()[2] == "desktop" ? (
                <div>desk</div>
            ) : (
                
                <div className="h-full ">
                    <div className={`h-full   bg-black opacity-70 absolute transition-all duration-200 ${open == true ? "w-full " : "w-0"}`} onClick={() => { setOpen(!open); setSideBarCategoriesIsOpen(false) }}></div>
                    <div className={`${open == true ? "w-80 " : "w-0"} pl-3  -left-3 py-3  h-full bg-orange-700 absolute rounded-e-2xl   transition-all duration-700 `}>
                        <div className=" relative flex flex-col h-full">
                            <div className={`w-full  h-5 flex relative transition-all duration-200   ${open == true ? " left-2 delay-500" : "-left-8"}`}>
                                <button className={`w-7 h-7 flex  justify-center items-center relative `} onClick={() => {
                                    setOpen(!open); setSideBarCategoriesIsOpen(false)
                                }}>
                                    <CloseRoundedIcon className={`  `} sx={{ color: "#FFF" }} />
                                </button>
                            </div>
                            <div className={`w-full h-14  mt-6 px-6 py-2 relative transition-all duration-500  ${open == true ? "left-0 delay-100" : "-left-40 "}`}>
                                <Link href={"/"} className=" h-full w-full flex items-center text-white rounded-md border-white border-2 border-solid">
                                    <HomeRoundedIcon className="ml-2 mr-2 " />
                                    Home
                                </Link>
                            </div>
                            <div className={`w-full  ${sideBarCategoriesIsOpen == true ? "h-44" : "h-14"}  px-6 py-2  relative transition-all duration-500  ${open == true ? "left-0 delay-100" : "-left-40 "}`}>
                                <button  className={` h-full w-full transition-all flex flex-col duration-75   text-white rounded-md border-white border-2 border-solid`} style={sideBarCategoriesIsOpen == true ? {paddingTop: 4} : {paddingTop: 6}} onClick={()=>{setSideBarCategoriesIsOpen(!sideBarCategoriesIsOpen)}}>
                                    <div className="flex  justify-between h-fit w-full mb-2">

                                    <CategoryRoundedIcon className="ml-2 mr-2 " />
                                    Categories
                                    <ArrowForwardIosRoundedIcon className={`ml-auto mr-2 transition- duration-500 ${sideBarCategoriesIsOpen == true ? "rotate-90" : "rotate-0"}`} fontSize="small"/>
                                    </div>
                                    
                                    {sideBarCategoriesIsOpen == true ? <div className=" w-48 h-full ml-14 ">
                                        <div className="text-white flex items-start  flex-col">{categories == undefined ? "" : categories.map((val,i)=>{return(
                                            <Link className="hover:text-gray-400 active:text-gray-500 text-lg my-1" href={`categories/${val.name}`} key={i}>{val.name}</Link>
                                        )})}</div>
                                    </div> : ""}
                                </button>
                            </div>
                            <div className={`w-full h-14   px-6 py-2  relative transition-all duration-500  ${open == true ? "left-0 delay-100" : "-left-40 "}`}>
                                <Link href={"/About us"} className=" h-full w-full flex items-center text-white rounded-md border-white border-2 border-solid">
                                    <ContactSupportRoundedIcon className="ml-2 mr-2 "  />
                                    About us
                                </Link>
                            </div>
                            <div className={`w-full h-14   px-6 py-2  relative transition-all duration-500  ${open == true ? "left-0  delay-100" : "-left-40 "}`}>
                                <Link href={"/advertising"} className=" h-full w-full flex items-center text-white rounded-md border-white border-2 border-solid">
                                    <LocalOfferRoundedIcon className="ml-2 mr-2 " />
                                    Your advertising
                                </Link>
                            </div>
                            <div className={ `w-full h-20 relative text-white  mt-auto px-5 transition-all duration-500  ${open == true ? "left-0 delay-100" : "-left-40 "}`}>
                                <div className={`w-full h-0.5 mt-1 bg-white flex justify-center items-center`}>
                                    <div className={`bg-orange-700 w-32 text-white  flex justify-center items-center`}><span>Fit Shoes Social</span></div>
                                </div>
                                <div className="w-full h-14 flex  mt-4 justify-around">
                                    
                                <div className="w-14 h-14 border-white border-2 border-solid  rounded-full">
                                    <Link href={"https://facebook.com"} target="_blank" className="w-full h-full flex justify-center items-center ">
                                        <FacebookRoundedIcon fontSize="large"/>
                                    </Link>
                                </div>
                                <div className="w-14 h-14 border-white border-2 border-solid  rounded-full">
                                <Link href={"https://instagram.com"} target="_blank" className="w-full h-full flex justify-center items-center ">
                                        <InstagramIcon fontSize="large"/>
                                    </Link>
                                </div>
                                <div className="w-14 h-14 border-white border-2 border-solid  rounded-full">
                                <Link href={"https://t.me"} target="_blank" className="w-full h-full flex justify-center items-center ">
                                        <TelegramIcon fontSize="large"/>
                                    </Link>
                                </div>
                                <div className="w-14 h-14 border-white border-2 border-solid  rounded-full">
                                    <Link href={"https://whatsapp.com"} target="_blank" className="w-full h-full flex justify-center items-center ">
                                        <WhatsAppIcon fontSize="large"/>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-7  mr-1 ml-3 flex h-full left-0  justify-center items-center">
                        <button className="w-7 h-7 flex justify-center items-center " onClick={() => {
                            setOpen(!open);
                        }}>

                            <MenuRoundedIcon sx={{ color: "#FFF" }} />
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}
