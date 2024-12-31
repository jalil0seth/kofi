import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { useState } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=800",
    alt: "Halloween Room Main View"
  },
  {
    url: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800",
    alt: "Halloween Room Detail 1"
  },
  {
    url: "https://images.unsplash.com/photo-1592089416462-2b0cb7da8379?q=80&w=800",
    alt: "Halloween Room Detail 2"
  },
  {
    url: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?q=80&w=800",
    alt: "Halloween Room Detail 3"
  }
];

interface ProductImageProps {
  imageUrl: string;
  alt: string;
}

export function ProductImage({ imageUrl }: ProductImageProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-purple-50 to-pink-50 p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,218,218,0.4),transparent)]" />
        <Carousel className="w-full" onSelect={setActiveIndex}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={1} className="bg-white rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/80 backdrop-blur-sm hover:bg-white" />
          <CarouselNext className="right-4 bg-white/80 backdrop-blur-sm hover:bg-white" />
        </Carousel>
      </div>
      
      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-4 gap-2 px-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative rounded-lg overflow-hidden aspect-square",
              "ring-2 ring-offset-2 transition-all duration-200",
              activeIndex === index 
                ? "ring-purple-600 opacity-100" 
                : "ring-transparent opacity-60 hover:opacity-100"
            )}
          >
            <img
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}