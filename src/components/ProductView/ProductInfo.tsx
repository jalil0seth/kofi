import { PaymentCard } from './PaymentCard';
import { Description } from './Description';
import { Reviews } from './Reviews';
import { Badge } from "@/components/ui/badge";
import { Package, Star } from "lucide-react";

interface ProductInfoProps {
  product: {
    title: string;
    description: string;
    credits: string;
    salesCount: number;
  };
  formData: {
    name: string;
    email: string;
    amount: string;
  };
  onFormChange: (data: any) => void;
}

export function ProductInfo({ product, formData, onFormChange }: ProductInfoProps) {
  return (
    <div className="space-y-8 sticky top-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
            <Star className="h-3 w-3 mr-1" /> Best Seller
          </Badge>
          <Badge variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
            <Package className="h-3 w-3 mr-1" /> Digital Download
          </Badge>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
        
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

      <PaymentCard
        formData={formData}
        onFormChange={onFormChange}
        onPayment={() => {}}
        salesCount={product.salesCount}
      />

      <Description
        text={product.description}
        credits={product.credits}
      />

      <Reviews />
    </div>
  );
}