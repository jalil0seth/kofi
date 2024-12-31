import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Share2 } from "lucide-react";

interface ProductHeaderProps {
  title: string;
  creator: string;
  avatarUrl: string;
}

export function ProductHeader({ title, creator, avatarUrl }: ProductHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 rounded-full ring-2 ring-purple-100 ring-offset-2">
          <img src={avatarUrl} alt={creator} className="object-cover" />
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">by {creator}</span>
            <Button variant="link" className="text-sm font-medium text-purple-600 px-0 hover:text-purple-700">
              View Shop
            </Button>
          </div>
        </div>
      </div>
      <Button 
        variant="outline" 
        size="icon" 
        className="h-10 w-10 rounded-full border-gray-200 hover:bg-purple-50 hover:text-purple-600 transition-colors"
      >
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  );
}