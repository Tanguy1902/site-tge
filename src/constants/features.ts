import {
  Leaf,
  Ship,
  TreePine,
  Bird,
  Sunrise,
  Heart,
  GraduationCap,
  Building2,
  Compass,
  HandHeart,
  Check,
  X,
  Shield,
  BadgeCheck,
  LifeBuoy,
  Headset,
  type LucideIcon,
} from "lucide-react";

// --- Why Choose Section ---
export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const WHY_CHOOSE: WhyChooseItem[] = [
  {
    icon: Leaf,
    title: "Tourisme responsable et solidaire",
    description:
      "Chaque voyage contribue directement au développement local et à la préservation de l'environnement malgache.",
  },
  {
    icon: Ship,
    title: "Descente légendaire du fleuve",
    description:
      "Naviguez sur la Tsiribihina, l'un des fleuves les plus spectaculaires de Madagascar.",
  },
  {
    icon: TreePine,
    title: "Projet réel de reboisement",
    description:
      "Participez activement à la plantation d'arbres endémiques avec les communautés locales.",
  },
  {
    icon: Bird,
    title: "Faune sauvage exceptionnelle",
    description:
      "Observez lémuriens, oiseaux endémiques et une biodiversité unique au monde.",
  },
  {
    icon: Sunrise,
    title: "Expériences authentiques",
    description:
      "Vivez des moments humains inoubliables : feux de camp, bivouac sous les étoiles, rencontres locales.",
  },
];

// --- About Values ---
export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ABOUT_VALUES: ValueItem[] = [
  {
    icon: Leaf,
    title: "Richesses naturelles & culturelles",
    description:
      "Valoriser les trésors uniques de Madagascar à travers des expéditions immersives.",
  },
  {
    icon: Heart,
    title: "Tourisme durable",
    description:
      "Promouvoir un tourisme respectueux des communautés et de l'environnement.",
  },
  {
    icon: Shield,
    title: "Sécurité & organisation",
    description:
      "Garantir des standards élevés de sécurité et une logistique irréprochable.",
  },
  {
    icon: Compass,
    title: "Voyages qui ont du sens",
    description:
      "Créer des expériences mémorables qui laissent une empreinte positive.",
  },
];

// --- Audience ---
export interface AudienceItem {
  icon: LucideIcon;
  label: string;
}

export const AUDIENCE: AudienceItem[] = [
  { icon: Heart, label: "Amoureux de la nature" },
  { icon: GraduationCap, label: "Étudiants et jeunes professionnels" },
  { icon: Building2, label: "Entreprises (team building responsable)" },
  { icon: Compass, label: "Voyageurs engagés" },
  { icon: HandHeart, label: "ONG et volontaires" },
];

// --- Included / Not included ---
export const INCLUDED_ITEMS = [
  "Transport terrestre",
  "Guide professionnel expérimenté",
  "Équipe locale rivière",
  "Hébergement (hôtel + bivouac)",
  "Pension complète durant la descente",
  "Matériel de camping",
  "Organisation reboisement",
  "Certificat d'impact écologique",
];

export const NOT_INCLUDED_ITEMS = [
  "Vol intérieur (optionnel selon formule)",
  "Assurance voyage",
  "Dépenses personnelles",
];

export { Check as CheckIcon, X as XIcon };

// --- Safety ---
export interface SafetyItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SAFETY_ITEMS: SafetyItem[] = [
  {
    icon: BadgeCheck,
    title: "Guides certifiés",
    description: "Guides expérimentés avec plus de 15 ans de terrain",
  },
  {
    icon: Shield,
    title: "Équipements de sécurité",
    description: "Matériel aux normes fourni pour toutes les activités",
  },
  {
    icon: LifeBuoy,
    title: "Normes conformes",
    description: "Organisation conforme aux normes locales et internationales",
  },
  {
    icon: Headset,
    title: "Assistance complète",
    description: "Assistance logistique 24/7 durant toute l'expédition",
  },
];

// --- Eco Commitment ---
export interface EcoStat {
  value: string;
  label: string;
  suffix?: string;
}

export const ECO_STATS: EcoStat[] = [
  { value: "3", label: "arbres minimum plantés", suffix: "à 10" },
  { value: "15", label: "ans d'expérience terrain", suffix: "+" },
  { value: "100", label: "engagement local", suffix: "%" },
];
