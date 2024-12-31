import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductImageProps {
  imageUrl: string;
  alt: string;
}

export function ProductImage({ imageUrl, alt }: ProductImageProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-purple-50 to-pink-50 p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,218,218,0.4),transparent)]" />
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <AspectRatio ratio={9/16} className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <img
                src={imageUrl}
                alt={alt}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}