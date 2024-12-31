import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Star, Package } from "lucide-react";
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
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: amount || "0"
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
    <Card className="p-6">
      <h3 className="font-medium mb-4">How much would you like to pay?</h3>
      <Input
        type="text"
        placeholder="Free or more"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        className="mb-4"
      />
      <div ref={paypalButtonRef} className="mb-4" />
      <div className="flex items-center gap-2 mt-4">
        <Badge variant="secondary" className="gap-1">
          <Star className="h-3 w-3" /> {salesCount} sold
        </Badge>
        <Badge variant="secondary" className="gap-1">
          <Package className="h-3 w-3" /> Hi-res PNG included
        </Badge>
      </div>
    </Card>
  );
}