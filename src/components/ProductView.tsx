import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Share2, Package, Fire } from 'lucide-react';

export default function ProductView() {
  const [amount, setAmount] = useState<string>('');

  const handlePayment = async () => {
    // Initialize PayPal payment
    const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
    // Add PayPal payment logic here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Layout */}
      <div className="hidden md:block container mx-auto py-8 px-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=800"
                      alt="Product Preview"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=pixebo" alt="Creator" />
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold">Halloween Room Pixel Art</h2>
                  <p className="text-sm text-muted-foreground">by pixebo</p>
                </div>
              </div>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            <Card className="p-6">
              <h3 className="font-medium mb-4">How much would you like to pay?</h3>
              <Input
                type="text"
                placeholder="Free or more"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mb-4"
              />
              <Button className="w-full" onClick={handlePayment}>
                Get Now
              </Button>
              
              <div className="flex items-center gap-2 mt-4">
                <Badge variant="secondary" className="gap-1">
                  <Fire className="h-3 w-3" /> 335 sold
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Package className="h-3 w-3" /> Hi-res PNG included
                </Badge>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-muted-foreground">
                This is a pixel art wallpaper showcasing a Halloween themed room. Each download contains
                a hi-resolution still image. This witchy, Halloween room interior was created as a 31-day
                October art challenge. Each item was suggested by commenters on Instagram and TikTok.
              </p>
              <p className="text-muted-foreground">
                This wallpaper was drawn by pixebo in procreate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="relative aspect-[9/16] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=800"
                  alt="Product Preview"
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="p-4 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=pixebo" alt="Creator" />
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">Halloween Room Pixel Art</h2>
                <p className="text-sm text-muted-foreground">by pixebo</p>
              </div>
            </div>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          <Card className="p-4">
            <h3 className="font-medium mb-4">How much would you like to pay?</h3>
            <Input
              type="text"
              placeholder="Free or more"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mb-4"
            />
            <Button className="w-full" onClick={handlePayment}>
              Get Now
            </Button>
            
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <Badge variant="secondary" className="gap-1">
                <Fire className="h-3 w-3" /> 335 sold
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Package className="h-3 w-3" /> Hi-res PNG included
              </Badge>
            </div>
          </Card>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="text-muted-foreground">
              This is a pixel art wallpaper showcasing a Halloween themed room. Each download contains
              a hi-resolution still image. This witchy, Halloween room interior was created as a 31-day
              October art challenge. Each item was suggested by commenters on Instagram and TikTok.
            </p>
            <p className="text-muted-foreground">
              This wallpaper was drawn by pixebo in procreate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}