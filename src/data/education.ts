export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2021 – Present",
    institution: "University of Copenhagen",
    degree: "Ph.D. in Computer Science",
    advisor: "Prof. Anders Søgaard",
  },
  {
    year: "2018 – 2020",
    institution: "Technical University of Darmstadt",
    degree: "M.Sc. in Computer Science",
    advisor: "Jonas Pfeiffer & Prof. Iryna Gurevych",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2015 – 2018",
    institution: "DHBW Stuttgart",
    degree: "B.Sc. in Computer Science",
    // advisor: "Jonas Pfeiffer & Prof. Iryna Gurevych",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
