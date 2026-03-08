---
title: 'Content Distribution at BuzzFeed'
description: Internal smart publishing and distribution system that automated publishing, surfaced high-performing content, and drove significant traffic and revenue growth for BuzzFeed.
publishDate: 'Jan 01 2020'
isFeatured: true
icon: 'tabler:hexagon-number-3-filled'
seo:
  image:
    src: '../../assets/images/avatar.jpg'
    alt: BuzzFeed smart publishing system
---

**Role:** Product Manager → Senior Product Manager, Distribution Intelligence
**Timeline:** 18 months (2018–2020)

---

## Challenge

BuzzFeed's growth model depends on distributing viral content at scale—listicles, quizzes, videos—to drive traffic, watch time, and affiliate revenue. Around 40% of traffic comes from social platforms, making distribution velocity critical.

Then social platforms changed their algorithms. Traffic plummeted. The publishing team was downsized while scope expanded: from 3 platforms to 6, from 2 content types to 3. Manual workflows couldn't keep pace—human curation missed viral windows, leaving traffic and revenue on the table.

Two core problems:

- **Fragmented tools:** Publishers juggled external platforms, internal systems, and spreadsheets just to plan and publish a single piece of content.
- **No systematic re-promotion:** There was no reliable way to surface high-performing content and re-promote it at the right time.

---

## My Role

I inherited this platform after my manager left, three months into the job. What started as executing an inherited roadmap became a strategy reset: transforming the tool from a publishing utility into an **automation and intelligent distribution system**.

I aligned engineering, data science, design, and editorial on a unified direction—then shipped it over 18 months.

---

## Strategy

The core bet: automation and ML could handle high-volume, predictable publishing, freeing editors to focus on judgment-heavy work—breaking news, topical moments, creative calls.

Getting there required rebuilding trust with the editorial team first. Automation only works when people believe it supports their judgment, not replaces it. I ran discovery sessions with publishers, walked through real workflows, and validated the approach before building. The system was designed with user controls—toggles, runtime configuration, override options—so editors stayed in the driver's seat at every step.

With alignment in place, we built on four pillars.

---

## How I Built It

### 1. Integrated Publishing Hub

Replaced the spreadsheets and platform-switching that slowed every decision. Consolidated sourcing, planning, and publishing into one tool, with a recommendation queue and drag-and-drop scheduling into a publishing calendar. Performance scores and event triggers were surfaced inline so publishers could evaluate and act without leaving the tool.

<!-- IMAGE PLACEHOLDER
<figure class="case-study-image">
  <img src="/buzzfeed-publishing-hub.png" alt="Unified publishing hub — recommendation queue and drag-and-drop calendar" class="w-full" />
  <figcaption>Unified publishing hub — recommendation queue and drag-and-drop calendar</figcaption>
</figure>
-->

### 2. Automation at Scale

Introduced rules-based automation for content that maps predictably to channels—food videos to all lifestyle channels, for example. Built user controls so editorial maintained creative authority: toggle rules on or off, configure by platform, adjust at runtime.

**65% of weekly publishing automated**—2,600 of 4,000 weekly assets handled by 781 automation rules.

<!-- IMAGE PLACEHOLDER
<figure class="case-study-image">
  <img src="/buzzfeed-automation-rules.png" alt="Automation rules configuration UI" class="w-full" />
  <figcaption>Automation rules — channel mapping and runtime controls</figcaption>
</figure>
-->

### 3. ML-Driven Recommendations

Scaled recommendation bots from 2 to 24. Built an evergreen model to surface older, still-relevant content for re-promotion. Migrated from a pull-based to push-based pipeline, cutting recommendation latency from hours to real time—so publishers could act on trending content before the window closed.

<!-- IMAGE PLACEHOLDER
<figure class="case-study-image">
  <img src="/buzzfeed-recommendation-queue.png" alt="ML recommendation queue with performance context" class="w-full" />
  <figcaption>Recommendation queue — content scored by performance, event triggers, and recency</figcaption>
</figure>
-->

### 4. Shopping Content Distribution

Launched link-in-bio automation and a CMS for Instagram and TikTok to maximize affiliate revenue. Saved **90% of the publishing team's time** on manual link updates—and opened a scalable channel for affiliate-driven traffic.

<!-- IMAGE PLACEHOLDER
<figure class="case-study-image">
  <img src="/buzzfeed-linkinbio.png" alt="Link-in-bio automation for shopping content" class="w-full" />
  <figcaption>Link-in-bio automation — shopping content CMS for Instagram and TikTok</figcaption>
</figure>
-->

---

## Impact

**Boost traffic and revenue**

- Supported **3.2B monthly content views** at peak.
- Enabled a downsized publishing team to handle **4K assets/week across 6 platforms**.
- Automated video publishing and ML-driven distribution on Facebook and YouTube generated **$25M annually in ad revenue**.
- Achieved **500% YoY affiliate revenue growth** via shopping content automation.
- Drove a **300% YoY increase in pageviews from evergreen content**.
- Increased Instagram traffic by **15%** and TikTok traffic by **98%** through link-in-bio automation.

**Increase workflow efficiency**

- Automated **65% of weekly publishing** (2,600 of 4K assets) through 781 automation rules.
- Reduced workflow friction by **30%** by centralizing fragmented tools.
- Cut bot deployment time from **7 to 3 days**, enabling mid-week strategy pivots.
- Saved **90% of the publishing team's time** on manual link updates through link-in-bio automation.

**Strategic investment**

- The smart publishing system was featured in BuzzFeed's IPO deck as a proof point of its tech-led strategy.
- The flexible architecture later enabled BuzzFeed to integrate HuffPost's CMS post-acquisition in under a month.

---

## Learning

- **Prioritize impact over completeness.** Shopping content automation drove outsized impact compared to chasing feature parity.
- **Trust is the real blocker for adoption.** Editorial buy-in was critical—automation only works when users believe it augments their judgment, not replaces it.
- **It's okay to do things that don't scale early.** We updated automation rules in JSON and validated model output manually to speed up learning and reduce risk.

---

**Team:** Max Woolf (Data Science), Alex Gervais (Design), Mireille Keuroghlian (APM), Kevin Merritt (Tech Lead), Andrea Handevidt (Engineering Manager), T Zhang (Data Engineering), Brooke Weil, Nathan O'Brien, Dominic Hanzel, Nick Gervais (Engineering)
