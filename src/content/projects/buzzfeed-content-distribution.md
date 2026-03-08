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

**Role:** Product Manager → Senior Product Manager, Distribution Intelligent @BuzzFeed
**Timeline:** 18 months (2018–2020)

---

## Challenge

BuzzFeed's growth model depends on distributing viral content at scale - listicles, quizzes, videos—to drive traffic, watch time, and affiliate revenue. At the time, more than 50% of traffic comes from social platforms, making distribution velocity critical.

Then, social platforms changed their algorithms. Traffic plummeted. The publishing team was downsized. Their scope grew from 3 platforms and 2 content types to 6 platforms and 3 content types. Manual workflows couldn't keep pace. Human curation missed viral windows, leaving traffic and revenue on the table.

Two core problems emerged:

- **Fragmented workflows:** Publishers juggled external platforms, internal systems, and spreadsheets just to plan and publish.
- **No systematic re-promotion:** There was no reliable way to surface relevant, high-performing content to re-promote at the right time.

---

## My Role

I inherited this platform after my manager left after 3 months of joining. As traffic goal becomes more aggressive and platform video ad revenue are at risk due to algorithm change, I evolved the original strategy from a "publishing tool automating low-risk content" to an **smart distribution system** that supercharge publishing team to distribute for all types of content.

I partnered with data science, engineering and design, to ship the integrated workflow and multiple content recommendation model (rule based and ML).

---

## Approach

Automation and ML could handle high-volume, predictable publishing, freeing humans to focus on editorial judgment for breaking news and topical content.

**1. Integrated Workflow & Publishing Hub:** Consolidated sourcing, planning, and publishing into a single tool. Built a recommendation queue with drag-and-drop functionality for organizing and scheduling content in a publishing calendar. Surfaced rich context (performance scores, event triggers) to help publishers curate and evaluate effectively.

<!-- IMAGE PLACEHOLDER
<figure class="case-study-image">
  <img src="/buzzfeed-pubhub.png" alt="Publishing hub — unified workflow" class="w-full" />
  <figcaption>Publishing hub — unified workflow and recommendation queue</figcaption>
</figure>
-->

### Problem

Publishers juggled fragmented tools—external platforms, internal systems, spreadsheets—just to plan and publish. There was no systematic way to surface relevant, high-performing content to re-promote at the right time. The publishing team had been downsized while scope grew from 3 platforms to 6 and from 2 content types to 3.

### Strategic Bet

If we could centralize workflows and add ML-driven recommendations, we could scale distribution without scaling headcount. We focused on three pillars:

1. **Integrated workflow:** One tool for sourcing, planning, and publishing.
2. **Recommendation queue:** Surfaces content with performance scores and event triggers; publishers drag-and-drop into a calendar.
3. **Pipeline architecture:** Migrated from pull-based to push-based to reduce recommendation latency from hours to real time.

<!-- IMAGE PLACEHOLDER
<figure class="case-study-image">
  <img src="/buzzfeed-recs.png" alt="Recommendation queue with performance context" class="w-full" />
  <figcaption>Recommendation queue — content scored by performance, event triggers, and recency</figcaption>
</figure>
-->

### Cross-functional Execution

- Drove adoption and trust with editorial through user controls, demos, and training sessions.
- Partnered with data science to scale recommendation bots from 2 to 24 and build an evergreen model.
- Balanced automation efficiency with editorial creative authority via toggles and runtime configuration.

**2. Advanced Rule to Set Automation:** Introduced rules-based publishing for content that maps cleanly to channels (e.g., food videos → all lifestyle channels). Built user controls so the editorial team maintained creative authority. Set threhold per automated worfklow,

<!-- IMAGE PLACEHOLDER
<figure class="case-study-image">
  <img src="/buzzfeed-rule.png" alt="Automation rules configuration" class="w-full" />
  <figcaption>Automation rules — channel mapping and runtime controls</figcaption>
</figure>
-->

**3. ML-Driven Recommendations:** Scaled recommendation bots from 2 to 24. Built an evergreen model to surface old but relevant content for re-promotion.

<!-- IMAGE PLACEHOLDER
<figure class="case-study-image">
  <img src="/buzzfeed-auto.png" alt="Recommendation queue" class="w-full" />
  <figcaption>ML-driven recommendation queue</figcaption>
</figure>
-->

**4. Shopping Content Distribution for Affiliate Revenue:** Launched link-in-bio automation and a CMS for Instagram and TikTok to maximize affiliate revenue.

<!-- IMAGE PLACEHOLDER
<figure class="case-study-image">
  <img src="/buzzfeed-bio.png" alt="Link-in-bio automation for shopping content" class="w-full" />
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
- **It's okay to do things that don't scale early.** We updated automation rules in JSON or validated model output manually to speed up learning and reduce risk.

---

**Team:** Max Woolf (Data Science), Alex Gervais (Design), Mireille Keuroghlian (APM), Kevin Merritt (Tech Lead), Andrea Handevidt (Engineering Manager), T Zhang (Data Engineering), Brooke Weil, Nathan O'Brien, Dominic Hanzel, Nick Gervais (Engineering)
