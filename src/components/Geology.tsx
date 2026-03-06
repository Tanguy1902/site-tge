"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GEOLOGY_DATA } from "@/constants/geology";

export default function Geology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="geologie"
      className="py-24 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-forest/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-forest font-semibold text-sm tracking-wider uppercase">
            Secrets de notre Terre
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-deep">
            {GEOLOGY_DATA.title}
          </h2>
          <div className="mt-4 w-20 h-1 bg-linear-to-r from-forest to-ocean mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            {GEOLOGY_DATA.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-linear-to-br from-deep to-deep/90 rounded-3xl p-8 md:p-12 text-white mb-20 shadow-2xl relative overflow-hidden"
        >
          {(() => {
            const Icon = GEOLOGY_DATA.steps[0].icon;
            return (
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Icon className="w-32 h-32" />
              </div>
            );
          })()}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {GEOLOGY_DATA.panthalassa.title}
          </h3>
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
            {GEOLOGY_DATA.panthalassa.content}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GEOLOGY_DATA.steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-forest/30 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center group-hover:bg-forest group-hover:border-forest transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-deep group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-4xl font-black text-gray-200 group-hover:text-forest/10 transition-colors duration-300 leading-none">
                  {step.id}
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-deep mb-1">
                {step.title}
              </h4>
              {step.subtitle && (
                <p className="text-forest font-medium text-sm mb-3">
                  {step.subtitle}
                </p>
              )}
              {step.period && (
                <div className="inline-block px-3 py-1 rounded-full bg-deep/5 text-deep text-xs font-bold mb-4 uppercase tracking-tighter">
                  {step.period}
                </div>
              )}
              
              <ul className="space-y-3 mt-auto">
                {step.content.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-forest shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <p className="text-xl font-medium text-deep mb-6 italic">
              &ldquo;{GEOLOGY_DATA.footer}&rdquo;
            </p>
            <a
              href="#contact"
              className="bg-linear-to-r from-forest to-ocean text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Réserver mon expédition
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
