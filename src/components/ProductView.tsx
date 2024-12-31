import { useState } from 'react';
import { Header } from './layout/Header';
import { ProductImage } from './ProductView/ProductImage';
import { PaymentCard } from './ProductView/PaymentCard';
import { Description } from './ProductView/Description';
import { Reviews } from './ProductView/Reviews';

export default function ProductView() {
  const [amount, setAmount] = useState<string>('');

  const handlePayment = async () => {
    const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
    // Add PayPal payment logic here
  };

  const productData = {
    title: "Halloween Room Pixel Art",
    imageUrl: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=800",
    salesCount: 335,
    description: "This is a pixel art wallpaper showcasing a Halloween themed room. Each download contains a hi-resolution still image. This witchy, Halloween room interior was created as a 31-day October art challenge. Each item was suggested by commenters on Instagram and TikTok.",
    credits: "This wallpaper was drawn in procreate."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <Header />
      
      {/* Desktop Layout */}
      <div className="hidden md:block container mx-auto py-12 px-4 max-w-6xl">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <ProductImage
              imageUrl={productData.imageUrl}
              alt="Product Preview"
            />
            <div className="mt-8">
              <Reviews />
            </div>
          </div>
          
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">{productData.title}</h1>

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
      <div className="md:hidden space-y-8">
        <ProductImage
          imageUrl={productData.imageUrl}
          alt="Product Preview"
        />

        <div className="px-4 space-y-8">
          <h1 className="text-2xl font-bold text-gray-900">{productData.title}</h1>

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

          <Reviews />
        </div>
      </div>
    </div>
  );
}