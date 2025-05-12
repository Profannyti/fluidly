"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Caprasimo } from "next/font/google";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";

const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: "400",
});

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  const prefersReducedMotion = useReducedMotion();

  // Sidebar animation variants
  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.25, ease: "easeOut" },
    },
    closed: {
      x: "10%",
      opacity: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.2, ease: "easeIn" },
    },
  };

  // Nav item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.25, ease: "easeOut" },
    },
  };

  // Logo animation variants
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <Sheet open={open} onOpenChange={onOpenChange}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={
              prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }
            }
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => onOpenChange(false)}
          >
            <SheetContent
              side="right"
              className="p-0 transition-none"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                variants={sidebarVariants}
                initial="closed"
                animate="open"
              >
                <SheetHeader className="p-4 border-b text-nowrap">
                  <div className="flex">
                    <SheetTitle>
                      <motion.div
                        variants={logoVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link href="/" className="flex items-center gap-3">
                          <span
                            className={cn(
                              "text-2xl font-semibold text-nowrap text-[#3fcaff]",
                              caprasimo.className
                            )}
                          >
                            Fluidly.
                          </span>
                        </Link>
                      </motion.div>
                    </SheetTitle>
                  </div>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                  {items.map((item) => (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={
                        prefersReducedMotion
                          ? {}
                          : { scale: 1.02, transition: { duration: 0.15 } }
                      }
                      whileTap={
                        prefersReducedMotion
                          ? {}
                          : { scale: 0.98, transition: { duration: 0.15 } }
                      }
                    >
                      <Link
                        href={item.href}
                        className="w-full text-left p-4 pl-6 hover:bg-[#3FCAFF]/10 flex items-center text-base font-medium transition-colors"
                        onClick={() => onOpenChange(false)}
                      >
                        {item.children}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="border-t"></div>
                </ScrollArea>
              </motion.div>
            </SheetContent>
          </motion.div>
        </Sheet>
      )}
    </AnimatePresence>
  );
};
