"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";
import { PRICING_PLANS, BONUS_ITEMS } from "@/constants/pricing";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-br from-[#0d5494]/5 to-[#327639]/5"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#327639] font-semibold text-sm tracking-wider uppercase">
            Nos formules
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0d5494]">
            Tarifs indicatifs
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#327639] to-[#0f7fc1] mx-auto rounded-full" />
          <p className="mt-6 text-gray-600">
            Tarifs groupes et entreprises disponibles sur demande
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.isPopular
                  ? "bg-gradient-to-br from-[#327639] to-[#0d5494] text-white shadow-2xl shadow-[#327639]/20 scale-105 ring-4 ring-[#327639]/20"
                  : "bg-white border border-gray-100 hover:shadow-xl"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white text-[#327639] text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#327639]" />
                  POPULAIRE
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.isPopular ? "text-white" : "text-[#0d5494]"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.isPopular ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.priceLabel ? (
                    <>
                      <span className={`text-sm ${plan.isPopular ? "text-white/60" : "text-gray-400"}`}>
                        à partir de
                      </span>
                    </>
                  ) : null}
                </div>
                <div className="flex items-baseline justify-center gap-1 mt-1">
                  <span
                    className={`text-3xl font-bold ${
                      plan.isPopular ? "text-white" : "text-[#0d5494]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.priceLabel && (
                    <span
                      className={`text-lg ${
                        plan.isPopular ? "text-white/70" : "text-gray-400"
                      }`}
                    >
                      {plan.priceLabel}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        plan.isPopular ? "bg-white/20" : "bg-[#327639]/10"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.isPopular ? "text-white" : "text-[#327639]"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.isPopular ? "text-white/90" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block text-center w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.isPopular
                    ? "bg-white text-[#327639] hover:shadow-lg"
                    : "bg-[#327639] text-white hover:bg-[#327639]/90 hover:shadow-lg hover:shadow-[#327639]/20"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bonus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-bold text-[#0d5494] mb-4">
            🎁 Bonus participants
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {BONUS_ITEMS.map((item) => (
              <span
                key={item}
                className="px-5 py-2.5 bg-white rounded-full text-sm text-gray-600 border border-gray-100 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
