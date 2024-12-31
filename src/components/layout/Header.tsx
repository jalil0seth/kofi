import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ArtStore
          </h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Discover</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Categories</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Artists</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button variant="default" className="rounded-full bg-black hover:bg-gray-800">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}