"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import fadein from "@/utils/variants";
import { useLanguage } from "@/lib/languageContext";
import Image from "next/image";
import { Play } from "lucide-react";

const THUMBNAIL = "/assets/portfolio/Mob.jpg";
const PORTFOLIO_VIDEO =
  "https://res.cloudinary.com/du45ucceq/video/upload/srtemple/SR_Temple_Video_iei9xt.mp4";

function Hero() {
  const { language } = useLanguage() || { language: "english" };
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef?.current?.play();
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <main className="md:h-[100vh] h-auto md:w-[100vw] pb-10 bg-yellow overflow-x-hidden flex flex-col md:flex-row justify-evenly items-center">
      <div className="relative md:w-[45vw] py-10 p-4 pb-4 md:p-0 md:space-y-3 space-y-1">
        <p className="text-white bg-slate-800 md:w-32 px-3 py-2 rounded-2xl text-center mx-auto md:mx-0">
          {language === "english"
            ? "Our Projects"
            : language === "marathi"
            ? "आमचे प्रकल्प"
            : "हमारे प्रकल्प"}
        </p>
        <motion.h1
          variants={fadein("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="md:text-5xl text-3xl leading-none font-MainHeading text-black py-4 text-center md:text-left"
        >
          {language === "english"
            ? "Majestic Temples"
            : language === "marathi"
            ? "भव्य मंदिरे"
            : "भव्य मंदिर"}
          <span className="block md:leading-loose">
            {language === "english"
              ? "Built With Devotion"
              : language === "marathi"
              ? "भक्तीने बांधले"
              : "भक्तिभाव से निर्मित"}
          </span>
        </motion.h1>
        <motion.h3
          variants={fadein("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="md:text-xl text-base text-white text-center md:text-left"
        >
          {language === "english"
            ? "Constructing the Heart of Worship signifies building a dedicated space that nurtures spiritual connection, creating a reverent environment for both communal and personal worship."
            : language === "marathi"
            ? "विभावनाच्या हृदयाचे निर्माण हा म्हणजे एक विशेष स्थान तयार करणे ज्या ठिकाणी आपल्याला आपल्या आत्म्याच्या संबंधात वाढ झाली जाते आणि समाजाच्या आणि व्यक्तिच्या पूजेच्या उपस्थितीसाठी उत्कृष्ट परिसर तयार करणे."
            : "विभावना का निर्माण यह मतलब है एक विशेष स्थान बनाना जहां आपके आत्मा के संबंधों में वृद्धि होती है और समाज और व्यक्ति की पूजा के लिए उत्कृष्ट परिसर तैयार किया जाता है।"}
        </motion.h3>
      </div>

      {/* Video Player */}
      <div className="relative box-shadow: 5px 5px 2.5px 6px rgb(209, 218, 218) shadow-md shadow-slate-500 flex justify-center h-[278px] md:h-[438px] w-[160px] md:w-[250px] border-4 border-black rounded-2xl bg-gray-50 md:top-12">
        <span className="absolute z-10 border border-black bg-slate-950 w-24 h-3 rounded-br-xl rounded-bl-xl" />
        <span className="absolute -right-2 top-14 border-4 border-black h-7 rounded-md" />
        <span className="absolute -right-2 bottom-36 border-4 border-black h-10 rounded-md" />
        {isPlaying ? (
          <video
            ref={videoRef}
            width="350"
            height="350"
            className="z-5 rounded-xl"
            controls
            content="cover"
            autoPlay
            onEnded={handleVideoEnd}
          >
            <source src={PORTFOLIO_VIDEO} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="relative">
            <Image
              src={THUMBNAIL}
              alt="Mob Thumbnail"
              width={250}
              height={438}
              className="rounded-xl cursor-pointer"
              onClick={handlePlay}
            />
            <motion.button
              className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl"
              onClick={handlePlay}
            >
              <motion.div
                className="absolute w-12 h-12 bg-white/50 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Play
                color="black"
                aria-label="play"
                size={25}
                className="relative z-10"
              />
            </motion.button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Hero;
