import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";

const SwiperJs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        speed={1000}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => {
          console.log(swiper.activeIndex, "fucken index");
          setActiveIndex(swiper.realIndex);
        }}
      >
        <SwiperSlide>
          {activeIndex === 0 && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="text-white">
                <h2 className="md:text-5xl text-2xl font-lobster">
                  <span className="text-violet-500">Unlock the Power</span> of
                  Data with Your Feedback
                </h2>
                <p className="font-lora mt-5 md:text-base text-sm">
                  Gathering opinions, preferences, and experiences to provide
                  actionable insights. Our surveys are designed to collect
                  valuable data, helping businesses, researchers, and
                  organizations make informed decisions. Join us in shaping the
                  future by sharing your thoughts
                </p>
                <button className="btn btn-primary mt-5">
                  explore Survyes
                </button>
              </div>
            </motion.div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {activeIndex === 1 && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="text-white">
                <h2 className="md:text-5xl text-2xl font-lobster">
                  <span className="text-purple-500">Your Opinion Matters</span>{" "}
                  Share Your Insights with Us
                </h2>
                <p className="font-lora mt-5 md:text-base text-sm">
                  Participate in surveys that shape the future of market trends,
                  customer experiences, and organizational success. Whether it’s
                  for academic research or customer satisfaction, your feedback
                  makes a difference. Take our surveys today and have your voice
                  heard!
                </p>
                <button className="btn btn-primary mt-5">
                  explore Survyes
                </button>
              </div>
            </motion.div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {activeIndex === 2 && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="text-white">
                <h2 className="md:text-5xl text-2xl font-lobster">
                  <span className="text-blue-500">Discover Insights</span> Drive
                  Change
                </h2>
                <p className="font-lora mt-5 md:text-base text-sm">
                  We provide a platform for individuals to share their opinions
                  on key topics. From market research to organizational
                  evaluations, our surveys are a bridge to better understanding
                  and meaningful improvements. Let your voice be heard through
                  our surveys!
                </p>
                <button className="btn btn-primary mt-5">
                  explore Survyes
                </button>
              </div>
            </motion.div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperJs;
