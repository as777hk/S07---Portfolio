export type Project = {
  slug: string; number: string; title: string; category: string; kind: string;
  description: string; label: string; visual: string; overview: string;
  approach: string[]; stack: string[];
};

export const projects: Project[] = [
  {
    slug: "network-study", number: "01", title: "Network Study", category: "CREATIVE TECHNOLOGY",
    kind: "INTERACTIVE 3D STUDY", description: "A browser-based study of connected points, spatial relationships and pointer-reactive movement.",
    label: "THREE.JS / SPATIAL STUDY", visual: "orb",
    overview: "An original interactive visual experiment created for this website. It uses a lightweight 3D network to explore connection, depth and motion.",
    approach: ["Generate a spatial point structure and connect nearby nodes.", "Respond subtly to pointer movement without making the page difficult to read.", "Respect reduced-motion settings and keep the experience lightweight."],
    stack: ["Three.js", "TypeScript", "WebGL", "Creative coding"]
  },
  {
    slug: "secure-surface", number: "02", title: "Secure Surface", category: "CYBERSECURITY",
    kind: "CONCEPT STUDY", description: "A secure-by-design interface concept focused on trust, clarity and responsible data handling.",
    label: "SECURITY / UX STUDY", visual: "grid",
    overview: "A concept study for communicating security decisions in a product interface. The focus is on readable states, clear user consent and reducing ambiguity around sensitive actions.",
    approach: ["Map data and trust boundaries before shaping the interface.", "Make security states understandable instead of intimidating.", "Treat validation, privacy and accessibility as part of design."],
    stack: ["Threat modeling concepts", "UI/UX", "TypeScript", "Secure design"]
  },
  {
    slug: "motion-language", number: "03", title: "Motion Language", category: "ENGINEERING",
    kind: "INTERACTION STUDY", description: "A motion system for transitions, progressive disclosure and tactile interface feedback.",
    label: "MOTION / INTERACTION", visual: "wave",
    overview: "A study in using motion as feedback. Each movement has a purpose: show hierarchy, communicate state or help someone understand where they are.",
    approach: ["Use short, interruptible transitions for feedback.", "Animate only properties that support an interaction.", "Keep the experience functional when motion is reduced."],
    stack: ["Motion", "React", "CSS", "Accessibility"]
  },
  {
    slug: "security-field-notes", number: "04", title: "Security Field Notes", category: "CYBERSECURITY",
    kind: "DOCUMENTATION STUDY", description: "A structured way to document lab observations, evidence and remediation notes.",
    label: "RESEARCH / DOCUMENTATION", visual: "terminal",
    overview: "A documentation format for keeping security learning reproducible. Notes separate scope, method, observations and remediation so findings can be reviewed responsibly.",
    approach: ["Record authorization and scope before any activity.", "Keep observations evidence-based and reproducible.", "Explain risk and remediation in language developers can act on."],
    stack: ["Technical writing", "Security research", "Markdown", "Documentation"]
  }
];

export type Note = {
  slug: string; number: string; category: string; title: string; excerpt: string; intro: string;
  sections: Array<{ heading: string; body: string }>;
};

export const notes: Note[] = [
  {
    slug: "secure-by-design", number: "01", category: "SECURE ENGINEERING",
    title: "Security should be designed in, not added later.",
    excerpt: "A practical starting point for bringing security thinking into the earliest stages of a product.",
    intro: "Security is most useful when it shapes decisions before they become expensive to change. This note outlines a simple way to bring security thinking into everyday product work.",
    sections: [
      { heading: "Start with the system", body: "Map the people, data, services and trust boundaries involved. A clear system picture makes it easier to ask what needs protection and where assumptions exist." },
      { heading: "Make risks concrete", body: "Describe realistic misuse cases and the impact they could have. Prioritize the risks that matter to the product instead of treating every theoretical issue as equally urgent." },
      { heading: "Build feedback into the workflow", body: "Use code review, dependency checks, secure defaults and focused testing as regular engineering activities." }
    ]
  },
  {
    slug: "responsible-lab-notes", number: "02", category: "RESEARCH PRACTICE",
    title: "A responsible format for security lab notes.",
    excerpt: "How to document scope, methodology, observations and remediation without overstating a finding.",
    intro: "Good security notes are clear about what was tested, where it was tested and what the evidence actually shows.",
    sections: [
      { heading: "Write down the scope", body: "Name the authorized environment, its boundaries and any exclusions. Keep practice inside systems you own or have explicit permission to test." },
      { heading: "Separate evidence from interpretation", body: "Record the observation first. Then explain what it may mean and what remains uncertain." },
      { heading: "Close with remediation", body: "A useful note helps someone reduce risk. Include a practical fix and verification steps." }
    ]
  },
  {
    slug: "motion-with-intent", number: "03", category: "CREATIVE ENGINEERING",
    title: "Motion is an interface language.",
    excerpt: "Using movement to explain hierarchy, feedback and spatial relationships.",
    intro: "Motion can make a digital product feel coherent, but more animation does not automatically mean a better experience.",
    sections: [
      { heading: "Give every movement a job", body: "Use transitions to show where something came from, what changed or what action just happened." },
      { heading: "Respect the device", body: "Keep pointer-driven experiences optional, use lightweight effects on mobile and respect reduced-motion preferences." },
      { heading: "Keep clarity first", body: "Timing, contrast and hierarchy should remain understandable without animation." }
    ]
  }
];

export const focus = [
  { n: "01", title: "Web application security", text: "Understanding application boundaries, common weaknesses and safer implementation patterns." },
  { n: "02", title: "Network & systems", text: "Exploring how connected systems communicate, fail and can be defended." },
  { n: "03", title: "Vulnerability research", text: "Learning through authorized labs, careful evidence and responsible reporting." },
  { n: "04", title: "Secure engineering", text: "Bringing validation, privacy and secure defaults into development." }
];