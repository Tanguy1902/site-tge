"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SAFETY_ITEMS } from "@/constants/features";
import { CalendarDays } from "lucide-react";
import { CONTACT_INFO } from "@/constants/site";

export default function Safety() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="safety" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#0f7fc1] font-semibold text-sm tracking-wider uppercase">
            Votre sécurité est notre priorité
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0d5494]">
            Sécurité & encadrement
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#327639] to-[#0f7fc1] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SAFETY_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#0f7fc1]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto bg-[#0f7fc1]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0f7fc1] group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-[#0f7fc1] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-[#0d5494] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Season info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 bg-[#0f7fc1]/5 rounded-2xl p-6 max-w-lg mx-auto border border-[#0f7fc1]/10"
        >
          <CalendarDays className="w-8 h-8 text-[#0f7fc1] shrink-0" />
          <div>
            <p className="font-bold text-[#0d5494]">Période idéale</p>
            <p className="text-sm text-gray-600">
              {CONTACT_INFO.season} — Conditions optimales pour la descente et
              les activités nature.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
