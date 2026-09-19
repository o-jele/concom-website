# ConCom PR & Publicity — Website Rebuild Brief

**Client:** ConCom PR & Publicity — corporate communications agency, Lilongwe, Malawi (operating since 2007)
**Goal:** Replace the current site with a fast, credible, content-rich site that positions ConCom for donor, government, NGO and private-sector procurement — not a generic agency template.
**One-line brief:** *"We turn what institutions know into what people hear."*

---

## 1. Brand system (carry over exactly — already established in the company profile PDF)

### Colours

```css
--green:        #0C5C34;   /* primary, backgrounds, CTAs */
--green-bright:  #1A954E;  /* accents, links, icon strokes */
--ochre:        #D9922B;   /* small accent rules only, used sparingly */
--ink:          #16201B;   /* body text */
--ink-soft:     #4B564F;   /* secondary text */
--grey:         #939598;   /* logo grey, muted labels */
--paper:        #FCFBF8;   /* page background */
--paper-2:      #F1EEE6;   /* alternating section background */
```

Support dark mode via CSS custom properties (`prefers-color-scheme`), same as the print artifact.

### Type

- Display/headlines: **Newsreader** (serif, weight 300, italic for emphasis words — e.g. "what people *hear*")
- Body/UI: **IBM Plex Sans**
- Both via Google Fonts.

### Visual motif

- The logo's concentric-ring mark is reused as a recurring low-opacity background graphic (three concentric circles, stroke only) behind hero sections and full-bleed colour bands — do not overuse, one instance per major section max.
- Numbered section badges: small filled circles (green background, white serif numeral) — "01", "02" etc. — used as a wayfinding device across the site, mirroring the print profile's chapter numbering.
- Icons: simple 24×24 line icons, 1.6px stroke, rounded caps, no fills except small dot accents — not a generic icon-pack look.
- Case studies use a small uppercase pill tag for sector: *Donor · Government · Diplomatic · Civil society · Private sector*.

**Assets provided:** logo (transparent PNG), and the company profile PDF/HTML (attach both — the coder should treat the profile as the canonical copy source, not rewrite it).

---

## 2. Sitemap

1. **Home** — hero, one-line positioning, fact strip (est. 2007 / Lilongwe / 4 sectors / registered), mission/vision, five-practice summary grid, "Why ConCom" four-up, logo strip of past clients, CTA to case studies + contact.
2. **About** — the "Who we are" copy below, mission/vision, the four differentiators.
3. **Services** — the five practices in full, each with its sub-services (copy below).
4. **Our Work** — case studies as filterable cards (filter by sector tag), plus the "also worked with" roster.
5. **Contact** — office address, Wisdom Chimgwede's details, contact form, embedded map, compliance/registration numbers in the footer.
6. **Insights** *(optional, phase 2)* — simple blog/CMS for thought-leadership posts; not required for launch.

Global footer on every page: registration numbers (Registrar of Companies 154610, MRA TPIN 31255294, ODPP 31255294), social links, "Download company profile (PDF)" link.

---

## 3. Page copy (use verbatim — do not paraphrase or invent new claims)

### Hero / positioning

> We turn what institutions know into what people hear.
>
> ConCom PR & Publicity is a locally owned and run corporate communications agency based in Lilongwe, Malawi. Since 2007 we have planned, managed and delivered communication, publicity and public engagement for development partners, government, civil society and business.

### Promise line (pull quote, full-width colour band)

> Most communication advice fails for one reason: nobody stayed long enough to learn the difference between what a client wants and what a client needs. That gap is where our work starts.

**Mission:** Offering communication solutions that speak to our clients' communication puzzles.

**Vision:** Becoming a leader in communication, public relations and advocacy services, in Malawi and beyond.

### Five practices

Use as service page sections, each with a headline sentence plus its sub-services:

1. **Research and insight** — Communication research, Transformation communication, Dissemination.
2. **Strategy and advisory** — Communication strategies, Advocacy strategies, Crisis communication and management.
3. **Media relations** — Media engagement, Media buying and monitoring (note the Nzika/ReelAnalytics monitoring partnership — this is the strongest differentiator, feature it prominently), Tailored media training.
4. **Public relations and campaigns** — Public relations, Awareness campaigns, Lobbying and CSR.
5. **Creative production and events** — IEC production, Corporate events management, Public speaking and conferences.

*(Full sub-bullet copy for each is in the attached company profile — reuse those exact sentences.)*

### Why ConCom (four differentiators)

1. **We can prove what the media did** — media monitoring infrastructure via Nzika + ReelAnalytics (Kenya).
2. **The network took twenty years** — media relationships built over 20+ years.
3. **Research before messaging** — strategies grounded in the agency's own field/desk research.
4. **Fluent in four sectors** — diplomatic, government, NGO, private, all at once.

### Case studies

Reuse the brief/what-we-did structure from the profile for these 8 full write-ups:

- Buy Malawi Strategy (UNDP)
- EU Delegation to Malawi
- ActionAid Malawi
- Royal Norwegian Embassy 50:50 Campaign
- IFES/MEC National Voter Mobilisation
- Global Book Alliance (USAID)
- SunSeed Oil CSR
- HESLGB

Plus a 6-entry "also worked with" roster: NICE, GIZ, Ministry of Transport, TEVETA, CISANET, CEDEP.

### Contact

- NONM Building, Room 5, Area 13, opposite the City Centre Mosque, City Centre, Lilongwe
- P.O. Box 500, Lilongwe, Malawi
- Wisdom Chimgwede, Managing Partner — +265 999 500 700, wisdom@concom.mw
- General: info@concom.mw · www.concom.mw

---

## 4. Functional requirements

- **Contact form:** Name, Organisation, Email, Phone, Service of interest (dropdown of the 5 practices), Message. Deliver to info@concom.mw, cc wisdom@concom.mw. Spam protection (honeypot or hCaptcha, no reCAPTCHA-v2 checkbox friction).
- **Case study filtering** by sector tag on the Our Work page.
- **Download link** to the company profile PDF from the home page and footer.
- **SEO:** unique title/meta description per page, Open Graph image (design a card using the logo + green background + tagline), sitemap.xml, robots.txt.
- **Performance:** static-generate what you can; target Lighthouse 90+ across the board; hero and case-study images should be optimised/responsive (`srcset` or Next `<Image>`).
- **Accessibility:** WCAG AA contrast (the palette above is already AA-safe on paper/paper-2 backgrounds — check green-on-white body text specifically), keyboard-navigable nav and form, `alt` text on all images.
- **Imagery:** use real photography — office, team, past campaign materials (billboards, launch events, media training sessions) — not stock photos. Several usable images already exist in the old PDF assets; source current ones from the agency where possible.

---

## 5. Recommended stack

- **Next.js (App Router) + Tailwind CSS**, content in MDX or a lightweight headless CMS (Sanity or a simple JSON/MDX content layer) so non-technical staff can eventually add new case studies without a developer.
- Deploy to Vercel, or self-host via HestiaCP if that's preferred for consistency with other infrastructure already in use.
- If a full framework is overkill for a mostly-static brochure site, a static-HTML/Tailwind build with a simple form-handling service (e.g. Formspree or a small serverless function) is an acceptable lighter alternative — flag this as an option to the coder rather than mandating Next.js.

---

## 6. Non-negotiables

- Preserve existing email routing (info@concom.mw, wisdom@concom.mw) through any DNS/hosting migration — confirm MX records before cutover.
- Do not invent client results, testimonials, or figures not present in the source copy above.
- Match the visual system in section 1 — this is now the agency's cross-collateral identity (print profile + web), so it should not diverge into a different colour or type system.
