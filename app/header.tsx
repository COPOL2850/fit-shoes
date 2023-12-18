'use client'

interface layout {
  id: string;
  src: string;
}




import Image from "next/image";
import Link from "next/link";
import Navigation from "./navigation";
import useWindowSize from "./windowSize"

import { useEffect, useState } from "react";
import Home from "./page";




export default  function Header() {
  
  const [layoutData,setLayoutData]  = useState<layout[]>()
  
  useEffect(() => {
    fetch("https://fit-shoes-server.vercel.app/layout")
      .then((res) => res.json())
      .then((data) => setLayoutData(data));
 }, []);
  

  
  
  
  
  
  
  

  
  // layoutData[2].src

  
  return (
    <div>
      <div className="h-5 w-full  sm:h-8">
        <Link href={"/"} className="h-full flex justify-center items-center overflow-hidden">
          <Image className="h-full max-w-none" src={layoutData !=undefined ? layoutData[2].src: "/layout"} priority={false} height={40} width={2000}  alt={layoutData !=undefined ? layoutData[2].id: ""} />
        </Link>
      </div>
      
      <div className="w-full h-12 bg-orange-700 flex ">
        
      {useWindowSize()[2] == "desktop" ? 
            ""
            : 
            <Navigation /> }
        <div className="h-full w-48  flex justify-center items-center ">
          <Link href={"/"} className="w-10 h-full   flex justify-center items-center">
            <Image src={layoutData !=undefined ? layoutData[0].src: "/layout"} width={30} height={30} alt={layoutData !=undefined ? layoutData[0].id: ""} />

          </Link>
          <Link href={"/"} className=" h-full w-36 flex justify-center items-center">
            <Image src={layoutData !=undefined ? layoutData[1].src: "/layout"} width={144} height={40} alt={layoutData !=undefined ? layoutData[0].id: ""} />
          </Link>
        </div>
        {useWindowSize()[2] == "desktop" ? 
            <Navigation /> 
            : 
            "" }
      </div>
    </div>
  );
}
