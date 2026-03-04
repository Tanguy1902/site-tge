"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  INCLUDED_ITEMS,
  NOT_INCLUDED_ITEMS,
  CheckIcon,
  XIcon,
} from "@/constants/features";

export default function Includes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="includes"
      className="py-24 bg-gradient-to-br from-[#0d5494]/5 to-[#327639]/5"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#327639] font-semibold text-sm tracking-wider uppercase">
            Ce qui vous attend
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0d5494]">
            Inclus dans l&apos;offre
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#327639] to-[#0f7fc1] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
          >
            <h3 className="text-lg font-bold text-[#327639] mb-6 flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              Inclus
            </h3>
            <ul className="space-y-4">
              {INCLUDED_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 bg-[#327639]/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3.5 h-3.5 text-[#327639]" />
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not included */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
          >
            <h3 className="text-lg font-bold text-gray-400 mb-6 flex items-center gap-2">
              <XIcon className="w-5 h-5" />
              Non inclus
            </h3>
            <ul className="space-y-4">
              {NOT_INCLUDED_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <XIcon className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <span className="text-gray-500 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
