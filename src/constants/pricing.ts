export interface PricingPlan {
  name: string;
  price: string;
  priceLabel: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Standard",
    price: "2 300 000",
    priceLabel: "Ar",
    description: "L'essentiel de l'aventure Tsiribihina",
    features: [
      "Transport terrestre",
      "Guide professionnel",
      "Hébergement bivouac",
      "Pension complète descente",
      "Matériel de camping",
      "Organisation reboisement",
      "Certificat d'impact",
      "retour Morondava-Tanà en bus VIP"
    ],
    cta: "Réserver Standard",
  },
  {
    name: "Confort",
    price: "5 000 000",
    priceLabel: "Ar",
    description: "L'aventure avec tout le confort",
    features: [
      "Tout le Standard +",
      "Hébergement hôtel amélioré",
      "Équipe locale rivière dédiée",
      "Repas gastronomiques locaux",
      "Photos souvenirs professionnelles",
      "Kit voyageur exclusif",
      "Accès communauté voyageurs",
      "billet d'avion retour",
      "toutes préstations en pension complète"
    ],
    isPopular: true,
    cta: "Réserver Confort",
  },
  {
    name: "Premium",
    price: "Sur devis",
    priceLabel: "",
    description: "Une expédition sur-mesure et exclusive",
    features: [
      "Tout le Confort +",
      "Itinéraire personnalisé",
      "Vol intérieur inclus",
      "Hébergement premium",
      "Guide privé",
      "Assistance VIP complète",
      "Expériences exclusives",
    ],
    cta: "Demander un devis",
  },
];

export const BONUS_ITEMS = [
  "Certificat officiel de reboisement",
  "Photos souvenirs du voyage",
  "Accès à la communauté des voyageurs engagés",
];
