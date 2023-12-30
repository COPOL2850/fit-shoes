'use client'

interface layout {
  id: string;
  src: string;
}




import Image from "next/image";
import Link from "next/link";
import Navigation, { SingUpNav } from "./navigation";
import useWindowSize from "../../hooks/windowSize"

import { useEffect, useState } from "react";
import Home from "../../page";




export default function Header() {

  const [layoutData, setLayoutData] = useState<layout[]>()

 








  // layoutData[2].src


  return (
    <div>
      <div className="h-5 w-full  sm:h-8">
        <Link href={"/"} className="h-full flex justify-center items-center overflow-hidden">
          <Image className="h-full max-w-none"  src={layoutData != undefined ? layoutData[2].src : "/layout/upper-header-banner.jpg"}  height={40} width={2000} alt={layoutData != undefined ? layoutData[2].id : ""} />
        </Link>
      </div>

      <div className="w-full h-7 bg-orange-700 flex  sm:h-12 justify-around items-center">

        {useWindowSize()[2] == "desktop" ?
          ""
          :
          <Navigation />}
        <div className="h-full sm:w-48 w-28 flex justify-center items-center ">
          <Link href={"/"} className="sm:w-10 h-full w-5  flex justify-center items-center">
            <Image src={"/layout/fit-shoes-vector-logo.svg"} width={30} height={30} alt={layoutData != undefined ? layoutData[0].id : ""} />

          </Link>
          <Link href={"/"} className=" h-full sm:w-36 w-20 flex justify-center items-center">
            <Image src={"/layout/fit-shoes-text-logo.svg"} width={144} height={40} alt={layoutData != undefined ? layoutData[0].id : ""} />
          </Link>
        </div>
        {useWindowSize()[2] == "desktop" ?
          <Navigation />
          :
          ""}
          <SingUpNav />
      </div>
    </div>
  );
}
