import {
  Car,
  Mountain,
  Ship,
  TreePine,
  Sunset,
  Plane,
  type LucideIcon,
} from "lucide-react";

export interface ItineraryDay {
  day: string;
  title: string;
  icon: LucideIcon;
  description: string;
  activities: string[];
  isHighlight?: boolean;
}

export const ITINERARY: ItineraryDay[] = [
  {
    day: "Jour 1",
    title: "Antananarivo → Antsirabe → Miandrivazo",
    icon: Car,
    description: "Départ vers l’Ouest",
    activities: [
      "Départ en véhicule confortable",
      "Briefing et présentation de l’expédition",
      "Nuit à l’hôtel (La Princesse)",
    ],
  },
  {
    day: "Jour 2",
    title: "Miandrivazo → Masiakampy → Vallée du Rift",
    icon: Mountain,
    description: "Plateau sauvage et préparation",
    activities: [
      "Route panoramique vers l’Ouest, plateau sauvage",
      "Préparation à la descente du fleuve",
      "Camping sur la montagne de Bemaraha",
    ],
  },
  {
    day: "Jour 3",
    title: "Randonnée et escalade",
    icon: Mountain,
    description: "Aventure et nature",
    activities: [
      "Navigation en pirogue sécurisée",
      "Baignade dans des cascades naturelles",
      "Déjeuner Pic Nic",
      "Observation de la faune et flore sauvages",
      "Bivouac en pleine nature",
      "Repas conviviaux au feu de camp",
    ],
  },
  {
    day: "Jour 4",
    title: "Reboisement 🌱",
    icon: TreePine,
    description: "Sensibilisation environnementale",
    activities: [
      "Sensibilisation environnementale",
      "Plantation d’arbres endémiques",
      "Échange avec les communautés locales",
      "Certificat de reboisement remis aux participants",
    ],
    isHighlight: true,
  },
  {
    day: "Jour 5",
    title: "Entrer dans la gorge de Bemaraha",
    icon: Ship,
    description: "Navigation vers Tsiribihina",
    activities: [
      "Navigation vers Tsiribihina",
      "Camping et animation dance folklorique au village d’Ambatomisay",
    ],
  },
  {
    day: "Jour 6",
    title: "Dernier jour de navigation & Morondava",
    icon: Sunset,
    description: "Safari et Allée des Baobabs",
    activities: [
      "Visite de l’allée des baobabs au coucher du soleil",
      "Safari d’exception",
      "Nuitée à l’hôtel SUN BEACH Morondava",
    ],
  },
  {
    day: "Jour 7",
    title: "Retour sur Antananarivo",
    icon: Plane,
    description: "Fin de l’aventure",
    activities: ["Retour sur Antananarivo"],
  },
];
