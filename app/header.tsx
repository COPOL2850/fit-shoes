interface layout {
  id: string;
  src: string;
}

import Image from "next/image";
export default async function Header() {
  const layuotResponse = await fetch("https://fit-shoes-server.vercel.app/layout", {
    cache: "no-store",
  });
  const layoutData: layout[] = await layuotResponse.json();
  

  return (
    <div className="w-full h-12 bg-orange-700 ">
      <div className="h-full w-48  flex justify-center items-center ">
        <div className="w-10 h-full   flex justify-center items-center">
          <Image  src={layoutData[0].src} width={30} height={30} alt={layoutData[0].id} />
          
        </div>
        <div className=" h-full w-36 flex justify-center items-center">
            <Image src={layoutData[1].src} width={144} height={40} alt={layoutData[1].id}/>
        </div>
      </div>
    </div>
  );
}
