import { Star } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

interface Review {
  id: number;
  user: {
    name: string;
    avatar: string;
    country: string;
    flag: string;
  };
  rating: number;
  comment: string;
  date: string;
  verifiedPurchase: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    user: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      country: "United States",
      flag: "🇺🇸"
    },
    rating: 5,
    comment: "Amazing artwork! The details in this Halloween room are incredible. Perfect for my phone's wallpaper.",
    date: "2 days ago",
    verifiedPurchase: true
  },
  {
    id: 2,
    user: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      country: "Singapore",
      flag: "🇸🇬"
    },
    rating: 5,
    comment: "Love the spooky vibes and the color palette. Worth every penny!",
    date: "1 week ago",
    verifiedPurchase: true
  },
  {
    id: 3,
    user: {
      name: "Marcus Weber",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
      country: "Germany",
      flag: "🇩🇪"
    },
    rating: 5,
    comment: "Exceptional quality and attention to detail. The artist really captured the Halloween spirit.",
    date: "2 weeks ago",
    verifiedPurchase: true
  }
];

export function Reviews() {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <Card className="p-6 border border-gray-100 bg-white/90 backdrop-blur-sm">
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-medium text-gray-900">{averageRating.toFixed(1)}</span>
                <span className="text-sm text-gray-500">/ 5</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-gray-500">Based on {reviews.length} reviews</span>
            </div>
          </div>
          
          <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg" alt="Trustpilot" className="h-6" />
        </div>
        
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="space-y-3 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                    <img src={review.user.avatar} alt={review.user.name} className="object-cover" />
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-900">{review.user.name}</p>
                      <span className="text-sm text-gray-500">{review.user.flag}</span>
                    </div>
                    <p className="text-sm text-gray-500">{review.user.country}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                {review.verifiedPurchase && (
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    Verified Purchase
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}