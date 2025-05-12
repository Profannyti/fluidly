import { cn } from "@/lib/utils";
import { Caprasimo } from "next/font/google";

const caprasimo = Caprasimo({
  variable: "--font-caprasimo",
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="pt-10 pb-20 px-8 sm:px-20 flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
        <div
          className={cn(
            "text-7xl max-sm:text-5xl font-bold tracking-tight text-black dark:text-white",
            caprasimo.className
          )}
        >
          It&apos;s not Magic.
          <div className="mt-2">
            It&apos;s <span className="text-[#3FCAFF]">Fluidly.</span>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
          Fluidly is a collection of best practices that designers can consider
          when building user interfaces.
        </p>
      </main>
    </div>
  );
}
