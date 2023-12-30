'use client'

import { useEffect, useState } from "react"



export default function useWindowSize() {
    

  


    const [windowWidth,setWindowWidth] = useState(1201);
    const [windowHeight,setWindowHeight] = useState(766);
    const [screenSize,setScreenSize] = useState("");
    

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
        if (window.innerWidth <= 1200 ) {
          setScreenSize("mobile")
        }else if(window.innerHeight <= 767&&window.innerWidth > 1200){
          setScreenSize("desktop")
        }
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);4

      
    }, []); 

    
    return [windowWidth,windowHeight,screenSize];
  }