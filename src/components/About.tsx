"use client";

import { useEffect, useRef } from "react";
import Card from "./Card";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power4 } from "gsap";
import { CallIcon } from "hugeicons-react";
gsap.registerPlugin(ScrollTrigger);

function Craft() {
  const container = useRef(null);

  useEffect(() => {
    let clutter = "";
    const para = document.querySelector(".texthead");
    if (para) {
      if (para.textContent) {
        const characters = para.textContent.split("");
        characters.forEach(function (e) {
          if (e === " ") clutter += `<span>&nbsp;</span>`;
          clutter += `<span>${e}</span>`;
        });
        para.innerHTML = clutter;
        gsap.set(".texthead span", { display: "inline-block" });
      }
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ltext",
        start: "top 100%",
        end: "bottom 50%",
        scrub: 0.5,
      },
    });
    tl.from(".texthead span", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    });
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".cards",
            start: "top 10%",
            scrub: 1,
          },
        });
        tl.fromTo(
          ".card",
          {
            y: 600,
            scale: 0.9,
          },
          {
            y: 0,
            scale: 1.1,
            duration: 0.5,
            ease: Power4.easeOut,
            transformOrigin: "bottom 50% -50",
          },
        );
      });
    },
    { scope: container },
  );

  return (
    <div
      data-color="cyan"
      className="relative container h-screen mx-auto w-full items-center justify-between gap-x-40 py-8 sm:flex"
    >
      <div className="ltext left-0 sm:sticky sm:top-[10%] sm:w-1/2">
        <p className="text-[2vh] leading-[2.5vh]">
          Pack Technology transforms ideas into digital reality, building custom
          web, mobile, and tailored software solutions. We put people first,
          simplifying complexity, accelerating capabilities, and improving
          outcomes through expert design and leadership.
        </p>
        <h1 className="texthead font-family-headings mt-4 mb-4 text-5xl leading-12 font-medium">
          Innovating and Delivering Digital Excellence
        </h1>
        <div className="bg-primary text-dark flex w-fit items-center gap-1 rounded-full p-3 px-6 text-white">
          <CallIcon size={15} />
          Contact
        </div>
      </div>
      <div
        ref={container}
        className="right cards flex items-center justify-center sm:w-1/2"
      >
        <Card />
      </div>
    </div>
  );
}

export default Craft;
