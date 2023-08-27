"use client"
import {Menu, Sparkles} from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import {MobileSidebar} from "@/components/mobile-sidebar"


const font =Poppins({
  weight:"600",
  subsets:["latin"]
});

export const Navbar = () => {
  return (
    <div className=" fixed w-full z-50 flex justify-between 
    items-center py-2 px-4 border-b bordder-primary/10 bg-secondary h-16">
      <div className="flex items-center ">
        <MobileSidebar/>
        <Link href="/">
          <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary",font.className)}>Companion.Ai
          </h1>
        </Link>
        </div>
        <div className="flex items-center gap-x-3">
          <Button variant="premium" size="sm">
            Upgrade
            <Sparkles className="h-4 w-4 fill-white text-white" />
          </Button>
          <ModeToggle/>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
  );
};