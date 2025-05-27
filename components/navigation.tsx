"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-poppins text-2xl font-bold bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
              ThaliTales
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/search">
            <Button variant="outline" size="icon" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button variant="outline" className="hidden md:flex">
              Log in
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}