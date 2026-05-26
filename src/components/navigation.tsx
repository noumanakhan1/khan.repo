"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <span className="text-slate-900 dark:text-white tracking-tight">Nouman A Khan</span>
          </Link>

          {/* Right Section containing Links, Button and ThemeToggle */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors shadow-sm hover:shadow-md"
            >
              Book a Call
            </Link>


          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">

            <button
              className="p-2 text-slate-600 dark:text-slate-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
