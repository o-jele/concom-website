import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { QuoteBand } from "@/components/home/QuoteBand";
import { MissionVision } from "@/components/home/MissionVision";
import { PracticesPreview } from "@/components/home/PracticesPreview";
import { WhyConcom } from "@/components/home/WhyConcom";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { WorkPreview } from "@/components/home/WorkPreview";
import { Outro } from "@/components/home/Outro";
import { office, partner, site } from "@/content/site";

export const metadata: Metadata = {
  title: "ConCom PR & Publicity — We turn what institutions know into what people hear.",
  description: site.intro,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo_concom.png`,
  foundingDate: "2007",
  description: site.intro,
  address: {
    "@type": "PostalAddress",
    streetAddress: "NONM Building, Room 5, Area 13, City Centre",
    addressLocality: "Lilongwe",
    addressCountry: "MW",
    postOfficeBoxNumber: "P.O. Box 500",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      telephone: partner.phone,
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: partner.email,
      telephone: partner.phone,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <QuoteBand />
      <MissionVision />
      <PracticesPreview />
      <WhyConcom />
      <ClientsMarquee />
      <WorkPreview />
      <Outro />
    </>
  );
}
