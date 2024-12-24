/** @format */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLink from "./Navlink";
import { DialogTitle } from "@radix-ui/react-dialog";
const navItems = [
  { href: "#Home", title: "Home" },
  { href: "#Projects", title: "Projects" },
  { href: "#About", title: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-screen-xl mx-auto left-0 right-0 fixed top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Yves<span className="text-3xl">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} title={item.title} />
          ))}
          <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <DialogTitle />
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  onClick={() => setIsOpen(false)}
                />
              ))}
              <Button asChild onClick={() => setIsOpen(false)}>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
