"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero2.jpeg"
        alt="Fleuve Tsiribihina Madagascar"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d5494]/70 via-[#0d5494]/40 to-[#327639]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-5 py-2 bg-[#327639]/30 backdrop-blur-sm text-white/90 text-sm font-medium rounded-full border border-white/20 mb-8">
            🌿 Écotourisme & Reboisement à Madagascar
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          <span className="block">{SITE_CONFIG.name.split(" ").slice(0, 1)}</span>
          <span className="block text-white">
            GREEN EXPEDITION
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-10"
        >
          {SITE_CONFIG.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#itinerary"
            className="px-8 py-4 bg-[#327639] text-white font-semibold rounded-full hover:bg-[#327639]/90 transition-all duration-300 hover:shadow-xl hover:shadow-[#327639]/30 hover:-translate-y-1"
          >
            Découvrir l&apos;expédition
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/25 transition-all duration-300 hover:-translate-y-1"
          >
            Réserver maintenant
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
}
