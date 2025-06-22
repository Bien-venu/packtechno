"use client";
import MetaBalls from "@/Animations/MetaBalls/MetaBalls";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CallIcon } from "hugeicons-react";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useEffect(() => {
    // Animate bar
    const animateBar = (
      triggerSelector: string,
      enterW: string,
      leaveW: string,
    ) => {
      gsap.to(".bar", {
        scrollTrigger: {
          trigger: triggerSelector,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          onEnter: () => gsap.to(".bar", { width: enterW, duration: 0.2 }),
          onLeaveBack: () => gsap.to(".bar", { width: leaveW, duration: 0.2 }),
        },
      });
    };

    animateBar("#part1", "35%", "0%");
    animateBar("#part2", "65%", "35%");
    animateBar("#part3", "100%", "65%");
  }, []);

  return (
    <div className="relative w-full">
      <div className="bar absolute top-0 right-0 -z-10 h-full bg-black" />

      <div className="pointer-events-none fixed top-0 left-0 -z-10 h-screen w-screen">
        <MetaBalls
          color="#ffffff"
          cursorBallColor="#ffffff"
          cursorBallSize={2}
          ballCount={15}
          animationSize={25}
          enableMouseInteraction={false}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
        />
      </div>

      <section
        id="part1"
        className="flex h-[80vh] flex-row items-center justify-between"
      >
        <div />
        <div className="flex w-[30%] flex-col gap-4 p-4">
          <h2 className="font-family-headings text-3xl font-medium text-white">
            LEARN. BUILD. LEAD.
          </h2>
          <p className="text-lg font-light text-white">
            Gain the skills to solve real world problems. Our courses and tools
            are designed to turn ideas into impact one line of code at a time.
          </p>
          <div className="text-dark flex w-fit items-center gap-1 rounded-md border border-white p-3 px-6 text-sm text-white">
            <CallIcon size={15} />
            Explore Courses
          </div>
        </div>
      </section>

      <section
        id="part2"
        className="flex h-[80vh] flex-row items-center justify-between"
      >
        <div className="flex w-[30%] flex-col gap-4 p-4">
          <h2 className="font-family-headings text-3xl font-medium text-black">
            INNOVATE FOR A BETTER WORLD.
          </h2>
          <p className="text-lg font-light text-black">
            We build solutions that matter. Join us in transforming global
            challenges into opportunities for growth.
          </p>
          <div className="text-dark flex w-fit items-center gap-1 rounded-md border border-black p-3 px-6 text-sm text-black">
            <CallIcon size={15} />
            See Our Projects
          </div>
        </div>
        <div />
      </section>

      <style jsx>{`
        .key {
          letter-spacing: -2vw;
          transition: transform 0.2s;
        }

        @keyframes pressDown {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </div>
  );
}
