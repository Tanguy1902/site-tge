import {
  Globe,
  Layers,
  Mountain,
  Flame,
  History,
  Map,
  Compass,
  type LucideIcon,
} from "lucide-react";

export interface GeologyStep {
  id: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  content: string[];
  period?: string;
}

export const GEOLOGY_DATA = {
  title: "TSIRIBIHINA GREEN EXPEDITION",
  intro: "Le T.G.E est une agence de référence en matière de découverte sur la science de la terre auxquelles Madagascar recèle encore. Pour jouir le moment inoubliable de vos vacances à Madagascar, la Grande vous offre des connaissances utiles dans le SITE de Mangorohoro.",
  panthalassa: {
    title: "PANTHALASSA",
    content: "Faisant suite à la valorisation de ce SITE PATRIMOINE, le respect de la Nature est un ordre de Slogan à suivre. Tout commence par PANTHALASSA.",
  },
  steps: [
    {
      id: "I",
      title: "La formation de RODINIA",
      subtitle: "Terre mère",
      icon: Globe,
      period: "Mésoprotérozoïque (> 1 milliard d'années)",
      content: [
        "Un supercontinent qui s'est formé il y a plus de 1 milliard d'années.",
        "À ce temps, Madagascar se trouvait au cœur du bloc continental.",
      ],
    },
    {
      id: "II",
      title: "PANGÉE ou PANGEA",
      subtitle: "L'union des terres",
      icon: Map,
      period: "Au-delà du Paléozoïque",
      content: [
        "Un super continent reconnu par le paléomagnétisme.",
        "Plus précisément au-delà de la période du Paléozoïque.",
      ],
    },
    {
      id: "III",
      title: "Processus géologiques",
      subtitle: "Naissance des continents",
      icon: Layers,
      content: [
        "Durant le long chemin parcouru, il y a eu la naissance du CRATON (Laurentia).",
        "Formation des blocs : BALTICA, AMAZONE, AFRIQUE (dont Madagascar fait partie) et ATLANTIQUE.",
      ],
    },
    {
      id: "IV",
      title: "Vestiges de découvertes",
      subtitle: "Site de référence",
      icon: Compass,
      content: [
        "Ce site est considéré comme un site de référence.",
        "Le T.G.E vous propose durant le voyage des dégustations de plats du terroir à gogo.",
      ],
    },
    {
      id: "V",
      title: "La dislocation",
      subtitle: "La dérive des continents",
      icon: Flame,
      content: [
        "Lorsque le Supercontinent s'est disloqué, le bloc GONDWANA a permis à Madagascar de se glisser sur la grande plaque tectonique.",
        "C'était la longue bataille des volcans dans l'hémisphère SUD : NEVADOS de Chillan, MACHU PICCHU, NYIRAGONGO, KILIMANJARO, KARTHALA, BEMARAHA, TRITRIVA, JAVA, KRAKATOA...",
      ],
    },
    {
      id: "VI",
      title: "Impact du KILIMANJARO",
      subtitle: "Formation des laves castriques",
      icon: Mountain,
      content: [
        "Le Kilimandjaro, montagne la plus haute d'Afrique (5895m), crache sur la chaîne montagneuse de Bemaraha à une altitude de 400 à 510m.",
        "Favorisant la formation des laves castriques rocheuses.",
      ],
    },
    {
      id: "VII",
      title: "SITE de Berceau de l'humanité",
      subtitle: "Richesses géologiques",
      icon: History,
      content: [
        "Homo sapiens, Fleuve Océan, Cours d'eaux, Lacs, fossiles, falaises, geysers...",
        "Chutes d'eaux : telles sont les richesses laissées par les périodes suivantes : CÉNOZOÏQUE, CRÉTACÉ, JURASSIQUE, TRIASSIQUE, PERMIEN, CARBONIFÈRE, DÉVONIEN, PALÉOZOÏQUE.",
      ],
    },
  ],
  footer: "Venez visiter ce lieu sacré pour nourrir votre connaissance avec T.G.E.",
};
