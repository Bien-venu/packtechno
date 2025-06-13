"use client";
import MetaBalls from "@/Animations/MetaBalls/MetaBalls";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Code, Database, Shield } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

// Animated geometric shape component
function GeometricShape({
  className,
  size = 100,
  color = "from-primary/10 to-primary/10",
  delay = 0,
  duration = 20,
  rotate = 0,
  pulseIntensity = 0.2,
}: {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
  rotate?: number;
  pulseIntensity?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotate - 20 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          scale: [1, 1 + pulseIntensity, 1],
          rotate: [rotate, rotate + 5, rotate],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width: size, height: size }}
        className="relative"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} rounded-xl border border-white/10 backdrop-blur-sm`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
      </motion.div>
    </motion.div>
  );
}

// Animated tech icon component
function TechIcon({
  icon,
  delay = 0,
  className,
}: {
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={cn(
        "absolute rounded-xl border border-white/10 bg-black/30 p-3 shadow-xl backdrop-blur-md",
        className,
      )}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}

// Main hero section component
export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative z-0 flex min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Dynamic background that follows mouse */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          // radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.1) 0%, rgba(0, 0, 0, 0) 70%)
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 73, 245, 0.1) 0%, rgba(0, 0, 0, 0) 70%)`,
          transition: "background 0.3s ease-out",
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Digital circuit grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="from-primary/30 absolute inset-0 bg-gradient-to-br via-transparent to-purple-500/20"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{ backgroundSize: "200% 200%" }}
          />
        </div>

        {/* Geometric shapes */}
        <GeometricShape
          size={200}
          color="from-primary/5 to-primary/10"
          delay={0.2}
          rotate={15}
          className="top-[10%] left-[5%]"
        />
        <GeometricShape
          size={150}
          color="from-primary/5 to-primary/10"
          delay={0.4}
          rotate={-10}
          className="right-[10%] bottom-[15%]"
        />
        <GeometricShape
          size={100}
          color="from-primary/10 to-transparent"
          delay={0.6}
          rotate={25}
          className="top-[30%] right-[20%]"
        />

        {/* Floating tech icons */}
        <TechIcon
          icon={<Code className="text-primary h-6 w-6" />}
          delay={1.2}
          className="top-[25%] left-[15%]"
        />
        <TechIcon
          icon={<Database className="text-primary h-6 w-6" />}
          delay={1.4}
          className="bottom-[20%] left-[25%]"
        />
        <TechIcon
          icon={<Shield className="text-primary h-6 w-6" />}
          delay={1.6}
          className="top-[40%] right-[15%]"
        />

        {/* Animated particles */}
        {typeof window !== "undefined" &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                opacity: Math.random() * 0.5 + 0.1,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="bg-primary absolute h-1 w-1 rounded-full"
              style={{
                boxShadow: "0 0 10px rgba(249, 115, 22, 0.5)",
              }}
            />
          ))}

        {/* Digital circuit lines */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="from-primary/50 absolute top-[20%] left-[10%] h-[1px] w-[40%] bg-gradient-to-r to-transparent"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="from-primary/50 absolute top-[20%] left-[10%] h-[30%] w-[1px] bg-gradient-to-b to-transparent"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="from-primary/50 absolute right-[10%] bottom-[20%] h-[1px] w-[30%] bg-gradient-to-l to-transparent"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="from-primary/50 absolute right-[10%] bottom-[20%] h-[25%] w-[1px] bg-gradient-to-t to-transparent"
          />
        </div>
      </div>

      {/* Main content */}

      <div className="relative mt-72 flex h-fit w-full flex-col items-center gap-8 pb-20 text-white">
        <div className="z-10 flex w-3/4 flex-col items-center justify-center gap-4 text-center">
          {/* Decorative tech element at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="transform"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(249, 115, 22, 0.4)",
                    "0 0 15px rgba(249, 115, 22, 0.6)",
                    "0 0 0 rgba(249, 115, 22, 0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="bg-primary h-2 w-2 rounded-full"
              />
              <div className="from-primary/80 h-[1px] w-12 bg-gradient-to-r to-transparent" />
              <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/60 backdrop-blur-md">
                Grow with us.
              </div>
              <div className="from-primary/80 h-[1px] w-12 bg-gradient-to-l to-transparent" />
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(249, 115, 22, 0.4)",
                    "0 0 15px rgba(249, 115, 22, 0.6)",
                    "0 0 0 rgba(249, 115, 22, 0.4)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
                className="bg-primary h-2 w-2 rounded-full"
              />
            </div>
          </motion.div>
          <h1 className="font-family-headings text-7xl leading-16 font-semibold tracking-tighter">
            Empowering Tech <br /> Talent for Global Impact
          </h1>
          <p className="leading-5 font-light text-white/70">
            Pack Technology is committed to addressing pressing global
            challenges through innovative tech solutions,
            <br />
            empowering individuals with the knowledge and skills they need to
            succeed and collaborates with international organizations for wider
            impact.
          </p>
        </div>
        <div className="relative container mx-auto flex h-fit w-full items-center justify-center">
          <div className="flex h-[30rem] w-full items-center justify-center text-center">
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
          <div className="absolute bottom-0 h-20 w-full bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="z-20 flex flex-col items-center justify-center gap-2 text-center text-sm">
          <h4 className="text-base text-white/70">
            Comprehensive Digital Solutions for Your Business:
          </h4>
          <ul className="flex items-center gap-6">
            <li>. Custom Web & Mobile Development</li>
            <li>. Data-Driven Insights & Analytics</li>
            <li>. Intuitive User Experiences</li>
            <li>. Expert Project Leadership</li>
            <li>. Tailored Software Solutions</li>
            <li>. Transforming Ideas into Reality</li>
          </ul>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
    </div>
  );
}
