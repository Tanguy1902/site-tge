"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/images/image1.webp",
    alt: "fleuve Tsiribihina",
    caption: "fleuve de Tsiribihina",
  },
  {
    src: "/images/image2.webp",
    alt: "Paysage naturel le long du Tsiribihina",
    caption: "Paysages du Tsiribihina",
  },
  {
    src: "/images/image3.webp",
    alt: "Rencontre avec les communautés locales",
    caption: "Rencontres authentiques",
  },
  {
    src: "/images/image4.webp",
    alt: "Faune sauvage de Madagascar",
    caption: "Faune endémique",
  },
  {
    src: "/images/image5.webp",
    alt: "Campement au bord du fleuve",
    caption: "Campement en nature",
  },
  {
    src: "/images/image6.webp",
    alt: "Action de reboisement écologique",
    caption: "Reboisement & Écologie",
  },
];

// Masonry-style layout: define span sizes for visual interest
const LAYOUT_CLASSES = [
  "col-span-1 row-span-2 md:col-span-2 md:row-span-2", // large featured
  "col-span-1 row-span-1",                               // small
  "col-span-1 row-span-1",                               // small
  "col-span-1 row-span-1 md:col-span-2 md:row-span-1",  // wide
  "col-span-1 row-span-1",                               // small
  "col-span-1 row-span-1",                               // small
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
    }
  };

  return (
    <>
      <section id="gallery" className="py-24 bg-gray-50" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[#327639] font-semibold text-sm tracking-wider uppercase">
              Galerie
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0d5494]">
              Un aperçu de nos expéditions
            </h2>
            <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#327639] to-[#0f7fc1] mx-auto rounded-full" />
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
              Découvrez en images les paysages époustouflants et les rencontres
              inoubliables qui vous attendent lors de cette expédition unique.
            </p>
          </motion.div>

          {/* Gallery grid - asymmetric masonry layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3 md:gap-4">
            {GALLERY_IMAGES.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${LAYOUT_CLASSES[index]}`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-[#327639]/40 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 z-10 cursor-pointer"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Navigation - prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 z-10 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Navigation - next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 z-10 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[selectedIndex].src}
                alt={GALLERY_IMAGES[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Caption & counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-10">
              <p className="text-white font-medium text-lg">
                {GALLERY_IMAGES[selectedIndex].caption}
              </p>
              <p className="text-white/50 text-sm mt-1">
                {selectedIndex + 1} / {GALLERY_IMAGES.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
