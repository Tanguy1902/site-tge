"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHY_CHOOSE } from "@/constants/features";

export default function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-choose" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#0f7fc1] font-semibold text-sm tracking-wider uppercase">
            Une aventure qui a du sens
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0d5494]">
            Pourquoi choisir cette expédition ?
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#327639] to-[#0f7fc1] mx-auto rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
            Et si voyager devenait un acte utile ? Un voyage inoubliable qui
            laisse une trace positive sur la planète 🌱
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                index === 2
                  ? "bg-gradient-to-br from-[#327639] to-[#0d5494] text-white md:col-span-2 lg:col-span-1"
                  : "bg-white border border-gray-100 hover:border-[#327639]/20 hover:shadow-xl hover:shadow-[#327639]/5"
              }`}
            >
              {/* Decorative circle */}
              <div
                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 ${
                  index === 2 ? "bg-white" : "bg-[#327639]"
                }`}
              />

              <div
                className={`relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  index === 2
                    ? "bg-white/20"
                    : "bg-[#327639]/10 group-hover:bg-[#327639] group-hover:scale-110"
                }`}
              >
                <item.icon
                  className={`w-7 h-7 transition-colors duration-300 ${
                    index === 2
                      ? "text-white"
                      : "text-[#327639] group-hover:text-white"
                  }`}
                />
              </div>
              <h3
                className={`relative z-10 text-xl font-bold mb-3 ${
                  index === 2 ? "text-white" : "text-[#0d5494]"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`relative z-10 text-sm leading-relaxed ${
                  index === 2 ? "text-white/80" : "text-gray-500"
                }`}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
