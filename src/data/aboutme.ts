export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Phillip Rust",
  title: "Ph.D. Student",
  institution: "University of Copenhagen",
  // Note that links work in the description
  description:
    "I'm a final-year PhD student in natural language processing at the <a href='https://coastalcph.github.io/'>University of Copenhagen</a>, where I'm advised by <a href=https://anderssoegaard.github.io/>Prof. Anders Søgaard</a>. <br><br> My research broadly focuses on the development of multimodal (text, audio, vision) and multilingual language models via self-supervised representation learning and post-training techniques. I am also interested in topics related to tokenization, privacy-preserving ML, interpretability, and model merging. <br><br> Contrary to popular belief, I am not related to the <a href=https://en.wikipedia.org/wiki/Rust_(programming_language)>programming language</a>, the <a href=https://en.wikipedia.org/wiki/Rust_(video_game)>video game</a>, or the <a href=https://en.wikipedia.org/wiki/Rust,_Baden-W%C3%BCrttemberg>home of the Europa-Park</a>.",
  email: "p.rust@di.ku.dk",
  imageUrl:
    "/images/me.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=6MxyDqcAAAAJ",
  githubUsername: "xplip",
  linkedinUsername: "phillip-rust",
  twitterUsername: "rust_phillip",
  // blogUrl: "https://",
  cvUrl: "/pdfs/phillip_rust_resume_jan25.pdf",
  institutionUrl: "https://di.ku.dk/english/research/nlp/",
  // altName: "",
  secretDescription: "Big fan of cats and capybaras",
};
