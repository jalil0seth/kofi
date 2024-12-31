import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ProductImageProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

export function ProductImage({ imageUrl, alt, className = "" }: ProductImageProps) {
  return (
    <Carousel className={`w-full ${className}`}>
      <CarouselContent>
        <CarouselItem>
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={alt}
              className="object-cover w-full h-full"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}