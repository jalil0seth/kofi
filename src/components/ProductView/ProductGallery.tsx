import { useState } from 'react';
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Image {
  url: string;
  alt: string;
}

interface ProductGalleryProps {
  images: Image[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative">
        <AspectRatio ratio={1} className="bg-gray-50 rounded-xl overflow-hidden">
          <img
            src={images[activeIndex].url}
            alt={images[activeIndex].alt}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative rounded-lg overflow-hidden",
              "ring-2 ring-offset-2 transition-all duration-200",
              activeIndex === index 
                ? "ring-black opacity-100" 
                : "ring-transparent opacity-60 hover:opacity-100"
            )}
          >
            <AspectRatio ratio={1}>
              <img
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </button>
        ))}
      </div>
    </div>
  );
}