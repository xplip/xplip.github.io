export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  location?: string;
}

export const experienceData: Experience[] = [
  {
    date: "08/24 – 02/25",
    title: "Applied Scientist Intern",
    company: "Amazon AGI",
    description:
      "Post-training for Amazon Nova Sonic. Research on modular and multi-objective preference optimization for conversational speech in multimodal LLMs.",
    manager: "Marius Cotescu",
    companyUrl: "https://www.amazon.science/",
    location: "Cambridge, UK"
  },
  {
    date: "06/23 – 12/23",
    title: "Research Scientist Intern",
    company: "Meta (FAIR)",
    description:
      "Research on self-supervised video pretraining for large-scale sign language translation.",
    manager: "Jean Maillard",
    companyUrl: "https://ai.meta.com/research/",
    location: "Menlo Park, USA"
  },
];
