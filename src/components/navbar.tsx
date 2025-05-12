"use client";

import Link from "next/link";
import { useState } from "react";
import { Caprasimo } from "next/font/google";
import { usePathname } from "next/navigation";
import { MenuIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./navbar-sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const caprasimo = Caprasimo({
  variable: "--font-caprasimo",
  subsets: ["latin"],
  weight: "400",
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      whileTap={{ scale: 0.95 }}
      whileHover={{
        x: 5,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 20,
          mass: 0.5,
        },
      }}
    >
      <Button
        asChild
        variant="ghost"
        className={cn(
          "font-semibold text-base cursor-pointer",
          isActive && "text-[#3FCAFF] hover:text-[#3FCAFF] dark:text-[#3FCAFF]"
        )}
      >
        <Link href={href}>{children}</Link>
      </Button>
    </motion.div>
  );
};

const NavbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { setTheme } = useTheme();

  const navItemsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const themeToggleVariants = {
    initial: { rotate: -90, scale: 0 },
    animate: { rotate: 0, scale: 1 },
    exit: { rotate: 90, scale: 0 },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-[80px] flex border-b-2 justify-between font-medium items-center px-4 lg:px-0"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Link href="/" className="pl-4 lg:pl-16 items-center flex gap-3">
          <span
            className={cn(
              "text-3xl font-semibold text-nowrap text-[#3fcaff]",
              caprasimo.className
            )}
          >
            Fluidly.
          </span>
        </Link>
      </motion.div>

      <NavbarSidebar
        items={NavbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <motion.div
        className="items-center gap-5 hidden lg:flex"
        variants={navItemsVariants}
        initial="hidden"
        animate="visible"
      >
        {NavbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </motion.div>

      <div className="flex items-center gap-4">
        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4 mr-16">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={useTheme().theme === "dark" ? "moon" : "sun"}
                    variants={themeToggleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  >
                    {useTheme().theme === "dark" ? (
                      <Moon className="h-[1.2rem] w-[1.2rem]" />
                    ) : (
                      <Sun className="h-[1.2rem] w-[1.2rem]" />
                    )}
                  </motion.div>
                </AnimatePresence>
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Toggle and Theme Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={useTheme().theme === "dark" ? "moon" : "sun"}
                    variants={themeToggleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  >
                    {useTheme().theme === "dark" ? (
                      <Moon className="h-[1.2rem] w-[1.2rem]" />
                    ) : (
                      <Sun className="h-[1.2rem] w-[1.2rem]" />
                    )}
                  </motion.div>
                </AnimatePresence>
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="ghost"
              className="size-10"
              onClick={() => setIsSidebarOpen(true)}
            >
              <motion.div
                animate={{ rotate: isSidebarOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <MenuIcon className="size-6" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};
