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
      image: "/images/gradients/acid/01.jpg",
      grayscale: false,
    },
    {
      width: "300px",
      height: "300px",
      title: "It’s not magic. It’s Fluidly.",
      image: "/images/gradients/acid/04.jpg",
      grayscale: true,
    },
  ],
  [
    {
      width: "300px",
      height: "300px",
      title: "It’s not magic. It’s Fluidly.",
      image: "/images/gradients/acid/09.jpg",
      grayscale: true,
    },
    {
      width: "500px",
      height: "300px",
      title: "It’s not magic. It’s Fluidly.",
      image: "/images/gradients/acid/04.jpg",
      grayscale: false,
    },
  ],
  [
    {
      width: "500px",
      height: "300px",
      title: "It’s not magic. It’s Fluidly.",
      image: "/images/gradients/acid/08.jpg",
      grayscale: false,
    },
    {
      width: "300px",
      height: "300px",
      title: "It’s not magic. It’s Fluidly.",
      image: "/images/gradients/acid/01.jpg",
      grayscale: true,
    },
  ],
];

interface Props {
  className?: string;
}

const BentoGrid = ({ className }: Props) => {
  const regex = /(Fluidly)(\.?)/i;

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Single-column layout for sm and below */}
      <div className="flex flex-col gap-4 md:hidden">
        {layout.flat().map((card, cardIndex) => {
          const parts = card.title.split(regex);

          return (
            <div
              key={cardIndex}
              className={cn(
                "flex items-end text-white p-5 w-full",
                card.grayscale && "grayscale"
              )}
              style={{
                height: "200px",
                backgroundImage: `url(${card.image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span
                className={cn(
                  IBMPlexSerif.className,
                  "text-2xl font-semibold leading-tight transition-colors duration-300"
                )}
              >
                {parts[0]}
                {parts[1]}
                {parts[2]}
              </span>
            </div>
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
                <div
                  key={`${rowIndex}-${cardIndex}`}
                  className={cn(
                    "flex items-end text-white p-5 md:flex-1 lg:flex-none",
                    card.grayscale && "grayscale"
                  )}
                  style={{
                    width: card.width,
                    height: card.height,
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span
                    className={cn(
                      IBMPlexSerif.className,
                      "text-2xl font-semibold leading-tight transition-colors duration-300"
                    )}
                  >
                    {parts[0]}
                    {parts[1]}
                    {parts[2]}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
