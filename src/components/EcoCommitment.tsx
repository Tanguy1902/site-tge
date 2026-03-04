"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ECO_STATS } from "@/constants/features";

export default function EcoCommitment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="eco-commitment" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background image */}
      <Image
        src="/images/eco-reboisement.webp"
        alt="Plantation d'arbres à Madagascar"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#327639]/90 to-[#0d5494]/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-white/70 font-semibold text-sm tracking-wider uppercase">
            Notre engagement
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Notre engagement écologique 🌱
          </h2>
          <div className="mt-4 w-20 h-1 bg-white/40 mx-auto rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
            Pour chaque participant, nous plantons entre 3 et 10 arbres endémiques.
            Voyager avec nous, c&apos;est agir concrètement pour Madagascar.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {ECO_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
                {stat.suffix && (
                  <span className="text-2xl text-white/60">{stat.suffix}</span>
                )}
              </div>
              <p className="text-white/70 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm italic">
            Suivi du projet avec nos partenaires locaux — Contribution directe à la
            lutte contre la déforestation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
