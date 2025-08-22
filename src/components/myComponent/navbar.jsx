'use client'; 

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-btn";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import GhanchisLogo from "./logo";

const Navbar = () => {
  return (
    <ClerkProvider>
      <nav className="p-4 bg-background/50 sticky top-0 backdrop:blur border-b z-10">
       <div className="container mx-auto flex items-center justify-between">
  {/* Left - Logo */}
  <div className="flex-shrink-0">
    <GhanchisLogo />
  </div>

  {/* Center - Nav Links */}
  <div className="hidden md:flex flex-1 justify-center space-x-6">
    <Link href="/" className="hover:font-bold transition-all duration-200">
      Home
    </Link>
    <Link href="/blog" className="hover:font-bold transition-all duration-200">
      Blog
    </Link>
    <Link href="/about" className="hover:font-bold transition-all duration-200">
      About
    </Link>
    <Link href="/contact-us" className="hover:font-bold transition-all duration-200">
      Contact-Us
    </Link>
  </div>

  {/* Right - Buttons */}
  <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
    <SignedOut>
      <SignInButton>
        <Button className="mx-1 transition-all duration-300" variant="outline">
          Login
        </Button>
      </SignInButton>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
    <ModeToggle />
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden flex items-center space-x-2">
    <ModeToggle />
    <Sheet>
      <SheetTrigger>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-bold my-4">
            <GhanchisLogo />
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-6">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
              <Link href="/contact-us">Contact-Us</Link>
              <div>
                <SignedOut>
                  <SignInButton>
                    <Button className="mx-1 text-xs" variant="outline">
                      Login
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </div>
</div>

      </nav>
    </ClerkProvider>
  );
};

export default Navbar;
