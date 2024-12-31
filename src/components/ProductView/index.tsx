import { useState } from 'react';
import { ProductImage } from './ProductImage';
import { ProductHeader } from './ProductHeader';
import { PaymentCard } from './PaymentCard';
import { Description } from './Description';

export default function ProductView() {
  const [amount, setAmount] = useState<string>('');

  const handlePayment = async () => {
    const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
    // Add PayPal payment logic here
  };

  const productData = {
    title: "Halloween Room Pixel Art",
    creator: "pixebo",
    avatarUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=pixebo",
    imageUrl: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=800",
    salesCount: 335,
    description: "This is a pixel art wallpaper showcasing a Halloween themed room. Each download contains a hi-resolution still image. This witchy, Halloween room interior was created as a 31-day October art challenge. Each item was suggested by commenters on Instagram and TikTok.",
    credits: "This wallpaper was drawn by pixebo in procreate."
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Layout */}
      <div className="hidden md:block container mx-auto py-8 px-4">
        <div className="grid grid-cols-2 gap-8">
          <ProductImage
            imageUrl={productData.imageUrl}
            alt="Product Preview"
          />
          
          <div className="space-y-6">
            <ProductHeader
              title={productData.title}
              creator={productData.creator}
              avatarUrl={productData.avatarUrl}
            />

            <PaymentCard
              amount={amount}
              onAmountChange={setAmount}
              onPayment={handlePayment}
              salesCount={productData.salesCount}
            />

            <Description
              text={productData.description}
              credits={productData.credits}
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <ProductImage
          imageUrl={productData.imageUrl}
          alt="Product Preview"
        />

        <div className="p-4 space-y-6">
          <ProductHeader
            title={productData.title}
            creator={productData.creator}
            avatarUrl={productData.avatarUrl}
          />

          <PaymentCard
            amount={amount}
            onAmountChange={setAmount}
            onPayment={handlePayment}
            salesCount={productData.salesCount}
          />

          <Description
            text={productData.description}
            credits={productData.credits}
          />
        </div>
      </div>
    </div>
  );
}