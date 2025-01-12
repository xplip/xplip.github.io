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
    "I'm a final-year <a href='https://di.ku.dk/english/research/nlp/'>PhD student</a> in natural language processing. My research focuses on the development of multilingual, multimodal, and trustworthy language models via self-supervised representation learning and post-training techniques.",
  email: "p.rust@di.ku.dk",
  imageUrl:
    "https://phillip.rs/images/profile.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=6MxyDqcAAAAJ",
  githubUsername: "xplip",
  linkedinUsername: "phillip-rust",
  twitterUsername: "rust_phillip",
  // blogUrl: "https://",
  cvUrl: "https://phillip.rs/files/phillip_rust_resume_mar2024.pdf",
  institutionUrl: "https://di.ku.dk/english/research/nlp/",
  // altName: "",
  secretDescription: "Big fan of cats and capybaras",
};
