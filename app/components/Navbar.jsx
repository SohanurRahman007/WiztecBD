"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png" // change your logo path
            width={40}
            height={40}
            alt="Logo"
            className="rounded-full"
          />
          <span className="font-semibold text-xl">MyWebsite</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden block" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {open && (
        <div className="md:hidden flex flex-col bg-white shadow-inner px-4 pb-4">
          <Link href="/" className="py-2">
            Home
          </Link>
          <Link href="/about" className="py-2">
            About
          </Link>
          <Link href="/services" className="py-2">
            Services
          </Link>
          <Link href="/contact" className="py-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
