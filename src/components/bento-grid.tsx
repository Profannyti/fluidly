"use client";

import { Cormorant_Infant } from "next/font/google";
import { cn } from "@/lib/utils";

const cormorantInfant = Cormorant_Infant({
  variable: "--font-cormorant-infant",
  subsets: ["latin"],
  weight: "600",
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
                  cormorantInfant.className,
                  "text-lg sm:text-xl font-semibold leading-tight transition-colors duration-300"
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
                      cormorantInfant.className,
                      "text-3xl font-semibold leading-tight transition-colors duration-300"
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
