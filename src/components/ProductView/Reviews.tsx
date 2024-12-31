import { Star } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

interface Review {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    user: {
      name: "Alex Thompson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1"
    },
    rating: 5,
    comment: "Amazing artwork! The details in this Halloween room are incredible. Perfect for my phone's wallpaper.",
    date: "2 days ago"
  },
  {
    id: 2,
    user: {
      name: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2"
    },
    rating: 5,
    comment: "Love the spooky vibes and the color palette. Worth every penny!",
    date: "1 week ago"
  }
];

export function Reviews() {
  return (
    <div className="space-y-6 bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-gray-900">5.0</span>
          <span className="text-sm text-gray-500">({reviews.length} reviews)</span>
        </div>
      </div>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <img src={review.user.avatar} alt={review.user.name} />
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-900">{review.user.name}</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 pl-10">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}