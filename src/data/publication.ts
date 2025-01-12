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
    // imageUrl: "TODO",
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
    paperUrl: "https://openreview.net/forum?id=FkSp8VW8RjH",
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


// export const publicationData: Publication[] = [
//   // If you don't want to show publications, just make the array empty.
//   {
//     year: "2024",
//     conference: "NeurIPS",
//     title: "Scalable Causal Discovery in High-Dimensional Time Series",
//     authors: "Jane Smith, Sarah Johnson, Yue Zhang",
//     paperUrl: "https://arxiv.org/abs/2409.15476",
//     codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
//     //bibtex: "https://arxiv.org/abs/2409.15476.bib",
//     tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     award: "🏆 Best Paper Award",
//     // if you have an image in public/images, you can use it like this:
//     // imageUrl: "/images/publication-image.jpg"
//   },
//   {
//     year: "2023",
//     conference: "ICML",
//     title: "Robust Causal Discovery Under Distribution Shift",
//     authors: "Jane Smith, Xue Chen, Sarah Johnson",
//     paperUrl: "https://arxiv.org/abs/2302.13095",
//     codeUrl: "https://github.com/jsmith/robust-causal-discovery",
//   },
// ];
