import { ProductGallery } from './ProductGallery';
import { PaymentCard } from './PaymentCard';
import { Description } from './Description';
import { Reviews } from './Reviews';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Star, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MobileProductViewProps {
  product: {
    title: string;
    description: string;
    credits: string;
    salesCount: number;
    images: Array<{ url: string; alt: string; }>;
  };
  formData: {
    name: string;
    email: string;
    amount: string;
  };
  onFormChange: (data: any) => void;
}

export function MobileProductView({ product, formData, onFormChange }: MobileProductViewProps) {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <div className="md:hidden">
      <ProductGallery images={product.images} />
      
      <div className="px-4 py-6 space-y-6 pb-24">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-gray-100 text-gray-800">
              <Star className="h-3 w-3 mr-1" /> Best Seller
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-800">
              <Package className="h-3 w-3 mr-1" /> Digital Download
            </Badge>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>

          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
            <span className="text-gray-600">({product.salesCount} sales)</span>
          </div>
        </div>

        <Description
          text={product.description}
          credits={product.credits}
        />

        <Reviews />

        {/* Fixed Payment Button */}
        <Sheet open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
          <SheetTrigger asChild>
            <Button 
              size="lg"
              className="fixed bottom-4 left-4 right-4 h-14 text-lg font-medium bg-black hover:bg-gray-800 shadow-lg z-50"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Purchase Now
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[90vh] rounded-t-3xl">
            <div className="max-h-full overflow-y-auto py-6">
              <PaymentCard
                formData={formData}
                onFormChange={onFormChange}
                onPayment={() => setIsPaymentOpen(false)}
                salesCount={product.salesCount}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}