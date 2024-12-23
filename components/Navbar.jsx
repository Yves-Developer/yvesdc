'use client';
import React, { useState } from 'react';
import Navlink from './Navlink';
import { Button } from './ui/button';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container absolute z-10 mx-auto px-4 w-full h-[60px] flex items-center justify-between">
      {/* Logo */}
      <div className="ml-24 text-primary font-bold">
        Yves<span className="text-xl">.</span>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        aria-label="Toggle Menu"
        className="text-primary md:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row md:items-center md:justify-center absolute md:relative md:top-0 top-16 left-0 w-full md:w-auto bg-white md:bg-transparent space-y-4 md:space-y-0 md:space-x-4 shadow md:shadow-none p-4 md:p-0 z-10`}
      >
        <Navlink href="#Home" title="Home" />
        <Navlink href="#Projects" title="Project" />
        <Navlink href="#About" title="About" />
       <Button variant="ghost" className="lg:hidden" asChild><Link href="#contact">Conatct Us</Link></Button>
      </div>

      {/* Contact Us */}
      <div className="text-primary hidden lg:block">
      <Button variant="ghost" asChild><Link href="#contact">Conatct Us</Link></Button>
      </div>
    </nav>
  );
};

export default Navbar;
