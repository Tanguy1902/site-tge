import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, CONTACT_INFO, SOCIAL_LINKS } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="bg-[#0d5494] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.webp"
                alt="Logo TGE"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <div>
                <p className="font-bold text-sm">TSIRIBIHINA</p>
                <p className="text-xs text-white/70 uppercase tracking-wider">
                  Green Expedition
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-white font-medium text-sm italic">
              {SITE_CONFIG.slogan}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/50">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#327639] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/50">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-[#0f7fc1] shrink-0" />
                {CONTACT_INFO.email}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-[#0f7fc1] shrink-0" />
                {CONTACT_INFO.whatsapp}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[#0f7fc1] shrink-0" />
                {CONTACT_INFO.address}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/50">
              Réseaux sociaux
            </h3>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-[#0f7fc1] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.
          </p>
          <p className="text-white/40 text-sm">
            Voyager autrement, agir durablement 🌍
          </p>
        </div>
      </div>
    </footer>
  );
}
