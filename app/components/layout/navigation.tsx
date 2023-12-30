"use client";

interface category {
    id: string;
    name: string;
}

import '../../globals.css'
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from 'usehooks-ts'
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
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import "./navigation.css"

import useWindowSize from "../../hooks/windowSize";
import Link from "next/link";
export default function Navigation() {
    const [open, setOpen] = useState(false);
    const [sideBarCategoriesIsOpen, setSideBarCategoriesIsOpen] = useState(false)
    const [categories, setCategories] = useState<category[]>()
    const [navBarCategoriesIsOpen, setNavBarCategoriesIsOpen] = useState(false)
    
    const navBarCategoriesRef = useRef(null)


    

    const handleClickOutside = () => {
        setNavBarCategoriesIsOpen(false)
    }

    useOnClickOutside(navBarCategoriesRef, handleClickOutside)

    return (
        <div className={`${useWindowSize()[2] == "desktop" ? "w-full" : ""}`}>
            {useWindowSize()[2] == "desktop" ? (
                <div className='flex w-full h-full'>
                    <div className='w-full h-full  ml-8 mr-3 flex items-center'>
                        <div className={`w-44  px-2  h-10  flex `}>
                            <div ref={navBarCategoriesRef} className={`w-full bg-orange-700 categories  pt-[6px] flex flex-col hover:shadow-lg hover:shadow-black group ${navBarCategoriesIsOpen == true ? "h-44 shadow-lg shadow-black group" : "h-full "} border-2 border-white border-solid rounded-md hover:h-44  transition-all duration-500`}>
                                <button className='w-full   h-7 flex' onClick={() => {
                                    setNavBarCategoriesIsOpen(true); 
                                }}>

                                    <CategoryRoundedIcon className='text-white mx-3' />
                                    <div className=' text-white ' >Categories</div>
                                </button>

                                
                                    <div className={`w-full h-full  mt-3 flex flex-col `}>
                                        <Link href={`categories/men`} className={` hover:text-gray-400 active:text-gray-500 group-hover:w-full group-hover:h-full group-hover:opacity-100 group-hover:text-base text-white transition-all duration-500 pl-10 ${navBarCategoriesIsOpen == true ? "w-full h-full opacity-100" : "w-0 h-0 text-0 opacity-0"}`}>{`Men's`}</Link>
                                        <Link href={`categories/women`} className={` hover:text-gray-400 active:text-gray-500 group-hover:w-full group-hover:h-full group-hover:opacity-100 group-hover:text-base text-white transition-all duration-500 pl-10 ${navBarCategoriesIsOpen == true ? "w-full h-full opacity-100" : "w-0 h-0 text-0 opacity-0"}`}>{`Women's`}</Link>
                                        <Link href={`categories/kid`} className={` hover:text-gray-400 active:text-gray-500 group-hover:w-full group-hover:h-full group-hover:opacity-100 group-hover:text-base text-white transition-all duration-500 pl-10 ${navBarCategoriesIsOpen == true ? "w-full h-full opacity-100" : "w-0 h-0 text-0 opacity-0"}`}>{`Kid's`}</Link>
                                    </div>
                                    


                            </div>
                        </div>
                        <Link href={"/about us"} className='w-40 mr-2 h-10 border-2 text-white border-white border-solid rounded-md flex items-center'>
                            <ContactSupportRoundedIcon className='text-white mx-3' />
                            About us
                        </Link>
                        <Link href={"/advertising"} className='w-44 mr-2 h-10 border-2 text-white  border-white border-solid rounded-md flex items-center'>
                            <LocalOfferRoundedIcon className='text-white mx-3' />
                            Your advertising
                        </Link>
                    </div>
                    <div className='w-14 h-full '>
                        <Link href={"/cart"} className='h-full w-full flex justify-center items-center'>
                            <ShoppingCartRoundedIcon className='text-white' />
                        </Link>
                    </div>
                    
                </div>
            ) : (

                <div className="h-full ">
                    <div className={` h-[calc(100vh-20px)]  bg-black opacity-70 absolute sm:h-[calc(100vh-32px)] transition-all duration-200 ${open == true ? "w-full " : "w-0"}`} onClick={() => { setOpen(!open); setSideBarCategoriesIsOpen(false) }}></div>
                    <div className={`${open == true ? "w-80 " : "w-0"} pl-3  -left-3 py-3 h-[calc(100vh-20px)]  sm:h-[calc(100vh-33px)] bg-orange-700 absolute rounded-e-2xl   transition-all duration-700 `}>
                        <div className=" relative flex flex-col h-full">
                            <div className={`w-full   h-5 flex relative transition-all duration-200   ${open == true ? " left-2 delay-500" : "-left-8"}`}>
                                <button className={`w-7 h-7 flex  justify-center items-center relative `} onClick={() => {
                                    setOpen(!open); setSideBarCategoriesIsOpen(false)
                                }}>
                                    <CloseRoundedIcon className={`  `} sx={{ color: "#FFF" }} />
                                </button>
                            </div>
                            <div className='overflow-y-scroll  sidebar-items-container  '>
                                
                            <div className={`w-full h-14  mt-6 px-6 py-2 relative transition-all duration-500  ${open == true ? "left-0 delay-100" : "-left-40 "}`}>
                                <Link href={"/"} className=" h-full w-full flex items-center text-white rounded-md border-white border-2 border-solid">
                                    <HomeRoundedIcon className="ml-2 mr-2 " />
                                    Home
                                </Link>
                            </div>
                            <div className={`w-full  ${sideBarCategoriesIsOpen == true ? "h-44" : "h-14"}  px-6 py-2  relative transition-all duration-500  ${open == true ? "left-0 delay-100" : "-left-40 "}`}>
                                <button className={` h-full w-full transition-all flex flex-col duration-75   text-white rounded-md border-white border-2 border-solid`} style={sideBarCategoriesIsOpen == true ? { paddingTop: 4 } : { paddingTop: 6 }} onClick={() => { setSideBarCategoriesIsOpen(!sideBarCategoriesIsOpen); 
                                 }}>
                                    <div className="flex  justify-between h-fit w-full mb-2">

                                        <CategoryRoundedIcon className="ml-2 mr-2 " />
                                        Categories
                                        <ArrowForwardIosRoundedIcon className={`ml-auto mr-2 transition- duration-500 ${sideBarCategoriesIsOpen == true ? "rotate-90" : "rotate-0"}`} fontSize="small" />
                                    </div>

                                    {sideBarCategoriesIsOpen == true ? <div className=" w-48 h-full ml-14 ">
                                        <div className="text-white flex items-start   flex-col w-full h-full ">
                                        <Link href={`categories/men`} className={` hover:text-gray-400 active:text-gray-500 group-hover:w-full group-hover:h-full group-hover:opacity-100 group-hover:text-base text-white transition-all duration-500 pl-10 ${sideBarCategoriesIsOpen == true ? "w-full h-full opacity-100 text-base" : "w-0 h-0 text-0 opacity-0"}`}>{`Men's`}</Link>
                                        <Link href={`categories/women`} className={` hover:text-gray-400 active:text-gray-500 group-hover:w-full group-hover:h-full group-hover:opacity-100 group-hover:text-base text-white transition-all duration-500 pl-10 ${sideBarCategoriesIsOpen == true ? "w-full h-full opacity-100" : "w-0 h-0 text-0 opacity-0"}`}>{`Women's`}</Link>
                                        <Link href={`categories/kid`} className={` hover:text-gray-400 active:text-gray-500 group-hover:w-full group-hover:h-full group-hover:opacity-100 group-hover:text-base text-white transition-all duration-500 pl-10 ${sideBarCategoriesIsOpen == true ? "w-full h-full opacity-100" : "w-0 h-0 text-0 opacity-0"}`}>{`Kid's`}</Link>
                                        </div>
                                    </div> : ""}
                                </button>
                            </div>
                            <div className={`w-full h-14   px-6 py-2  relative transition-all duration-500  ${open == true ? "left-0 delay-100" : "-left-40 "}`}>
                                <Link href={"/about us"} className=" h-full w-full flex items-center text-white rounded-md border-white border-2 border-solid">
                                    <ContactSupportRoundedIcon className="ml-2 mr-2 " />
                                    About us
                                </Link>
                            </div>
                            <div className={`w-full h-14   px-6 py-2  relative transition-all duration-500  ${open == true ? "left-0  delay-100" : "-left-40 "}`}>
                                <Link href={"/advertising"} className=" h-full w-full flex items-center text-white rounded-md border-white border-2 border-solid">
                                    <LocalOfferRoundedIcon className="ml-2 mr-2 " />
                                    Your advertising
                                </Link>
                            </div>
                            </div>
                            <div className={`w-full h-20 relative text-white  mt-auto px-5 transition-all duration-500  ${open == true ? "left-0 delay-100" : "-left-40 "}`}>
                                <div className={`w-full h-0.5 mt-1 bg-white flex justify-center items-center`}>
                                    <div className={`bg-orange-700 w-32 text-white  flex justify-center items-center`}><span>Fit Shoes Social</span></div>
                                </div>
                                <div className="w-full h-14 flex  mt-4 justify-around">

                                    <div className="w-14 h-14 border-white border-2 border-solid  rounded-full">
                                        <Link href={"https://facebook.com"} target="_blank" className="w-full h-full flex justify-center items-center ">
                                            <FacebookRoundedIcon fontSize="large" />
                                        </Link>
                                    </div>
                                    <div className="w-14 h-14 border-white border-2 border-solid  rounded-full">
                                        <Link href={"https://instagram.com"} target="_blank" className="w-full h-full flex justify-center items-center ">
                                            <InstagramIcon fontSize="large" />
                                        </Link>
                                    </div>
                                    <div className="w-14 h-14 border-white border-2 border-solid  rounded-full">
                                        <Link href={"https://t.me"} target="_blank" className="w-full h-full flex justify-center items-center ">
                                            <TelegramIcon fontSize="large" />
                                        </Link>
                                    </div>
                                    <div className="w-14 h-14 border-white border-2 border-solid  rounded-full">
                                        <Link href={"https://whatsapp.com"} target="_blank" className="w-full h-full flex justify-center items-center ">
                                            <WhatsAppIcon fontSize="large" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-3 sm:w-7  mr-1 ml-3 flex h-full left-0  justify-center items-center">
                        <button className="sm:w-7 sm:h-7 h-7 w-7 flex justify-center items-center " onClick={() => {
                            setOpen(!open);
                        }}>

                            <MenuRoundedIcon sx={{ color: "#FFF" }}  className='text-2xl sm:text-3xl'  />
                        </button>
                    </div>

                </div>
            )}

        </div>
    );
}

export  const SingUpNav = () => {

    const singUpContainerRef = useRef(null)

    const [logedInUser, setLogedInUser] = useState(false)
    const [singUpIsOpen, setSingUpIsOpen] = useState(false)

    const handleClickOutside = () => {
        setSingUpIsOpen(false)
    }

    useOnClickOutside(singUpContainerRef,handleClickOutside)

    return (
        <div ref={singUpContainerRef} className={`${logedInUser != true ? "w-24 sm:w-44 " : ""} h-full flex  ml-auto justify-center sm:pt-[2px] pt-[0.7px]`}>
                        {logedInUser != true ?
                            <div className='sm:w-32 sm:h-10 w-20 h-5  flex flex-col pt-[3px] sm:pt-[6px] items-center relative group  border-2 transition-all duration-500 hover:shadow-lg hover:shadow-black bg-orange-700 hover:h-12 sm:hover:h-20 rounded-xl sm:rounded-2xl border-opacity-0 hover:border-opacity-100 border-white hover:border-solid '>
                                
                                <Link href={"/login"} className='sm:w-28 sm:h-7 w-16 h-4 border-2 border-white border-solid text-white rounded-full opacity-0 group-hover:opacity-100 group-hover:mt-6 sm:group-hover:mt-9 group-hover:z-0 transition-all duration-500 flex items-center absolute justify-center'>
                                    <span className='ml-1'>Login</span>

                                </Link>
                                <Link href={"/sing up"} className='sm:w-28 sm:h-7 w-16 h-4 bg-white rounded-full flex items-center  justify-center'>
                                    <span className='mr-6 group-hover:mr-0 transition-all text-[10px] sm:text-base duration-500'>Sign Up</span>
                                    <ArrowForwardIosRoundedIcon  className='sm:ml-16 ml-9 group-hover:opacity-0 group-hover:ml-[80px] text-base sm:text-xl   rotate-90  absolute transition-all duration-500' />
                                </Link>
                                <button className= {`  absolute ${singUpIsOpen == true ? "w-0 h-0" : "w-full h-full group-hover:w-0 group-hover:h-0 transition-all delay-150"}`} onClick={()=>{setSingUpIsOpen(true)}}></button>
                            </div>
                            : ""}
                    </div>
    )
}