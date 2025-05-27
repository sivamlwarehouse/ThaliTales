"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-secondary-50 -z-10" />
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="heading-1 text-andhra-800">
            Authentic{" "}
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
              South Indian
            </span>{" "}
            Catering for Your Special Occasions
          </h1>
          <p className="body-text text-andhra-600 text-lg max-w-xl">
            Connect with verified caterers specializing in authentic South Indian cuisine for birthdays, marriages, and housewarming ceremonies.
          </p>
          
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for caterers in your area"
                className="pl-10 pr-4 py-2 w-full sm:w-80 rounded-md border border-input bg-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary-600 text-white w-full sm:w-auto">
              Find Caterers
            </Button>
          </form>
          
          <div className="flex items-center gap-4 pt-2">
            <span className="text-sm text-muted-foreground">Popular searches:</span>
            <div className="flex flex-wrap gap-2">
              <Link href="/search?occasion=birthday">
                <Button variant="outline" size="sm" className="rounded-full bg-white/50 hover:bg-white">Birthday Party</Button>
              </Link>
              <Link href="/search?occasion=marriage">
                <Button variant="outline" size="sm" className="rounded-full bg-white/50 hover:bg-white">Marriage</Button>
              </Link>
              <Link href="/search?occasion=housewarming">
                <Button variant="outline" size="sm" className="rounded-full bg-white/50 hover:bg-white">Housewarming</Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop"
            alt="South Indian festive meal spread"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <p className="text-white font-medium font-poppins text-lg">Traditional South Indian Thali</p>
            <p className="text-white/80 text-sm">Featuring idli, dosa, sambar, and various chutneys</p>
          </div>
        </div>
      </div>
    </section>
  );
}