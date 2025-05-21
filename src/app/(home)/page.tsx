"use client";

import BentoGrid from "@/components/bento-grid";
import { BlogCarousel } from "@/components/carousel";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IBM_Plex_Serif, Inter } from "next/font/google";

import Banner from "@/components/Banner";
import Herocard from "@/components/Herocard";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const IBMPlexSerif = IBM_Plex_Serif({
  variable: "--font-IBMPlexSerif",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"],
  style: ["normal", "italic"],
});

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  const appleEase = [0.16, 1, 0.3, 1];

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: appleEase },
    },
  };

  const fluidlyVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: appleEase, delay: 0.2 },
    },
  };

  const subtextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: appleEase, delay: 0.4 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="py-10 pb-20 px-8 sm:px-20 flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center relative w-full">
        <div className="my-8 max-sm:my-4">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className={cn(
              "text-7xl max-sm:text-5xl font-bold tracking-tight text-black dark:text-white",
              inter.className
            )}
          >
            It&apos;s not Magic.
            <motion.div
              variants={fluidlyVariants}
              initial="hidden"
              animate="visible"
              className="mt-2"
            >
              It&apos;s <span className={`text-[#3FCAFF] ${IBMPlexSerif.className} italic font-light`}>Fluidly.</span>
            </motion.div>
          </motion.div>

          <motion.p
            variants={subtextVariants}
            initial="hidden"
            animate="visible"
            className={`text-md font-normal text-gray-700 dark:text-gray-300 max-w-full pt-4 ${IBMPlexSerif.className}`}
          >
            Fluidly is a collection of best practices that designers can
            consider when building user interfaces.
          </motion.p>
        </div>
        <BentoGrid className="my-10" />
        <BlogCarousel className="my-10" />
        <br />
        <Herocard />
        <Banner/>
      </main>
    </div>
  );
}
