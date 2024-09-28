import React from "react";
import SwiperJs from "../../Swiper/Swiper";

const Header = () => {
  return (
    <div
    className="md:h-screen "
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("https://i.ibb.co.com/x1QNCms/plufow-le-studio-ailr-GVN0x-NA-unsplash.png")',
        backgroundAttachment: "fixed",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="pt-[70px] flex items-center justify-center flex-col h-full">
        <div className="md:max-w-2xl mx-auto  w-full p-10">
          <SwiperJs />
        </div>
      </div>
    </div>
  );
};

export default Header;
