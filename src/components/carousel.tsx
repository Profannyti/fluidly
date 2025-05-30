import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function BlogCarousel({ className }: { className?: string }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className={cn(
        "w-full max-w-[820px] max-sm:max-w-[280px] max-lg:max-w-[500px]",
        className
      )}
    >
      <CarouselContent className="">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-4 sm:basis-1/2 md:basis-1/2 lg:basis-1/4"
          >
            <Card className="h-full bg-[#88A9FF]">
              <CardContent className="flex h-[250px] sm:h-full aspect-square items-center justify-center p-0">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
