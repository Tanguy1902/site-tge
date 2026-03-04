"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AUDIENCE } from "@/constants/features";

export default function Audience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="audience" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#0f7fc1] font-semibold text-sm tracking-wider uppercase">
            Pour tous les profils
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0d5494]">
            Pour qui ?
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#327639] to-[#0f7fc1] mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 text-lg">
            Aucune expérience particulière requise.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {AUDIENCE.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group flex items-center gap-4 bg-gradient-to-br from-gray-50 to-white px-6 py-4 rounded-2xl border border-gray-100 hover:border-[#327639]/20 hover:shadow-lg hover:shadow-[#327639]/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#0f7fc1]/10 rounded-xl flex items-center justify-center group-hover:bg-[#0f7fc1] group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-6 h-6 text-[#0f7fc1] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-[#0d5494] font-medium text-sm">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
