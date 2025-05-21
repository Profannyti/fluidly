// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Caprasimo } from "next/font/google";
// import { usePathname } from "next/navigation";
// import { MenuIcon, Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { motion, AnimatePresence } from "framer-motion";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { NavbarSidebar } from "./navbar-sidebar";

// const caprasimo = Caprasimo({
//   variable: "--font-caprasimo",
//   subsets: ["latin"],
//   weight: "400",
// });

// interface NavbarItemProps {
//   href: string;
//   children: React.ReactNode;
//   isActive?: boolean;
// }

// const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.2, ease: "easeOut" }}
//       whileTap={{ scale: 0.95 }}
//       whileHover={{
//         x: 5,
//         transition: {
//           type: "spring",
//           stiffness: 400,
//           damping: 20,
//           mass: 0.5,
//         },
//       }}
//     >
//       <Button
//         asChild
//         variant="ghost"
//         className={cn(
//           "font-semibold text-base cursor-pointer",
//           isActive && "text-[#3FCAFF] hover:text-[#3FCAFF] dark:text-[#3FCAFF]"
//         )}
//       >
//         <Link href={href}>{children}</Link>
//       </Button>
//     </motion.div>
//   );
// };

// const NavbarItems = [
//   { href: "/", children: "Home" },
//   { href: "/about", children: "About" },
//   { href: "/features", children: "Features" },
//   { href: "/pricing", children: "Pricing" },
//   { href: "/contact", children: "Contact" },
// ];

// export const Navbar = () => {
//   const pathname = usePathname();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const { theme: themeFromHook, setTheme } = useTheme();
//   const [mountedTheme, setMountedTheme] = useState("light");

//   useEffect(() => {
//     setMountedTheme(themeFromHook || "light");
//   }, [themeFromHook]);

//   const navItemsVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const themeToggleVariants = {
//     initial: { rotate: -90, scale: 0 },
//     animate: { rotate: 0, scale: 1 },
//     exit: { rotate: 90, scale: 0 },
//   };

//   const handleThemeToggle = () => {
//     const newTheme = mountedTheme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     setMountedTheme(newTheme);
//   };

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="h-[80px] flex border-b-2 justify-between font-medium items-center px-6"
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.4, ease: "easeOut" }}
//       >
//         <Link href="/" className="pl-4 lg:pl-16 items-center flex gap-3">
//           <div
//             className={cn(
//               "text-3xl font-semibold text-nowrap text-[#3fcaff]",
//               caprasimo.className
//             )}
//           >
//             Fluidly.
//           </div>
//         </Link>
//       </motion.div>

//       <NavbarSidebar
//         items={NavbarItems}
//         open={isSidebarOpen}
//         onOpenChange={setIsSidebarOpen}
//       />

//       <motion.div
//         className="items-center gap-5 hidden lg:flex"
//         variants={navItemsVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {NavbarItems.map((item) => (
//           <NavbarItem
//             key={item.href}
//             href={item.href}
//             isActive={pathname === item.href}
//           >
//             {item.children}
//           </NavbarItem>
//         ))}
//       </motion.div>

//       <div className="flex items-center gap-4">
//         {/* Desktop Buttons */}
//         <div className="hidden lg:flex items-center gap-4 mr-36">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={handleThemeToggle}
//             className="cursor-pointer"
//           >
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={mountedTheme === "dark" ? "moon" : "sun"}
//                 variants={themeToggleVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 0.2 }}
//               >
//                 {mountedTheme === "dark" ? (
//                   <Moon className="h-8 w-8" />
//                 ) : (
//                   <Sun className="h-8 w-8" />
//                 )}
//               </motion.div>
//             </AnimatePresence>
//             <div className="sr-only">Toggle theme</div>
//           </Button>
//         </div>

//         {/* Mobile Menu Toggle and Theme Toggle */}
//         <div className="flex lg:hidden items-center gap-2">
//           <Button variant="ghost" size="icon" onClick={handleThemeToggle}>
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={mountedTheme === "dark" ? "moon" : "sun"}
//                 variants={themeToggleVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 0.2 }}
//               >
//                 {mountedTheme === "dark" ? (
//                   <Moon className="h-8 w-8" />
//                 ) : (
//                   <Sun className="h-8 w-8" />
//                 )}
//               </motion.div>
//             </AnimatePresence>
//             <div className="sr-only">Toggle theme</div>
//           </Button>

//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ duration: 0.2 }}
//           >
//             <Button
//               variant="ghost"
//               className="size-10"
//               onClick={() => setIsSidebarOpen(true)}
//             >
//               <motion.div
//                 animate={{ rotate: isSidebarOpen ? 90 : 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <MenuIcon className="size-6" />
//               </motion.div>
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };


// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
//  import { MenuIcon, Moon, Sun } from "lucide-react";
//  import { useTheme } from "next-themes";

// const Navbar = () => {
//   const { theme: themeFromHook, setTheme } = useTheme();
//   const [mountedTheme, setMountedTheme] = useState("light");
//   const [color, setColor] = useState(false);

//    const handleThemeToggle = () => {
//      const newTheme = mountedTheme === "dark" ? "light" : "dark";
//      setTheme(newTheme);
//      setMountedTheme(newTheme);
//    };

//   const changeColor = () => {
//     if (window.scrollY > 0) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

  
//     const themeToggleVariants = {
//      initial: { rotate: -90, scale: 0 },
//      animate: { rotate: 0, scale: 1 },
//      exit: { rotate: 90, scale: 0 },
//     };

//   useEffect(() => {
//     window.addEventListener("scroll", changeColor);
//     return () => {
//       window.removeEventListener("scroll", changeColor);
//     };
//   }, []);

//   return (
//     <div
//       className={`w-full py-[20px] px-[60px] sticky top-0 z-50 transition-colors duration-300 ease-in-out  ${
//         color ? "bg-black text-white" : "bg-transparent text-black"
//       }`}
//     >
//       <div className="flex justify-between items-center w-full ">
//         {/* Left: Logo */}
//         <div className="text-[28px] font-bold">
//           <Link href="/"><i>Fluidly.</i></Link>
//         </div>

//         {/* Center: Nav Links */}
//         <div className="flex max-[1000px]:hidden gap-[70px] text-[16px]">
//           <Link href="/research">Research</Link>
//           <Link href="/products">Products</Link>
//           <Link href="/studio">Studio</Link>
//           <Link href="/company">Company</Link>
//         </div>

//         {/* Right: Button */}
//         <Link href="/get-started">
//           <button className="text-[16px] rounded-[30px] border-[2px] px-[20px] py-[14px] w-[150px] h-[50px] flex items-center justify-center cursor-pointer">
//             Get Started
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



//final navbar with dark and light mode functionality.
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { IBM_Plex_Serif, Inter } from "next/font/google";

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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    setMounted(true); // ensures hydration match for theme icon
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  // Determine navbar classes based on theme and scroll
  const getNavbarClasses = () => {
  if (!scrolled) {
    return "bg-transparent text-black dark:text-white";
  }

  if (theme === "dark") {
    return "bg-[#1e1e1e] text-white"; // transparent when scrolled in dark mode
  } else {
    return "bg-black text-white"; // black background when scrolled in light mode
  }
};


  return (
    <div
      className={`w-full py-[20px] px-[60px] sticky top-0 z-50 transition-colors duration-300 ease-in-out ${getNavbarClasses()}`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Left: Logo */}
        <div className="text-[28px] font-bold">
          <Link href="/">
            <i className={`${IBMPlexSerif.className} italic`}>Fluidly.</i>
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className={`flex max-[1000px]:hidden gap-[70px] text-[16px] ${inter.className}`}>
          <Link href="/research">Research</Link>
          <Link href="/products">Products</Link>
          <Link href="/studio">Studio</Link>
          <Link href="/company">Company</Link>
        </div>

        {/* Right: Theme Toggle and Button */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button onClick={handleThemeToggle} className="cursor-pointer">
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: 90, scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <Moon className="h-6 w-6" />
                  ) : (
                    <Sun className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

