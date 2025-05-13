import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="w-full border-t-2 flex justify-center">
      <div className="w-full max-w-[850px] max-lg:max-w-[540px] max-sm:max-w-[350px] h-auto min-h-[250px] flex flex-col lg:flex-row gap-6 max-sm:gap-6 sm:gap-4 items-center justify-center my-10 px-4">
        <div className="w-full sm:flex sm:flex-row sm:gap-4 lg:w-[50%]">
          <div className="w-full sm:w-[60%] lg:w-full h-[120px] sm:h-[250px] bg-[#FF8BDC] rounded-2xl max-sm:mb-6"></div>
          <div className="w-full sm:w-[40%] lg:w-full h-[120px] sm:h-[250px] bg-[#BED6FA] rounded-2xl"></div>
        </div>
        <div className="w-full lg:w-[50%] h-[120px] sm:h-[250px] bg-[#88A9FF] rounded-2xl flex items-end justify-center">
          <div className="bg-white w-[70%] h-8 rounded-3xl my-4 max-sm:my-4 sm:my-10 flex justify-end items-center">
            <Button className="rounded-3xl h-6 w-[20%] mx-1.5 bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
