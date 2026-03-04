import Link from "next/link";
import { TreePine, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d5494] via-[#0d5494] to-[#327639] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <TreePine className="w-24 h-24 text-white/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold text-white">404</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Page introuvable
        </h1>
        <p className="text-white/70 text-lg mb-2">
          Il semble que vous vous soyez égaré en pleine nature…
        </p>
        <p className="text-white/50 text-sm mb-10">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#327639] text-white font-semibold rounded-full hover:bg-[#327639]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#327639]/30 hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Nous contacter
          </Link>
        </div>

        {/* Brand */}
        <p className="mt-12 text-white/30 text-xs font-medium tracking-wider uppercase">
          Tsiribihina Green Expedition
        </p>
      </div>
    </div>
  );
}
