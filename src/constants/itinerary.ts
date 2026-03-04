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
    title: "Antananarivo → Antsirabe",
    icon: Car,
    description: "Départ vers les Hautes Terres",
    activities: [
      "Départ en véhicule confortable",
      "Briefing et présentation de l'expédition",
      "Nuit à l'hôtel",
    ],
  },
  {
    day: "Jour 2",
    title: "Antsirabe → Miandrivazo",
    icon: Mountain,
    description: "Route panoramique vers l'Ouest",
    activities: [
      "Route panoramique vers l'Ouest",
      "Installation en lodge",
      "Préparation à la descente du fleuve",
    ],
  },
  {
    day: "Jour 3 à 5",
    title: "Descente de la Tsiribihina",
    icon: Ship,
    description: "L'aventure au fil de l'eau",
    activities: [
      "Navigation en pirogue sécurisée",
      "Baignade dans des cascades naturelles",
      "Observation de la faune sauvage",
      "Bivouac en pleine nature",
      "Repas conviviaux au feu de camp",
    ],
  },
  {
    day: "Jour Impact",
    title: "Reboisement 🌱",
    icon: TreePine,
    description: "Votre empreinte positive",
    activities: [
      "Sensibilisation environnementale",
      "Plantation d'arbres endémiques",
      "Échange avec les communautés locales",
      "Certificat de reboisement remis aux participants",
    ],
    isHighlight: true,
  },
  {
    day: "Jour 6",
    title: "Belo-sur-Tsiribihina → Morondava",
    icon: Sunset,
    description: "Vers la côte et les baobabs",
    activities: [
      "Route vers la côte",
      "Visite de l'allée des baobabs au coucher du soleil",
      "Nuit en hôtel bord de mer",
    ],
  },
  {
    day: "Jour 7",
    title: "Retour vers Antananarivo",
    icon: Plane,
    description: "Fin de l'aventure",
    activities: ["Retour en avion ou par la route (selon formule)"],
  },
];
