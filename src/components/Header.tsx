"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.webp"
              alt="Logo TGE"
              width={45}
              height={45}
              className="rounded-xl"
            />
            <div className="flex flex-col">
              <span
                className={`text-sm font-bold tracking-wide transition-colors duration-300 ${
                  isScrolled ? "text-[#0d5494]" : "text-white"
                }`}
              >
                {SITE_CONFIG.name.split(" ").slice(0, 2).join(" ")}
              </span>
              <span
                className={`text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${
                  isScrolled ? "text-[#327639]" : "text-white/80"
                }`}
              >
                {SITE_CONFIG.name.split(" ").slice(2).join(" ")}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "text-[#0d5494] hover:text-[#327639]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-[#327639] text-white text-sm font-semibold rounded-full hover:bg-[#327639]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#327639]/25 hover:-translate-y-0.5"
            >
              Réserver
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-[#0d5494]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-[#0d5494] font-medium py-2 hover:text-[#327639] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 px-6 py-3 bg-[#327639] text-white text-center font-semibold rounded-full hover:bg-[#327639]/90 transition-all"
              >
                Réserver
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
