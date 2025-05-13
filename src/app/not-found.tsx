import { Caprasimo } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const caprasimo = Caprasimo({
  variable: "--font-caprasimo",
  subsets: ["latin"],
  weight: "400",
});

export default function NotFound() {
  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center bg-gradient-to-br bg-neutral-950",
        caprasimo.className
      )}
    >
      <div className="text-center flex flex-col items-center max-w-lg w-full mb-20">
        <div
          className={cn(
            "text-9xl sm:text-[10rem] font-bold text-white tracking-tight",
            caprasimo.className
          )}
        >
          404
        </div>
        <div className="text-4xl sm:text-5xl text-gray-300">Page Not Found</div>
        <Link href="/">
          <Button
            className="bg-[#3FCAFF] cursor-pointer text-white rounded-md text-base hover:bg-[#00B9FF] transition-all duration-300 mt-6"
            size="lg"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
