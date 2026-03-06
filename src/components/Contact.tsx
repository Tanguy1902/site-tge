"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { CONTACT_INFO, SITE_CONFIG } from "@/constants/site";
import { submitContactForm } from "@/app/actions";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setFormStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus("error");
        setErrorMessage(result.error || "Une erreur est survenue.");
      }
    } catch (error) {
      setFormStatus("error");
      setErrorMessage("Impossible d'envoyer le message. Veuillez réessayer.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#327639] font-semibold text-sm tracking-wider uppercase">
            Réservation & informations
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0d5494]">
            Prêt pour l&apos;aventure ?
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#327639] to-[#0f7fc1] mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 text-lg">
            Places limitées pour préserver l&apos;expérience. Contactez-nous dès
            maintenant.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-md"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#0d5494] mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#327639]/30 focus:border-[#327639] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0d5494] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#327639]/30 focus:border-[#327639] transition-all"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-[#0d5494] mb-2">
                  Téléphone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+261 ..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#327639]/30 focus:border-[#327639] transition-all"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-[#0d5494] mb-2">
                  Formule souhaitée
                </label>
                <select 
                  name="plan"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#327639]/30 focus:border-[#327639] transition-all bg-white"
                >
                  <option value="">Sélectionner une formule</option>
                  <option value="standard">Standard — 1 200 000 Ar</option>
                  <option value="confort">Confort — 2 000 000 Ar</option>
                  <option value="premium">Premium — Sur devis</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#0d5494] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Parlez-nous de votre projet de voyage..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#327639]/30 focus:border-[#327639] transition-all resize-none"
                />
              </div>

              {formStatus === "error" && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-600 text-sm font-medium border border-red-100 italic">
                  ⚠ {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full py-3.5 bg-[#327639] text-white font-semibold rounded-full hover:bg-[#327639]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#327639]/20 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formStatus === "idle" && (
                  <>
                    <Send className="w-4 h-4" /> Envoyer la demande
                  </>
                )}
                {formStatus === "sending" && "Envoi en cours..."}
                {formStatus === "sent" && "✓ Message envoyé !"}
                {formStatus === "error" && "Réessayer l'envoi"}
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center gap-8"
          >
            <div>
              <h3 className="text-xl font-bold text-[#0d5494] mb-6">
                Informations de contact
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#327639]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#327639]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0d5494]">Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm text-gray-500 hover:text-[#327639] transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0f7fc1]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#0f7fc1]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0d5494]">WhatsApp</p>
                    <p className="text-sm text-gray-500">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0d5494]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#0d5494]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0d5494]">Adresse de réservation</p>
                    <p className="text-sm text-gray-500">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA banner */}
            <div className="bg-gradient-to-br from-[#327639] to-[#0d5494] rounded-2xl p-8 text-center">
              <p className="text-white text-lg font-bold mb-2">
                Voyager autrement, agir durablement
              </p>
              <p className="text-white/70 text-sm">
                Rejoignez une aventure humaine, écologique et inoubliable.
              </p>
              <p className="text-white/50 text-xs mt-4 italic">
                {SITE_CONFIG.slogan}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
