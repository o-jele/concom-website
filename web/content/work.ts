import type { Sector } from "./site";

export type CaseStudy = {
  slug: string;
  client: string;
  shortClient: string;
  subtitle: string;
  sector: Sector;
  scope: string;
  brief: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "buy-malawi-strategy",
    client: "Buy Malawi Strategy",
    shortClient: "Buy Malawi",
    subtitle: "UNDP with the Ministry of Industry, Trade and Tourism",
    sector: "Government",
    scope: "Campaign PR, IEC production, media engagement, public awareness",
    brief:
      "Build a culture of buying locally manufactured goods as a way of growing the national economy.",
    outcome:
      "Ran the campaign's PR, including the production and circulation of all IEC materials, and delivered media engagement and public awareness services. We organised and managed the panel discussions and public debates that carried the strategy after its launch by President Peter Mutharika in 2016.",
  },
  {
    slug: "eu-delegation-to-malawi",
    client: "Delegation of the European Union to Malawi",
    shortClient: "EU Delegation",
    subtitle: "Project visibility and communications",
    sector: "Diplomatic",
    scope: "Communications strategy, media engagement, training",
    brief:
      "Give EU-funded work in Malawi a visible, consistent public presence, and equip the Delegation to handle its own media relationships.",
    outcome:
      "Developed and partially implemented the Delegation's inaugural communications strategy. Built their media engagement strategy and the core media contact database still in use, and delivered in-house media engagement training to both local and foreign staff.",
  },
  {
    slug: "actionaid-malawi",
    client: "ActionAid Malawi",
    shortClient: "ActionAid",
    subtitle: "C19RM and SADC social accountability programme",
    sector: "Civil society",
    scope: "Media materials, journalism training, coverage monitoring",
    brief:
      "Close out the C19RM project with materials that would outlive it, and strengthen the journalists and civil society partners reporting on public resources.",
    outcome:
      "Produced end-of-project media materials — feature articles, a video documentary, a project booklet and a Community Led Monitoring training manual. We train journalists in social accountability and investigative journalism on a regular basis, train CSO partners in media literacy, and provide coverage monitoring for the SADC project Strengthening Social Accountability and Oversight Capacity for Rights-based Public Resources Management in Health and Agriculture in Southern Africa.",
  },
  {
    slug: "royal-norwegian-embassy-5050",
    client: "Royal Norwegian Embassy",
    shortClient: "50:50 Campaign",
    subtitle: "50:50 Campaign, via ActionAid and the Centre for Civil Society Strengthening",
    sector: "Diplomatic",
    scope: "Campaign strategy, digital campaign, M&E frameworks, public awareness",
    brief:
      "Shift voter perceptions of female candidates during the 2019 Tripartite Elections in order to increase women's representation in elected positions.",
    outcome:
      "Our senior experts managed the nationwide campaign end to end: campaign communication strategy, digital campaign strategy and monitoring and evaluation frameworks, then conceptualised and executed the public awareness work and produced the campaign reports.",
  },
  {
    slug: "ifes-national-voter-mobilisation",
    client: "International Foundation for Electoral Systems",
    shortClient: "IFES / MEC",
    subtitle: "On behalf of the Malawi Electoral Commission, with USAID support",
    sector: "Government",
    scope: "National campaign concept, all materials, social media, monitoring",
    brief: "Mobilise more Malawians to turn out and vote in the 2020 Presidential Election.",
    outcome:
      "Awarded the contract to implement the National Voter Mobilisation Campaign. We conceptualised the campaign, designed and produced every material — videos, audio, jingles and posters — built and ran the social media platforms, monitored performance and produced periodic reports for the digital campaign, Dziko Langa, Chisankho Changa: my country, my choice.",
  },
  {
    slug: "global-book-alliance",
    client: "Global Book Alliance",
    shortClient: "Global Book Alliance",
    subtitle: "On behalf of USAID — Ntchisi, Dowa and Salima",
    sector: "Donor",
    scope: "Education social and behaviour change campaign",
    brief: "Encourage a reading culture among primary school learners in three districts.",
    outcome:
      "Implemented an education social and behaviour change campaign across the three districts, taking the message to schools and the communities around them.",
  },
  {
    slug: "sunseed-oil-csr",
    client: "SunSeed Oil Limited",
    shortClient: "SunSeed Oil",
    subtitle: "Corporate social responsibility policy and strategy",
    sector: "Private sector",
    scope: "Outreach rallies, perception surveys, CSR policy and strategy",
    brief:
      "The edible oil producer had been in conflict with surrounding communities for over a decade, across a range of issues, and needed a settlement that both sides would accept.",
    outcome:
      "Conceptualised and ran the outreach rallies, conducted perceptions surveys, then drafted and validated a CSR policy and strategy and launched one that was agreeable to all parties. We continue to implement the policy on the company's behalf through a CSR committee that includes community representatives.",
  },
  {
    slug: "heslgb",
    client: "Higher Education Students' Loans and Grants Board",
    shortClient: "HESLGB",
    subtitle: "Stakeholder and media engagement",
    sector: "Government",
    scope: "Stakeholder engagement planning and management, media interfaces",
    brief: "A new board was grappling with reputational hitches and needed stakeholder buy-in.",
    outcome:
      "Planned and managed all of the Board's stakeholder engagements, including interface meetings with the media at different levels.",
  },
];

export type RosterEntry = {
  name: string;
  fullName?: string;
  body: string;
};

export const roster: RosterEntry[] = [
  {
    name: "NICE",
    fullName: "National Initiative for Civic Education",
    body: "Community outreach activities and public debates, and media relations before NICE Public Trust recruited internal communication staff.",
  },
  {
    name: "GIZ",
    body: "Planning, managing and facilitating high-level conferences with partners — participants, registers, note taking and reporting.",
  },
  {
    name: "Ministry of Transport",
    body: "Through the EU Delegation, handling the ministry's annual stakeholder conferences reviewing sector performance.",
  },
  {
    name: "TEVETA",
    fullName: "Technical, Entrepreneurial, Vocational and Education Training Authority",
    body: "Public engagement services and conferences for the Technical, Entrepreneurial, Vocational and Education Training Authority.",
  },
  {
    name: "CISANET",
    body: "Annual stakeholder conferences, plus editing, proofreading and translation of publications and project reports.",
  },
  {
    name: "CEDEP",
    fullName: "Centre for Development of People",
    body: "Website development and ongoing management, media and stakeholder engagement, and annual stakeholder conferences for the Centre for Development of People.",
  },
];

export function adjacent(slug: string): { prev: CaseStudy; next: CaseStudy } {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  const prev = caseStudies[(i - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(i + 1) % caseStudies.length];
  return { prev, next };
}
