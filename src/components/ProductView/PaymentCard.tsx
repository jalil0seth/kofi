import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package, Star, Shield, Mail, User } from "lucide-react";
import { useEffect, useRef } from "react";
import { initializePayPal } from "@/lib/paypal";
import { Label } from "@/components/ui/label";

interface PaymentCardProps {
  formData: {
    name: string;
    email: string;
    amount: string;
  };
  onFormChange: (data: any) => void;
  onPayment: () => void;
  salesCount: number;
}

export function PaymentCard({ formData, onFormChange, onPayment, salesCount }: PaymentCardProps) {
  const paypalButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupPayPal = async () => {
      try {
        if (paypalButtonRef.current && formData.amount) {
          const paypal = await initializePayPal(formData.amount);
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
                    value: formData.amount || "0",
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
  }, [formData.amount, onPayment]);

  const handleChange = (field: string, value: string) => {
    onFormChange({ ...formData, [field]: value });
  };

  return (
    <Card className="p-6 border border-gray-100 shadow-xl rounded-xl bg-white/90 backdrop-blur-sm">
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Complete Your Purchase</h3>
          <p className="text-sm text-gray-600">Support the artist by paying what you think is fair</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <div className="relative">
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="pl-10 bg-white border-gray-200"
                placeholder="Your name"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="pl-10 bg-white border-gray-200"
                placeholder="your@email.com"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount (USD)</Label>
            <Input
              id="amount"
              type="text"
              value={formData.amount}
              onChange={(e) => handleChange('amount', e.target.value)}
              className="bg-white border-gray-200 text-lg"
              placeholder="Enter amount"
            />
          </div>
        </div>

        <div ref={paypalButtonRef} className="mt-4" />

        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-100">
          <Badge variant="secondary" className="gap-1.5 py-1.5 px-3 bg-purple-50 text-purple-700 rounded-lg border-0">
            <Star className="h-4 w-4" /> {salesCount} sales
          </Badge>
          <Badge variant="secondary" className="gap-1.5 py-1.5 px-3 bg-blue-50 text-blue-700 rounded-lg border-0">
            <Package className="h-4 w-4" /> Hi-res PNG
          </Badge>
          <Badge variant="secondary" className="gap-1.5 py-1.5 px-3 bg-green-50 text-green-700 rounded-lg border-0">
            <Shield className="h-4 w-4" /> Secure payment
          </Badge>
        </div>
      </div>
    </Card>
  );
}