export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}
export const publicationData: Publication[] = [
  {
    year: "2024",
    conference: "ACL",
    title: "Towards Privacy-Aware Sign Language Translation at Scale",
    authors: "Phillip Rust, Bowen Shi, Skyler Wang, Necati Cihan Camgöz, Jean Maillard",
    paperUrl: "https://arxiv.org/abs/2402.09611",
    codeUrl: "https://github.com/facebookresearch/ssvp_slt",
    // tldr: "TODO",
    // imageUrl: "/images/ssvp_slt.png",
    // award: "TODO",
  },
  {
    year: "2024",
    conference: "HuCLLM Workshop @ ACL",
    title: "Vision-Language Models under Cultural and Inclusive Considerations",
    authors: "Antonia Karamolegkou, Phillip Rust, Yong Cao, Ruixiang Cui, Anders Søgaard, Daniel Hershcovich",
    paperUrl: "https://arxiv.org/abs/2407.06177",
    codeUrl: "https://github.com/coastalcph/vizwiz-culture",
    // tldr: "TODO",
    // imageUrl: "TODO",
    // award: "TODO",
  },
  {
    year: "2023",
    conference: "EMNLP",
    title: "PHD: Pixel-Based Language Modeling of Historical Documents",
    authors: "Nadav Borenstein, Phillip Rust, Desmond Elliott, Isabelle Augenstein",
    paperUrl: "https://aclanthology.org/2023.emnlp-main.7",
    // codeUrl: "TODO",
    // tldr: "TODO",
    // imageUrl: "TODO",
    // award: "TODO",
  },
  {
    year: "2023",
    conference: "EMNLP",
    title: "Text Rendering Strategies for Pixel Language Models",
    authors: "Jonas Lotz, Elizabeth Salesky, Phillip Rust, Desmond Elliott",
    paperUrl: "https://aclanthology.org/2023.emnlp-main.628",
    // codeUrl: "TODO",
    // tldr: "TODO",
    // imageUrl: "TODO",
    // award: "TODO",
  },
  {
    year: "2023",
    conference: "ICLR",
    title: "Language Modelling with Pixels",
    authors: "Phillip Rust, Jonas F. Lotz, Emanuele Bugliarello, Elizabeth Salesky, Miryam de Lhoneux, Desmond Elliott",
    paperUrl: "https://arxiv.org/abs/2207.06991",
    codeUrl: "https://github.com/xplip/pixel",
    // tldr: "TODO",
    // imageUrl: "TODO",
    award: "Notable-top-5% (Oral)",
  },
  {
    year: "2023",
    conference: "ICML",
    title: "Differential Privacy, Linguistic Fairness, and Training Data Influence: Impossibility and Possibility Theorems for Multilingual Language Models",
    authors: "Phillip Rust, Anders Søgaard",
    paperUrl: "https://proceedings.mlr.press/v202/rust23a.html",
    // codeUrl: "TODO",
    // tldr: "TODO",
    // imageUrl: "TODO",
    // award: "TODO",
  },
  {
    year: "2022",
    conference: "ACL",
    title: "Challenges and Strategies in Cross-Cultural NLP",
    authors: "Daniel Hershcovich, Stella Frank, Heather Lent, Miryam de Lhoneux, Mostafa Abdou, Stephanie Brandl, Emanuele Bugliarello, Laura Cabello Piqueras, Ilias Chalkidis, Ruixiang Cui, Constanza Fierro, Katerina Margatina, Phillip Rust, Anders Søgaard",
    paperUrl: "https://aclanthology.org/2022.acl-long.482",
    // codeUrl: "TODO",
    // tldr: "TODO",
    // imageUrl: "TODO",
    // award: "TODO",
  },
  {
    year: "2022",
    conference: "ICFHR",
    title: "Date Recognition in Historical Parish Records",
    authors: "Constanza Fierro, Laura Cabello Piqueras, Jonas F. Lotz, Phillip Rust, Joen Rommedahl, Jeppe Klok Due, Christian Igel, Desmond Elliott, Carsten Bøcker Pedersen, Israfel Salazar, Anders Søgaard",
    paperUrl: "https://link.springer.com/chapter/10.1007/978-3-031-21648-0_4",
    // codeUrl: "TODO",
    // tldr: "TODO",
    // imageUrl: "TODO",
    // award: "TODO",
  },
  {
    year: "2021",
    conference: "ACL",
    title: "How Good is Your Tokenizer? On the Monolingual Performance of Multilingual Language Models",
    authors: "Phillip Rust, Jonas Pfeiffer, Ivan Vulic, Sebastian Ruder, Iryna Gurevych",
    paperUrl: "https://aclanthology.org/2021.acl-long.243",
    codeUrl: "https://github.com/adapter-hub/hgiyt",
    // tldr: "TODO",
    // imageUrl: "TODO",
    // award: "TODO",
  },
  {
    year: "2020",
    conference: "ACL",
    title: "PuzzLing Machines: A Challenge on Learning From Small Data",
    authors: "Gözde Gül Şahin, Yova Kementchedjhieva, Phillip Rust, Iryna Gurevych",
    paperUrl: "https://aclanthology.org/2020.acl-main.115",
    codeUrl: "https://ukplab.github.io/PuzzLing-Machines/",
    // tldr: "TODO",
    // imageUrl: "TODO",
    // award: "TODO",
  },
];
