import { useState } from 'react';
import { Header } from './layout/Header';
import { ProductGallery } from './ProductView/ProductGallery';
import { ProductInfo } from './ProductView/ProductInfo';
import { MobileProductView } from './ProductView/MobileProductView';

export default function ProductView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: ''
  });

  const productData = {
    title: "Halloween Room Pixel Art",
    imageUrl: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=800",
    salesCount: 335,
    description: "This is a pixel art wallpaper showcasing a Halloween themed room. Each download contains a hi-resolution still image. This witchy, Halloween room interior was created as a 31-day October art challenge. Each item was suggested by commenters on Instagram and TikTok.",
    credits: "This wallpaper was drawn in procreate.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=800",
        alt: "Halloween Room Main View"
      },
      {
        url: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800",
        alt: "Halloween Room Detail 1"
      },
      {
        url: "https://images.unsplash.com/photo-1592089416462-2b0cb7da8379?q=80&w=800",
        alt: "Halloween Room Detail 2"
      },
      {
        url: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?q=80&w=800",
        alt: "Halloween Room Detail 3"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:gap-16">
          <ProductGallery images={productData.images} />
          <ProductInfo 
            product={productData}
            formData={formData}
            onFormChange={setFormData}
          />
        </div>

        {/* Mobile Layout */}
        <MobileProductView 
          product={productData}
          formData={formData}
          onFormChange={setFormData}
        />
      </div>
    </div>
  );
}