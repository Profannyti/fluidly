import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#53bd0c] to-[#FFFFFF] dark:from-[#1E2A44] dark:to-[#121826] font-[family-name:var(--font-geist-sans)]">
      {/* Minimalistic Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1E2A44]/80 backdrop-blur-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
          </div>
          <div className="flex gap-3">
            <Button
              variant="ghost"
              className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors"
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24 pb-20 px-8 sm:px-20 flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-black dark:text-white">
          Welcome to Fuddii by R&P
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
          Create elegant, modern web experiences with Next.js and shadcn.
          Simplicity meets sophistication.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Button
            size="lg"
            className="bg-[#3B82F6] text-white hover:bg-[#2563EB] rounded-lg text-base font-medium transition-colors"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 rounded-lg text-base font-medium transition-colors"
          >
            Learn More
          </Button>
        </div>
      </main>

      {/* Content Section */}
      <section className="px-8 pb-20 sm:px-20 flex flex-col gap-12 items-center">
        <ol className="list-inside list-decimal text-sm text-gray-600 dark:text-gray-300 font-[family-name:var(--font-geist-mono)] bg-white dark:bg-[#1E2A44] rounded-lg p-6 max-w-md shadow-sm">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="bg-[#3B82F6] text-white hover:bg-[#2563EB] rounded-lg font-medium text-sm sm:text-base h-10 px-5 flex items-center gap-2 transition-colors"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy now
          </a>
          <a
            className="border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 rounded-lg font-medium text-sm sm:text-base h-10 px-5 flex items-center transition-colors"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 sm:px-20 flex gap-6 flex-wrap items-center justify-center bg-white/50 dark:bg-[#1E2A44]/50 backdrop-blur-sm">
        <a
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
        <Button
          variant="ghost"
          className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-medium"
        >
          Hello Prantik
        </Button>
      </footer>
    </div>
  );
}
