"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="story"
      className="py-24 bg-gradient-to-br from-[#0d5494]/5 to-[#327639]/5"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/lead.webp"
                alt="Pirogue sur la Tsiribihina au coucher du soleil"
                width={700}
                height={500}
                className="object-cover w-full h-[400px] lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d5494]/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 lg:right-8 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <p className="text-3xl font-bold text-[#327639]">15+</p>
              <p className="text-sm text-gray-500 font-medium">
                ans d&apos;expérience
              </p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#327639] font-semibold text-sm tracking-wider uppercase">
              Notre histoire
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0d5494] leading-tight">
              Le rêve des fondateurs
            </h2>
            <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#327639] to-[#0f7fc1] rounded-full" />

            <div className="mt-8 space-y-5 text-gray-600 leading-relaxed">
              <p>
                Tout a commencé sur les rives de la Tsiribihina. Après plus de 15
                années passées à accompagner des voyageurs à travers Madagascar, nos
                fondateurs ont fait un constat simple :{" "}
                <span className="text-[#0d5494] font-semibold">
                  beaucoup visitent, peu s&apos;engagent réellement.
                </span>
              </p>
              <p>
                Guides de terrain, organisateurs d&apos;expéditions et passionnés de
                nature, ils ont vu évoluer le tourisme. Ils ont découvert des villages
                extraordinaires, partagé des feux de camp sous les étoiles, navigué au
                fil du fleuve pendant des centaines de kilomètres.
              </p>
              <p>
                C&apos;est de cette expérience qu&apos;est née une vision :{" "}
                <span className="text-[#327639] font-semibold italic">
                  créer un tourisme qui protège autant qu&apos;il fait découvrir.
                </span>
              </p>
            </div>

            <blockquote className="mt-8 pl-6 border-l-4 border-[#327639] italic text-[#0d5494] font-medium">
              &ldquo;Nous croyons que chaque arbre planté raconte une histoire.
              Peut-être bientôt la vôtre.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
