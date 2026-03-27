---
title: 'BuzzFeed: Content Distribution'
description: Transform an internal tool into a system that automates publishing and recommends content to drive traffic and revenue growth.
publishDate: 'Jan 01 2020'
isFeatured: true
icon: 'tabler:hexagon-number-3-filled'
seo:
  image:
    src: '../../assets/images/buzzfeed-pubhub.png'
    alt: BuzzFeed smart publishing system — publishing hub and distribution

---

**Product Manager → Senior Product Manager — 2018–2020**

---
### What I Built

I inherited PubHub, an internal content publishing tool, when my manager left to lead another team. What started as executing an existing roadmap became a full strategy reset — driven by a sharp decline in Facebook referral traffic, pressure to expand into video, and emerging platforms like TikTok and Instagram. Our main user is the publishing team that has been downsized. With a full-stack team and 18 months, we transformed a primarly manual publishing tool into a configurable, automated, and intelligent distribution system across four pillars:

**1. Unified workflow** — Consolidated the fragmented mix of spreadsheets, dashboards, and platform tools publishers relied on into a single platform for sourcing, planning, scheduling, and publishing across social platforms. The interface included a recommendation queue, drag-and-drop scheduling, and an automation configuration panel — so users could evaluate and act without context-switching.
<figure class="case-study-image">
  <img src="/buzzfeed-pubhub.png" alt="Publishing hub — unified workflow" class="w-full" />
  <figcaption>Publishing hub</figcaption>
</figure>

**2. Rules-based automation** — Built a configurable automation layer for predictable, high-volume publishing. Editors could define rules (new desert videos push to lifestyle channels), then adjust behavior per platform via toggles and runtime overrides — without engineering support. The system handled 2,600 of 4,000 weekly assets across YouTube, Facebook, Instagram, TikTok, Twitter, and syndication platforms.
<figure class="case-study-image">
  <img src="/buzzfeed-auto.png" alt="Automation workflow" class="w-full" />
  <figcaption>Automation workflow — runtime controls and overrides</figcaption>
</figure>
<figure class="case-study-image">
  <img src="/buzzfeed-rule.png" alt="Rules configuration" class="w-full" />
  <figcaption>Rules configuration — define and manage automation rules per channel</figcaption>
</figure>


**3. ML-powered recommendations** — Productionized two base models: a relevancy model that scores how well a piece of content matches a given channel's audience, and an evergreen model that evaluates whether older content is worth surfacing again based on age, prior promotion history, and engagement performance. Together, they powered 24 specialized bots — each tuned to recommend the highest-leverage asset for a specific channel type and business goal.
<figure class="case-study-image">
  <img src="/buzzfeed-recs.png" alt="Recommendation queue" class="w-full" />
  <figcaption>ML-driven recommendation queue</figcaption>
</figure>


**4. Link-in-bio automation** — Built a fully integrated workflow for Instagram and TikTok shopping content: push video on-platform → transform to static assets → auto-populate metadata and linkbacks → publish to a branded link-in-bio page. Later extended with programmatic ad integration on top-performing pages, unlocking incremental sponsorship revenue.
<figure class="case-study-image">
  <img src="/buzzfeed-bio.png" alt="Link-in-bio automation for shopping content" class="w-full" />
  <figcaption>Link-in-bio automation — shopping content CMS for Instagram and TikTok</figcaption>
</figure>

---

### Impact

**Traffic and revenue:**
- 3.2B monthly content views at peak. $25M in platform video ad revenue
- 500% YoY increase in affiliate revenue on Instagram and TikTok
- 300% YoY increase in pageviews from evergreen re-promotion
- 15% YoY increase in Instagram engagement; 98% YoY boost on TikTok

**Workflow efficiency:**
- 65% of weekly publishing automated — 2,600 of 4,000 assets per week
- 30% reduction in time sourcing content across tools
- Recommendation bot deployment time cut from 7 days to 3
- Link-in-bio automation saved the publishing team 90% of time on manual updates

**Strategic signal:**
- Featured in BuzzFeed's IPO deck as a proof point of its tech-led strategy
- Flexible architecture let BuzzFeed integrate HuffPost's CMS in under two months.

---

### Why I Built It

BuzzFeed's growth model depended on social distribution — roughly 45% of traffic and 60% of video ad revenue came from platforms like Facebook. When Facebook explicitly shifted its algorithm away from publisher content, traffic fell sharply. The publishing team was downsized while the scope expanded from 3 platforms to 6.

Leadership looked to data and technology to close the gap: maximize content reach, reduce manual workflows, and ensure every piece of content was working as hard as possible toward traffic and revenue goals. The core bet was that automation and ML could absorb the high-volume, repetitive work — freeing editors to focus on judgment-heavy calls, developing strategy around viral trends, and experimenting with new formats.

The advantage of an internal tool is proximity. My team was in the room with editorial leadership, hearing pain points firsthand and understanding the business context behind each decision. That tight feedback loop meant we could prioritize what actually mattered to the business, not what a third-party tool assumed it did. It's what kept PubHub ahead of off-the-shelf alternatives and is indispensable to the team.

---

### The Challenges

**Editorial trust was a prerequisite.** Automation only works when people believe it supports their judgment, not replaces it. I ran weekly discovery sessions with publishers, tested with prototypes, and walked through real workflows before building anything. That investment was non-negotiable — without it, adoption would have failed regardless of how good the system was.

**From an inherited roadmap to a co-created strategy.** Three months in, the engineering lead and I had a real tension: he was the system architect from day one with a strong technical vision, while I was fielding competing requests from editorial, video, and shopping leadership. Rather than forcing a call, I brought the whole team into discovery sessions with users and leadership so everyone heard the same pain points firsthand. From there, we ran an on-site [backcasting exercise](https://www.alexisbardini.com/wiki/backcasting) — starting from the ideal end state and working backward to identify what had to be true to get there. It gave us shared context and a logic for prioritization that neither of us owned alone. The approach spread — tech leadership and adjacent teams adopted it for their own high-stakes planning problems.

---

### The Trade-offs

**Early unscalable shortcuts.** To move quickly, automation rules were configured manually in JSON and ML model output was validated via a cron job to a spreadsheet. The MVP drag-and-drop leveraged an existing library with known UX limitations. None of it was sustainable — but it accelerated learning and reduced risk before we committed to building the full infrastructure. Knowing when to do things that don't scale is what let us move fast with the right approach later.

**Automation breadth vs. editorial control.** Fully automating more would have driven higher efficiency gains, but editorial trust was load-bearing. Content curation is both science and art — relevance matters, but so does timeliness. Every automation rule had a kill switch so editors could override instantly in response to breaking news or unexpected events. That added system complexity, but adoption held because editors never felt locked out.

**Impact over completeness.** Shopping content automation was a focused bet, not a full-platform push. We could have chased broader feature parity first. Instead we prioritized the highest-leverage unlock — affiliate revenue on Instagram and TikTok — and it drove 500% YoY growth. Scope discipline mattered more than coverage.

---

**Team:** Max Woolf (Data Science), Alex Gervais (Design), Mireille Keuroghlian (APM), Kevin Merritt (Tech Lead), Andrea Handevidt (Engineering Manager), Ting Zhang (Data Engineering), Brooke Weil, Nathan O'Brien, Dominic Hanzel, Nick Gervais (Engineering)
