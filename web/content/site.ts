export const site = {
  name: "ConCom PR & Publicity",
  url: "https://www.concom.mw",
  tagline: "We turn what institutions know into what people hear.",
  intro:
    "ConCom PR & Publicity is a locally owned and run corporate communications agency based in Lilongwe, Malawi. Since 2007 we have planned, managed and delivered communication, publicity and public engagement for development partners, government, civil society and business.",
  promise:
    "Most communication advice fails for one reason: nobody stayed long enough to learn the difference between what a client wants and what a client needs. That gap is where our work starts.",
  mission:
    "Offering communication solutions that speak to our clients' communication puzzles.",
  vision:
    "Becoming a leader in communication, public relations and advocacy services, in Malawi and beyond.",
  email: "info@concom.mw",
  phone: "+265 999 500 700",
  socials: [] as { label: string; href: string }[],
  compliance: [
    { label: "Registrar of Companies", value: "154610" },
    { label: "Malawi Revenue Authority TPIN", value: "31255294" },
    { label: "Office of the Director of Public Procurement", value: "31255294" },
  ],
};

export const nav = [
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Our Work" },
  { href: "/contact/", label: "Contact" },
];

export const office = {
  lines: [
    "NONM Building, Room 5",
    "Area 13, opposite the City Centre Mosque",
    "City Centre, Lilongwe",
  ],
  poBox: "P.O. Box 500, Lilongwe, Malawi",
};

export const partner = {
  name: "Wisdom Chimgwede",
  role: "Managing Partner",
  phone: "+265 999 500 700",
  email: "wisdom@concom.mw",
};

export const facts = [
  { value: "2007", label: "Operating since", numeric: true },
  { value: "Lilongwe, Malawi", label: "Based in", numeric: false },
  { value: "4", label: "Sectors served — public, private, NGO, diplomatic", numeric: true },
  { value: "3", label: "Registrations — ROC, MRA, ODPP", numeric: true },
];

export const clients = [
  "UNDP",
  "EU Delegation to Malawi",
  "ActionAid Malawi",
  "Royal Norwegian Embassy",
  "IFES / Malawi Electoral Commission",
  "USAID",
  "Global Book Alliance",
  "SunSeed Oil",
  "HESLGB",
  "NICE",
  "GIZ",
  "Ministry of Transport",
  "TEVETA",
  "CISANET",
  "CEDEP",
];

export const differentiators = [
  {
    title: "We can prove what the media did",
    body: "Through Nzika Centre for Education and Communication and our partnership with ReelAnalytics of Kenya, we run media monitoring infrastructure inside Malawi. Coverage reporting is measured, not estimated.",
    featured: true,
  },
  {
    title: "The network took twenty years",
    body: "Our contacts across Malawi's media houses were built over more than two decades of professional practice. Placement is a phone call, not a cold pitch.",
    featured: false,
  },
  {
    title: "Research before messaging",
    body: "We do our own field and desk research. Strategies are written from what audiences say, which is also what makes them defensible to a board or a donor.",
    featured: false,
  },
  {
    title: "Fluent in four sectors",
    body: "Diplomatic missions, ministries, NGOs and private companies each report to different people and answer to different rules. We work in all four and translate between them.",
    featured: false,
  },
];

export const whoWeAre = {
  kicker: "Who we are",
  headline: "A Malawian agency, working across every sector that has to explain itself in public.",
  paragraphs: [
    "ConCom PR & Publicity works in corporate branding, events management, visibility, awareness, and campaign planning, management and delivery. We also plan and carry out community outreach programmes on behalf of our clients.",
    "Our work cuts across sectors — public, private, non-governmental and the diplomatic corps. That range matters: a ministry, a donor delegation and an edible-oil producer are not talking to the same Malawi, and they should not be handed the same plan.",
    "We believe the main failure of most communication advisory services in Malawi comes from a lack of patience — from stopping at what a client thinks they want, rather than working out what will actually fit their need. We take the longer route on purpose.",
  ],
};

export const sectors = [
  "Donor",
  "Government",
  "Diplomatic",
  "Civil society",
  "Private sector",
] as const;

export type Sector = (typeof sectors)[number];
