"use client";

import { motion, useReducedMotion } from "framer-motion";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

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

const layout = [
  [
    {
      width: "500px",
      height: "300px",
      title: "It’s not magic. It’s Fluidly.",
      color: "#FF8BDC",
      fluidlyColor: "#773E8D",
    },
    {
      width: "300px",
      height: "300px",
      title: "It’s not magic. It’s Fluidly.",
      color: "#773E8D",
      fluidlyColor: "#FF8BDC",
    },
  ],
  [
    {
      width: "300px",
      height: "300px",
      title: "It’s not magic. It’s Fluidly.",
      color: "#3FCBFF",
      fluidlyColor: "#142042",
    },
    {
      width: "500px",
      height: "300px",
      title: "It’s not magic. It’s Fluidly.",
      color: "#82DBE2",
      fluidlyColor: "#1F596E",
    },
  ],
  [
    {
      width: "500px",
      height: "300px",
      title: "It’s not magic. It’s Fluidly.",
      color: "#1F596E",
      fluidlyColor: "#3FCAFF",
    },
    {
      width: "300px",
      height: "300px",
      title: "It’s not magic. It’s Fluidly.",
      color: "#8FA1C2",
      fluidlyColor: "#34519E",
    },
  ],
];

interface Props {
  className?: string;
}

const BentoGrid = ({ className }: Props) => {
  const prefersReducedMotion = useReducedMotion();
  const regex = /(Fluidly)(\.?)/i;

  const smoothEase = [0.25, 0.1, 0.25, 1];
  const appleEase = [0.16, 1, 0.3, 1];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.4, ease: appleEase },
    },
  };

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Single-column layout for sm and below */}
      <div className="flex flex-col gap-4 md:hidden">
        {layout.flat().map((card, cardIndex) => {
          const parts = card.title.split(regex);

          return (
            <motion.div
              key={cardIndex}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { delay: cardIndex * 0.1 }
              }
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      y: -5,
                      scale: 1.02,
                      boxShadow: "0 4px 10px rgba(63, 202, 255, 0.15)",
                      transition: { duration: 0.3, ease: smoothEase },
                    }
              }
              whileTap={
                prefersReducedMotion
                  ? {}
                  : {
                      scale: 0.98,
                      transition: { duration: 0.15, ease: smoothEase },
                    }
              }
              className="rounded-2xl flex items-end text-white p-5 w-full"
              style={{
                height: "200px",
                backgroundColor: card.color,
              }}
            >
              <span
                className={cn(
                  IBMPlexSerif.className,
                  "text-2xl font-semibold leading-tight transition-colors duration-300"
                )}
              >
                {parts[0]}
                <span style={{ color: card.fluidlyColor }}>{parts[1]}</span>
                {parts[2]}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Row-based layout for md and above */}
      <div className="hidden md:flex md:flex-col md:gap-4">
        {layout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col gap-4 md:flex-row md:flex-1"
          >
            {row.map((card, cardIndex) => {
              const parts = card.title.split(regex);

              return (
                <motion.div
                  key={`${rowIndex}-${cardIndex}`}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { delay: (rowIndex * row.length + cardIndex) * 0.1 }
                  }
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          y: -5,
                          scale: 1.02,
                          boxShadow: "0 4px 10px rgba(63, 202, 255, 0.15)",
                          transition: { duration: 0.3, ease: smoothEase },
                        }
                  }
                  whileTap={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: 0.98,
                          transition: { duration: 0.15, ease: smoothEase },
                        }
                  }
                  className="rounded-2xl flex items-end text-white p-5 md:flex-1 lg:flex-none"
                  style={{
                    width: card.width, // Applies only at lg and above
                    height: card.height,
                    backgroundColor: card.color,
                  }}
                >
                  <span
                    className={cn(
                      IBMPlexSerif.className,
                      "text-2xl font-semibold leading-tight transition-colors duration-300"
                    )}
                  >
                    {parts[0]}
                    <span style={{ color: card.fluidlyColor }}>{parts[1]}</span>
                    {parts[2]}
                  </span>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
