"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Caprasimo } from "next/font/google";
import { usePathname } from "next/navigation";
import { MenuIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./navbar-sidebar";

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
  const { theme: themeFromHook, setTheme } = useTheme();
  const [mountedTheme, setMountedTheme] = useState("light");

  useEffect(() => {
    setMountedTheme(themeFromHook || "light");
  }, [themeFromHook]);

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

  const handleThemeToggle = () => {
    const newTheme = mountedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setMountedTheme(newTheme);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-[80px] flex border-b-2 justify-between font-medium items-center px-6"
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
        <div className="hidden lg:flex items-center gap-4 mr-36">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleThemeToggle}
            className="cursor-pointer"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mountedTheme === "dark" ? "moon" : "sun"}
                variants={themeToggleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                {mountedTheme === "dark" ? (
                  <Moon className="h-8 w-8" />
                ) : (
                  <Sun className="h-8 w-8" />
                )}
              </motion.div>
            </AnimatePresence>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile Menu Toggle and Theme Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handleThemeToggle}>
            <AnimatePresence mode="wait">
              <motion.div
                key={mountedTheme === "dark" ? "moon" : "sun"}
                variants={themeToggleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                {mountedTheme === "dark" ? (
                  <Moon className="h-8 w-8" />
                ) : (
                  <Sun className="h-8 w-8" />
                )}
              </motion.div>
            </AnimatePresence>
            <span className="sr-only">Toggle theme</span>
          </Button>

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
