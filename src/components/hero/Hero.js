import React from "react";

export default function Hero() {
  const links = [
  
    {
      name: "Магазин",
      link: "/#shop",
    },
   
  ];
  return (
    <div id="hero">
      <div className="bg">
        <div className="container">
          <div className=" flex flex-col justify-center items-center mt-[300px]">
            <h1 className="text-[72px] text-white font-semibold">
              ПРОКАТ ПЛАТЬЕВ
            </h1>
            <p className="text-white text-center text-[22px] mt-[34px] font-light">
              ПЛАТЬЯ НАПРОКАТ <br /> ДЛЯ ЛЮБОГО СЛУЧАЯ
            </p>


            {
              links.map((link,index) => (
                  <a 
                href={link.link}
                className="text-white font-semibold text-lg  "
                key={index}
              >   <button className="bg-[#FF8AB5] py-[19px] px-[62px] text-white font-bold mt-[70px]">
              Магазин
            </button>
                
              </a>
              ))
              
            }
         
          </div>
        </div>
      </div>
    </div>
  );
}
