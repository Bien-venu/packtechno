// components/ImageSlider.tsx
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import { CallIcon } from "hugeicons-react";

interface Service {
  id: number;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

interface ImageSliderProps {
  services: Service[];
}

const Services: React.FC<ImageSliderProps> = ({ services }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const selectAll = (e: string) => document.querySelectorAll(e);

    const tracks = selectAll(".sticky-element");

    tracks.forEach((track) => {
      const trackWrapper = track.querySelectorAll<HTMLElement>(".track");
      const allPanels = track.querySelectorAll<HTMLElement>(".panel-wide"); // Select panels to apply parallax on content

      const trackWrapperWidth = () => {
        let width = 0;
        trackWrapper.forEach((el) => (width += el.offsetWidth));
        return width;
      };

      gsap.defaults({
        ease: "none",
      });

      const scrollTween = gsap.to(trackWrapper, {
        x: () => -trackWrapperWidth() + window.innerWidth,
        scrollTrigger: {
          trigger: track,
          pin: true,
          scrub: 1,
          start: "center center",
          end: () => "+=" + (track.scrollWidth - window.innerWidth),
          onRefresh: (self) =>
            (self.getTween() as gsap.core.Tween).resetTo("totalProgress", 0),
          invalidateOnRefresh: true,
          id: "id-one",
        },
      });

      allPanels.forEach((panel) => {
        const img = panel.querySelector<HTMLElement>(".image");
        const title = panel.querySelector<HTMLElement>(".service-title");
        const description = panel.querySelector<HTMLElement>(
          ".service-description",
        );

        // Parallax for image
        if (img) {
          gsap.fromTo(
            img,
            {
              x: "-20vw",
            },
            {
              x: "20vw",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left right",
                end: "right left",
                scrub: true,
                invalidateOnRefresh: true,
                onRefresh: (self) => {
                  if (self.start < 0) {
                    self.animation?.progress(
                      gsap.utils.mapRange(self.start, self.end, 0, 1, 0),
                    );
                  }
                },
                id: `img-parallax-${panel.dataset.id}`, // Unique ID for each parallax
              },
            },
          );
        }

        // Parallax for title and description (optional, adjust values as needed)
        if (title) {
          gsap.fromTo(
            title,
            {
              y: "50px",
              opacity: 0,
            },
            {
              y: "0px",
              opacity: 1,
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "center right", // Appears as panel enters center
                end: "center center", // Fully visible by the time panel reaches center
                scrub: true,
                id: `title-parallax-${panel.dataset.id}`,
              },
            },
          );
        }

        if (description) {
          gsap.fromTo(
            description,
            {
              y: "70px",
              opacity: 0,
            },
            {
              y: "0px",
              opacity: 1,
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "center right",
                end: "center center",
                scrub: true,
                id: `desc-parallax-${panel.dataset.id}`,
              },
            },
          );
        }
      });
    });

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Removed smooth: true as it's not a valid option for LenisOptions in this version
    });

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function for ScrollTrigger and Lenis
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, [services]); // Rerun effect if services data changes

  return (
    <div>
      <section className="sticky-element items- bg-primary/30 flex h-fit w-full flex-col justify-start gap-12 overflow-hidden py-20">
        <h2 className="font-family-headings container mx-auto mt-4 mb-4 text-3xl leading-12 font-medium">
          Services We Provide
        </h2>
        <div className="track w-fit flex-none">
          <div className="track-flex mx-[50vw] flex h-fit items-center justify-start gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                data-id={service.id}
                className="panel-wide relative flex h-[34rem] w-[27rem] flex-none flex-col items-center justify-end gap-8 overflow-hidden rounded-4xl bg-black p-8 text-white shadow-lg"
              >
                <div className="image-clippy flex h-72 w-80 overflow-hidden rounded-xl">
                  <Image
                    className="z-0 h-full w-full object-cover"
                    src={service.image}
                    alt={service.title}
                    width={2000}
                    height={2000}
                  />
                </div>
                <div className="bg-opacity-60 relative z-10 rounded-md p-4">
                  <h2 className="service-title mb-2 line-clamp-1 text-xl text-ellipsis">
                    {service.title}
                  </h2>
                  <p className="service-description line-clamp-3 max-w-xl text-[0.9rem] text-ellipsis text-white/70">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto flex text-sm text-white">
          <div className="bg-primary text-dark flex w-fit items-center gap-1 rounded-md p-3 px-6 text-white">
            <CallIcon size={15} />
            Contact
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
