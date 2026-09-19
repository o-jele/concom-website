export type SubService = {
  title: string;
  body: string;
};

export type Practice = {
  num: string;
  slug: string;
  title: string;
  headline: string;
  summary: string;
  icon: "research" | "strategy" | "media" | "campaigns" | "production";
  featured?: boolean;
  note?: string;
  subs: SubService[];
};

export const practices: Practice[] = [
  {
    num: "01",
    slug: "research-and-insight",
    title: "Research and insight",
    headline: "Finding out what is actually true before anything is written, printed or broadcast.",
    summary: "Field and desk research that tests whether a client's aspirations will hold.",
    icon: "research",
    subs: [
      {
        title: "Communication research",
        body: "Qualitative and quantitative field and desk research in the build-up to a client's communication and advocacy needs, to test whether their aspirations will hold.",
      },
      {
        title: "Transformation communication",
        body: "Most institutional data is produced for expert use. We take it and convert it into succinct, readable, usable summaries — because accessible content is what increases the impact of awareness and advocacy work.",
      },
      {
        title: "Dissemination",
        body: "Getting findings to the widest spectrum of stakeholders across research, policy and practice, through print, broadcast and online media, in plain language.",
      },
    ],
  },
  {
    num: "02",
    slug: "strategy-and-advisory",
    title: "Strategy and advisory",
    headline: "Blueprints built around the audience, not around the organogram.",
    summary: "Communication, advocacy and crisis strategies that start with the audience.",
    icon: "strategy",
    subs: [
      {
        title: "Communication strategies",
        body: "We start with the target audience, then decide the method. Where several techniques are in play, we keep branding and messaging consistent. We also advise on breaking one corporate strategy into mini-strategies for individual projects or products inside a larger institution.",
      },
      {
        title: "Advocacy strategies",
        body: "Strategies that help people express their views and concerns, reach information and services, and defend and promote their rights and responsibilities — grounded in research into how our client's sector and culture actually work.",
      },
      {
        title: "Crisis communication and management",
        body: "Reputation management is not a matter of crossing the bridge when you reach it. We develop crisis communication plans and train the core crisis management team before anything goes wrong.",
      },
    ],
  },
  {
    num: "03",
    slug: "media-relations",
    title: "Media relations",
    headline: "Two decades of relationships across the Malawi media, plus the infrastructure to measure what they publish.",
    summary: "Media engagement, buying and monitoring, and tailored media training.",
    icon: "media",
    featured: true,
    note: "Through our subsidiary Nzika Centre for Education and Communication, we partner ReelAnalytics of Kenya to operate media monitoring infrastructure in Malawi — a rare local capability we offer to international agencies and to the private and public sectors.",
    subs: [
      {
        title: "Media engagement",
        body: "We don't believe in quantity. We connect clients to the channel, or the mix of channels, that will communicate their programme rather than simply make noise.",
      },
      {
        title: "Media buying and monitoring",
        body: "One of the widest networks of media houses and contacts in the country, built over more than twenty years of practice. Through our subsidiary Nzika Centre for Education and Communication, we partner ReelAnalytics of Kenya to operate media monitoring infrastructure in Malawi — a rare local capability we offer to international agencies and to the private and public sectors.",
      },
      {
        title: "Tailored media training",
        body: "Press release writing and editing so statements don't end up in the spike bin, plus in-house training for communication and management teams in press release development, media relations, photography and social media management.",
      },
    ],
  },
  {
    num: "04",
    slug: "public-relations-and-campaigns",
    title: "Public relations and campaigns",
    headline: "Public engagement that reaches the ground, not only the capital.",
    summary: "PR, awareness campaigns, lobbying and CSR that reach the ground.",
    icon: "campaigns",
    subs: [
      {
        title: "Public relations",
        body: "A proven record in public engagement built on public speaking and community mobilisation. Combined with our media strengths, this is how we deliver result-oriented PR and publicity.",
      },
      {
        title: "Awareness campaigns",
        body: "Planning and running campaigns across social, economic and political strata, including social media profiling of a project, product or candidate.",
      },
      {
        title: "Lobbying and CSR",
        body: "Facilitating lobby engagements with politicians, especially parliamentarians, so clients can shape the national policy that affects their work. We also manage clients' corporate social responsibility and community relations programmes.",
      },
    ],
  },
  {
    num: "05",
    slug: "creative-production-and-events",
    title: "Creative production and events",
    headline: "Printing to communicate, not to confuse.",
    summary: "IEC production, corporate events, and public speaking and conferences.",
    icon: "production",
    subs: [
      {
        title: "IEC production",
        body: "Graphic designers who know their trade and an in-house grip on IEC message creation. Billboards, banners of all sizes, posters, T-shirts, brochures, business cards and everything between.",
      },
      {
        title: "Corporate events management",
        body: "Indoor and outdoor events of every scale, planned as communication: we design each event around the message and the audience it has to reach, which is why our events leave a mark on the client's work.",
      },
      {
        title: "Public speaking and conferences",
        body: "Directing corporate events and product launches, from a hotel conference room to a stadium, and planning, managing and facilitating press conferences on clients' behalf.",
      },
    ],
  },
];
