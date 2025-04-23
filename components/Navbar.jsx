/** @format */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLink from "./Navlink";
import { DialogTitle } from "@radix-ui/react-dialog";
const navItems = [
  { href: "#Home", title: "Home" },
  { href: "#Featured", title: "Featured" },
  { href: "#Projects", title: "Projects" },
  { href: "#Skills", title: "Skills" },
  { href: "https://github.com/Yves-Developer", title: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full left-0 right-0 sticky top-0 z-50 bg-background shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Yves<span className="text-3xl">.</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-end items-center">
          {navItems.map((item, index) => (
            <NavLink
              key={item.href}
              index={index}
              href={item.href}
              title={item.title}
              target={item.title === "About" ? "_blank" : undefined}
            />
          ))}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.4 }}
          >
            <Button variant="outline" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
        {/* Mobile Navigation */}
        <Sheet className="md:hidden" open={isOpen} onOpenChange={setIsOpen}>
          <DialogTitle />
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
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
              <Button asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
