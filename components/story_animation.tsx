"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const Story = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const paragraphs = gsap.utils.toArray<HTMLElement>(".reveal-text");

      //   paragraphs.forEach((para) => {
      const split = new SplitText("#txts", { type: "words" });

      gsap.set(".yellow", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      });

      gsap.fromTo(".yellow", {
        y: -30, opacity: 0 
      }, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 2,
        opacity: 1,
        ease: "none",
        y: -30,
        scrollTrigger: {
          trigger: ".yellow",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
          markers: false,
        },
      });

      gsap.set(".yellow1", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      });

      gsap.fromTo(".yellow1", {
        y: 0, opacity: 0 
      }, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 2,
        opacity: 1,
        ease: "none",
        y: 0,
        scrollTrigger: {
          trigger: ".yellow1",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
          markers: false,
        },
      });

      gsap.fromTo(
        ".red",
        { opacity: 0, maxWidth: 0, y: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          opacity: 1,
          maxWidth: 153,
          y: 0,
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: ".red",
            start: "top 70%",
            end: "bottom 73%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );

      gsap.from(".cohortt", {
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".cohortt",
          start: "top 70%",
          end: "bottom 73%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      gsap.fromTo(
        ".dino, .bulb",
        { opacity: 0, maxWidth: 0, scale: 0.7, y: 30 },
        {
          opacity: 1,
          maxWidth: 50,
          scale: 1.1,
          y: 0,
          ease: "elastic.out(1, 0.6)",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".dino",
            start: "top 70%",
            end: "bottom 73%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
      gsap.fromTo(
        ".people-text",
        { fontStyle: "normal" },
        {
          fontStyle: "italic",
          ease: "elastic.out(1, 0.6)",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".dino",
            start: "top 70%",
            end: "bottom 73%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );

      gsap.fromTo(
        ".deadline-text",
        { color: "#6e6e6e" },
        {
          color: "#ffffff",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".deadline-text",
            start: "top 70%",
            end: "bottom 73%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );

      gsap.fromTo(
        ".underlinee",
        {
          clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)",
          opacity: 0.5,
          width: 0,
          y: -30
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          opacity: 1,
          y: 0,
          width: 243,
          duration: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: ".underlinee",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );

      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 0.5,
          markers: false,
        },
      });

      textTl.from(split.words, {
        opacity: 0.15,
        y: 20,
        duration: 0.8,
        stagger: 0.05,
        ease: "sine.out"
      }, "<0.2");
      
      //   });
    },
    { scope: container }
  );
  return (
    <div ref={container} className="max-w-[1074px] mt-[50px] mx-auto">
      <div
        id="txts"
        className="text-[45px]/[100%] font-medium flex flex-col text-[#000] text-start leading-[-4%]"
      >
        <span className="reveal-text">
          They say university is the most social time of your life.
        </span>

        <span className="reveal-text items-center">
          You’ll meet your
          <span className="relative flex">
            <span className="z-10 relative people-text">people</span>
            <Image
              className="yellow absolute -left-3 transition-all duration-300 -z-10"
              src="/assets/yellow2.svg"
              alt="yellow"
              width={153}
              height={114}
            />
          </span>
          , find your tribe, and build friendships that last.
        </span>

        <span className="reveal-text">
          But when you actually arrive, it doesn’t feel like that. You know no
          one. You’re surrounded by people, yet somehow feel alone.
        </span>

        <span className="reveal-text flex ">
          Classes,
          <span className="relative flex">
            <span className="z-10 relative deadline-text ">
              deadlines,
            </span>
            <Image
              className="red absolute left-0 transition-all duration-300 -z-10"
              src="/assets/red.svg"
              alt="red"
              width={183}
              height={39}
            />
          </span>
          emails, events, group chats, calendars, portals, societies, and apps
          you didn’t even know existed. Everything needs your attention. Nothing
          is connected.
        </span>

        <span className="reveal-text">
          New system. New expectations. No context. No shortcuts. You’re
          expected to figure it all out while keeping up academically and
          socially.
        </span>

        <span className="reveal-text flex">
          <span className="relative flex">
            <span className="z-10 relative people-text ">students</span>
            <Image
              className="yellow1 absolute left-0 transition-all duration-300 -z-10"
              src="/assets/yellow1.svg"
              alt="yellow"
              width={153}
              height={39}
            />
          </span>
          are expected to search for friends, coordinate plans, draft emails,
          manage schedules, and hoping you didn’t miss something important. We
          think that’s backwards.
        </span>


          <div className="relative w-full h-[356px] my-12 overflow-hidden">
            <motion.div 
              className="relative w-full h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[
                // [id, left/right position, top position, delay multiplier, z-index]
                [1, 'left-10', 'top-[0%]', 0.2, 9],
                [2, 'left-0', 'top-[30%]', 0.7, 8],
                [3, 'left-10', 'top-[60%]', 0.4, 7],
                [4, 'left-2/4 -translate-x-1/2', 'top-[5%]', 0.5, 6],
                [5, 'left-2/4 -translate-x-1/2', 'top-[35%]', 0.1, 5],
                [6, 'left-2/4 -translate-x-1/2', 'top-[60%]', 0.8, 4],
                [7, 'right-6', 'top-[0%]', 0.3, 3],
                [8, 'right-14', 'top-[25%]', 0.6, 2],
                [9, 'right-10', 'top-[50%]', 0.9, 1],
                [10, 'right-15', 'top-[75%]', 1.1, 1],
              ].map(([id, position, top, delayMultiplier, zIndex]) => (
                <motion.div
                  key={`notification-${id}`}
                  className={`absolute w-1/3 max-w-[300px]  overflow-hidden ${position} ${top}`}
                  style={{ zIndex }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 20 },
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      y: 0,
                      transition: {
                        delay: 0.1 + (delayMultiplier as number) * 0.8,
                        type: 'spring',
                        stiffness: 300 + Math.random() * 100,
                        damping: 20 + Math.random() * 5,
                      }
                    }
                  }}
                >
                  <Image
                    src={`/assets/story-notifs/${id}.png`}
                    alt={`notification-${id}`}
                    width={300}
                    height={80}
                    className="w-full h-auto"
                    priority
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

        <span className="reveal-text flex">
          That’s why we built
          <span className="cohort text-[#0078FF]">cohort.</span>
          <Image
            className="cohortt transition-all duration-300 -z-10"
            src="/assets/cohort2.svg"
            alt="ch"
            width={55}
            height={55}
          />
        </span>

        <span className="reveal-text flex">
          Cohort is a
          <span className="relative">
            <Image
              src="/assets/underline.svg"
              className="absolute underlinee -bottom-1 left-0 right-0 transition-all duration-300 -z-10"
              alt="ch"
              width={232}
              height={0}
            />
            second brain
          </span>
          and social operating system for student life. It learns who you are,
          your classes, schedule, interests, and vibe, and acts on your behalf.
        </span>

        <span className="reveal-text">
          Instead of scrolling or searching, you just ask: backwards
        </span>

        <span className="reveal-text flex">
          cohort knows you—your classes, schedule, interests, and goals. And cohort knows
          <span className="relative">
            <Image
              src="/assets/underline.svg"
              className="absolute -bottom-1 left-0 right-0 transition-all duration-300 -z-10"
              alt="ch"
              width={232}
              height={0}
            />
            everyone
          </span>
          else too. So instead of you doing the work, Lena does it for you.
        </span>

        <span className="reveal-text flex">
            Finding the <span className="relative">
            <Image
              src="/assets/underline.svg"
              className="absolute -bottom-1 left-0 right-0 transition-all duration-300 -z-10"
              alt="ch"
              width={88}
              height={4}
            />
            right
          </span> people. handling emails and scheduling. surfacing what actually <span className="relative">
            <Image
              className="red absolute right-0 bottom-0 transition-all duration-300 -z-10"
              src="/assets/yellow1.svg"
              alt="yellow"
              width={131}
              height={39}
            />
            matters.
          </span> making introductions with context. helping you keep up without 
          <span className="relative flex items-center">
            <Image
              className="red absolute right-0  left-0  transition-all duration-300 -z-10"
              src="/assets/strikethrough.svg"
              alt="line"
              width={218}
              height={49}
            />
            burning out.
          </span>
        </span>

        <span className="reveal-text flex">You don’t have to 
            <span className="relative flex items-center">
            <Image
              className="red absolute right-0  left-0  transition-all duration-300 -z-10"
              src="/assets/strikethrough.svg"
              alt="line"
              width={139}
              height={49}
            />
            manage
          </span>
             student life anymore. You just live it.</span>

      </div>
    </div>
  );
};

export default Story;
