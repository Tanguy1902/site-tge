"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ITINERARY } from "@/constants/itinerary";

export default function Itinerary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="itinerary"
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
            7 jours / 6 nuits
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0d5494]">
            Programme du voyage
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#327639] to-[#0f7fc1] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#327639] via-[#0f7fc1] to-[#0d5494]" />

          {ITINERARY.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                    day.isHighlight
                      ? "bg-[#327639] ring-4 ring-[#327639]/20 scale-110"
                      : "bg-white border-2 border-[#0f7fc1]"
                  }`}
                >
                  <day.icon
                    className={`w-5 h-5 ${
                      day.isHighlight ? "text-white" : "text-[#0f7fc1]"
                    }`}
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div
                  className={`p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    day.isHighlight
                      ? "bg-gradient-to-br from-[#327639] to-[#327639]/90 text-white"
                      : "bg-white"
                  }`}
                >
                  <div
                    className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                      day.isHighlight ? "text-white/70" : "text-[#327639]"
                    }`}
                  >
                    {day.day}
                  </div>
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      day.isHighlight ? "text-white" : "text-[#0d5494]"
                    }`}
                  >
                    {day.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      day.isHighlight ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {day.description}
                  </p>
                  <ul className="space-y-2">
                    {day.activities.map((activity) => (
                      <li
                        key={activity}
                        className={`text-sm flex items-start gap-2 ${
                          index % 2 === 0
                            ? "md:justify-end md:flex-row-reverse"
                            : ""
                        }`}
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                            day.isHighlight ? "bg-white/60" : "bg-[#327639]"
                          }`}
                        />
                        <span
                          className={
                            day.isHighlight ? "text-white/90" : "text-gray-600"
                          }
                        >
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
