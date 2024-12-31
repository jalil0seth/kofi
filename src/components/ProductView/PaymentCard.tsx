import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { initializePayPal } from "@/lib/paypal";

interface PaymentCardProps {
  amount: string;
  onAmountChange: (value: string) => void;
  onPayment: () => void;
  salesCount: number;
}

export function PaymentCard({ amount, onAmountChange, onPayment, salesCount }: PaymentCardProps) {
  const paypalButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupPayPal = async () => {
      try {
        if (paypalButtonRef.current) {
          const paypal = await initializePayPal(amount || "0");
          paypal.Buttons({
            style: {
              layout: 'vertical',
              color: 'black',
              shape: 'rect',
              label: 'paypal'
            },
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: amount || "0",
                    currency_code: "USD"
                  }
                }]
              });
            },
            onApprove: async (data: any, actions: any) => {
              await actions.order.capture();
              onPayment();
            }
          }).render(paypalButtonRef.current);
        }
      } catch (error) {
        console.error('PayPal initialization failed:', error);
      }
    };

    setupPayPal();
  }, [amount, onPayment]);

  return (
    <Card className="p-6 border border-gray-100 shadow-lg rounded-xl bg-white/50 backdrop-blur-sm">
      <h3 className="font-semibold text-lg mb-4 text-gray-900">How much would you like to pay?</h3>
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Free or more"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          className="bg-white border-gray-200 h-12 text-lg rounded-lg focus:ring-2 focus:ring-purple-500"
        />
        <Button className="w-full h-12 text-lg font-medium bg-black text-white hover:bg-gray-800 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl">
          Get Now
        </Button>
        <div ref={paypalButtonRef} className="mt-2" />
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <Badge variant="secondary" className="gap-1.5 py-1.5 px-3 bg-purple-50 text-purple-700 rounded-lg border-0">
            <Star className="h-4 w-4" /> {salesCount} sold
          </Badge>
          <Badge variant="secondary" className="gap-1.5 py-1.5 px-3 bg-blue-50 text-blue-700 rounded-lg border-0">
            <Package className="h-4 w-4" /> Hi-res PNG included
          </Badge>
        </div>
      </div>
    </Card>
  );
}