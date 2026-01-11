"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const notificationPositions = [
  // Left side notifications
  { top: "10%", left: "0px", delay: 0.2 },
  { top: "25%", left: "30px", delay: 0.4 },
  { top: "45%", left: "0px", delay: 0.6 },
  { top: "65%", left: "0px", delay: 0.8 },
  { top: "80%", left: "0px", delay: 1.0 },
  // Right side notifications
  { top: "15%", right: "0px", delay: 0.3 },
  { top: "25%", right: "0px", delay: 0.5 },
  { top: "35%", right: "40px", delay: 0.7 },
  { top: "55%", right: "20px", delay: 0.9 },
  { top: "0%", right: "45px", delay: 1.1 },
];

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between relative h-screen w-full overflow-hidden">
      <h1 className="text-[60px] font-medium -tracking-[4px] pt-[134px] mb-8 text-center">
        The social layer for student life.
      </h1>

      <div className="relative w-full max-w-[1200px] h-[65vh] flex items-center justify-center">
        {/* Left Side Notifications */}
        <div className="absolute left-8 top-0 pt-[1%] z-[10] h-full max-h-[472px] w-1/3 flex-col md:flex hidden justify-center gap-[27px] ">
          {isVisible &&
            notificationPositions.slice(0, 5).map((pos, index) => (
              <motion.div
                key={`left-${index}`}
                className="relative"
                style={{
                  alignSelf: "flex-end",
                  width: "100%",
                  maxWidth: "322px",
                  marginRight: `${pos.left}`,
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: pos.delay,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Image
                  src={`/assets/hero-notifs/${index + 1}.png`}
                  alt={`notification-${index + 1}`}
                  width={362}
                  height={44}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
        </div>

        {/* Main Phone Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/assets/iphone_mockup.png"
            alt="phone"
            width={650}
            height={884}
            className="h-full w-auto object-contain"
            priority
            style={{
              maxHeight: "100%",
              maxWidth: "100%"
            }}
          />
        </div>

        {/* Right Side Notifications */}
        <div className="absolute right-14 top-0 pt-[1%] h-full w-1/3 max-h-[472px] md:flex hidden flex-col justify-center gap-[27px]">
          {isVisible &&
            notificationPositions.slice(5).map((pos, index) => (
              <motion.div
                key={`right-${index}`}
                className="relative"
                style={{
                  alignSelf: "flex-start",
                  width: "80%",
                  maxWidth: "300px",
                  marginLeft: `${pos.right}`,
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: pos.delay,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Image
                  src={`/assets/hero-notifs/${index + 6}.png`}
                  alt={`notification-${index + 6}`}
                  width={362}
                  height={44}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;
