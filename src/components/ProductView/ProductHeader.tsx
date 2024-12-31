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
      <div className="flex items-center gap-2">
        <Avatar>
          <img src={avatarUrl} alt={creator} />
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-muted-foreground">by {creator}</p>
        </div>
      </div>
      <Button variant="outline" size="icon">
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  );
}