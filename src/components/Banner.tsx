import React from "react";

const Banner = () => {
  return (
    <div
      className="w-screen max-w-[820px] h-[330px] max-lg:rounded-none max-md:rounded-none max-sm:rounded-none"
      style={{
        backgroundImage: `url(/images/gradients/acid/04.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default Banner;
