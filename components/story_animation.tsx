"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const Story = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const paragraphs = gsap.utils.toArray<HTMLElement>(".reveal-text");

      //   paragraphs.forEach((para) => {
      const split = new SplitText("#txts", { type: "words" });

      gsap.fromTo(
        ".yellow",
        { opacity: 0, maxWidth: 0, rotate: 0, scale: 0.7, y: 30 },
        {
          opacity: 1,
          maxWidth: 153,
          scale: 1.1,
          rotate: 360,
          y: -30,
          ease: "elastic.out(1, 0.6)",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".diamond-icon",
            start: "top 70%",
            end: "bottom 73%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );

      gsap.fromTo(
        ".red",
        { opacity: 0, maxWidth: 0, rotate: 0, scale: 0.7, y: 30 },
        {
          opacity: 1,
          maxWidth: 153,
          scale: 1.1,
          rotate: 360,
          y: 0,
          ease: "elastic.out(1, 0.6)",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".diamond-icon",
            start: "top 70%",
            end: "bottom 73%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );

      gsap.to(".asking", {
        x: 36,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".asking",
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

      gsap.from(split.words, {
        opacity: 0.15,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 65%",
          end: "bottom 60%",
          scrub: true,
          markers: false,
        },
      });

      gsap.fromTo(
        ".sense",
        {
          borderBottomWidth: "0%",
          opacity: 0.15,
          y: 30,
        },
        {
          borderBottomWidth: "100%",
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sense",
            start: "top 65%",
            end: "bottom 60%",
            scrub: true,
            markers: false,
          },
        }
      );

      gsap.fromTo(
        ".star",
        {
          opacity: 0.15,
          scale: 0.7,
        },
        {
          borderBottomWidth: "100%",
          opacity: 1,
          y: 0,
          animation: "spin 1s linear infinite",
          scale: 1.1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".star",
            start: "top 65%",
            end: "bottom 60%",
            scrub: true,
            markers: false,
          },
        }
      );

      gsap.fromTo(
        ".wind",
        {
          opacity: 0.15,
          scale: 0.7,
          y: 30,
        },
        {
          borderBottomWidth: "100%",
          opacity: 1,
          rotate: 360,
          scale: 1.2,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".wind",
            start: "top 65%",
            end: "bottom 60%",
            scrub: true,
            markers: false,
          },
        }
      );
      //   });
    },
    { scope: container }
  );
  return (
    <div ref={container} className="max-w-[1074px] mx-auto">
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
            <span className="z-10 relative people-text text-white">
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
              className="red absolute left-0 transition-all duration-300 -z-10"
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

        <span className="reveal-text flex">
          That’s why we built
          <span className="underline text-[#0078FF]">cohort.</span>
          <Image
            className="red transition-all duration-300 -z-10"
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
              className="absolute -bottom-1 left-0 right-0 transition-all duration-300 -z-10"
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
