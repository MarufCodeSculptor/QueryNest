// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import "swiper/css/effect-creative";
import { useState } from "react";
const images = {
  image_1: "https://i.ibb.co.com/XDrVVHB/image-4.png",
  image_2: "https://i.ibb.co.com/stcbhmH/image.png",
  image_3: "https://i.ibb.co.com/ryHpJm2/image-1.png",
  image_4: "https://i.ibb.co.com/0hFST1g/image-3.png",
};

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (event) => {
    setActiveIndex(event.realIndex);
  };
  return (
    <div>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCreative,
        ]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay
        onSlideChange={handleSlideChange}
        speed={1000}
        loop={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
      >
        <SwiperSlide>
          <div
            className="h-screen relative"
            style={{
              backgroundImage: `url('${images.image_1}')`,
              backgroundSize: "cover", // Ensures the image covers the entire div
              backgroundPosition: "center", // Centers the background image
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent opacity-75 z-10"></div>
            <div className="z-20 relative pt-[70px] flex items-center justify-center h-full">
              {activeIndex === 0 && (
                <motion.h2
                  className="text-5xl font-lora text-center font-bold text-white"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                  }}
                >
                  ekbar deke ja tui bar bar chole jabo <br />
                  tor dustumite aj ami ichhe meshabo
                </motion.h2>
              )}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen relative"
            style={{
              backgroundImage: `url('${images.image_2}')`,
              backgroundSize: "cover", // Ensures the image covers the entire div
              backgroundPosition: "center", // Centers the background image
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent opacity-75 z-10"></div>
            <div className="z-20 relative pt-[70px] flex items-center justify-center h-full">
              {activeIndex === 1 && (
                <motion.h2
                  className="text-5xl font-lora text-center font-bold text-white"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                  }}
                >
                  ekbar deke ja tui bar bar chole jabo <br />
                  tor dustumite aj ami ichhe meshabo
                </motion.h2>
              )}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen relative"
            style={{
              backgroundImage: `url('${images.image_3}')`,
              backgroundSize: "cover", // Ensures the image covers the entire div
              backgroundPosition: "center", // Centers the background image
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent opacity-75 z-10"></div>
            <div className="z-20 relative pt-[70px] flex items-center justify-center h-full">
              {activeIndex === 2 && (
                <motion.h2
                  className="text-5xl font-lora text-center font-bold text-white"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                  }}
                >
                  ekbar deke ja tui bar bar chole jabo <br />
                  tor dustumite aj ami ichhe meshabo
                </motion.h2>
              )}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen relative"
            style={{
              backgroundImage: `url('${images.image_4}')`,
              backgroundSize: "cover", // Ensures the image covers the entire div
              backgroundPosition: "center", // Centers the background image
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent opacity-75 z-10"></div>
            <div className="z-20 relative pt-[70px] flex items-center justify-center h-full">
              {activeIndex === 3 && (
                <motion.h2
                  className="text-5xl font-lora text-center font-bold text-white"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                  }}
                >
                  ekbar deke ja tui bar bar chole jabo <br />
                  tor dustumite aj ami ichhe meshabo
                </motion.h2>
              )}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
