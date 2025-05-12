import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";
import { Caprasimo } from "next/font/google";
import Link from "next/link";

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
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b text-nowrap">
          <div className="flex">
            <SheetTitle>
              <Link href="/" className="flex items-center gap-3">
                <span
                  className={cn(
                    "text-2xl font-semibold text-nowrap",
                    caprasimo.className
                  )}
                >
                  Fluidly.
                </span>
              </Link>
            </SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full text-left p-4 pl-6 hover:bg-[#3FCAFF] flex items-center text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t"></div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
