"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT_VALUES } from "@/constants/features";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#327639] font-semibold text-sm tracking-wider uppercase">
            Qui sommes-nous
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0d5494]">
            À propos de TSIRIBIHINA GREEN EXPEDITION
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#327639] to-[#0f7fc1] mx-auto rounded-full" />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-gray-600 text-lg leading-relaxed">
            Fondée par des professionnels passionnés disposant de{" "}
            <span className="text-[#327639] font-semibold">
              plus de 15 ans d&apos;expérience
            </span>{" "}
            dans le domaine touristique, notre structure est née d&apos;une conviction
            forte : proposer des expériences authentiques qui allient découverte,
            sécurité et impact positif.
          </p>
        </motion.div>

        {/* Values cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ABOUT_VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#327639]/20 hover:shadow-xl hover:shadow-[#327639]/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#327639]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#327639] group-hover:scale-110 transition-all duration-300">
                <value.icon className="w-7 h-7 text-[#327639] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#0d5494] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
