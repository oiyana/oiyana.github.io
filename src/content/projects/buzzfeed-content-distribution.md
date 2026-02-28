---
title: 'BuzzFeed: Content Distribution at Scale'
description: Internal smart publishing and distribution system that automated publishing, surfaced high-performing content, and drove significant traffic and revenue growth for BuzzFeed.
publishDate: 'Jan 01 2020'
isFeatured: true
icon: 'tabler:hexagon-number-3-filled'
seo:
  image:
    src: '../../assets/images/project-2.jpg'
    alt: BuzzFeed smart publishing system
---

**Product:** BuzzFeed Internal Smart Publishing System  
**Role:** Product Manager → Senior Product Manager, Publishing & Distribution  
**Timeline:** 18 months (2018–2020)

---

## CHALLENGE

BuzzFeed's growth model depends on distributing viral content at scale—listicles, quizzes, videos—to drive traffic, watch time, and affiliate revenue. Around 40% of traffic comes from social platforms, making distribution velocity critical.

Then, social platforms changed their algorithms. Traffic plummeted. The publishing team was downsized. Their scope grew from 3 platforms and 2 content types to 6 platforms and 3 content types. Manual workflows couldn't keep pace. Human curation missed viral windows, leaving traffic and revenue on the table.

I inherited this platform after my manager left. Two core problems emerged:

- **Fragmented workflows:** Publishers juggled external platforms, internal systems, and spreadsheets just to plan and publish.  
- **No systematic re-promotion:** There was no reliable way to surface relevant, high-performing content to re-promote at the right time.

---

## APPROACH

We rebranded the tool from a "publishing tool" to a **distribution intelligence system**. The core insight: automation and ML could handle high-volume, predictable publishing, freeing humans to focus on editorial judgment for breaking news and topical content.

### 1. Build an integrated workflow

- Consolidated sourcing, planning, and publishing into a single tool.  
- Built a recommendation queue with drag-and-drop functionality for organizing and scheduling content in a publishing calendar.  
- Surfaced rich context (performance scores, event triggers) to help publishers curate and evaluate effectively.

### 2. Make three strategic bets

**Automation at scale**  
- Introduced rules-based publishing for content that maps cleanly to channels (e.g., food videos → all lifestyle channels).  
- Built user controls so the editorial team maintained creative authority.

**ML-driven recommendations**  
- Scaled recommendation bots from 2 to 24.  
- Built an evergreen model to surface old but relevant content for re-promotion.

**Shopping content distribution**  
- Launched link-in-bio automation and a CMS for Instagram and TikTok to maximize affiliate revenue.

### 3. Cross-functional execution

- Drove adoption and trust with editorial through user controls, demos, and training sessions.  
- Migrated pipeline architecture from pull-based to push-based, reducing recommendation latency from hours to real time.  
- Balanced automation efficiency with editorial judgment via toggles and runtime configuration.

---

## IMPACT

### Boost traffic and revenue

- Supported **3.2B monthly content views** at peak.  
- Enabled a downsized publishing team to handle **4K assets/week across 6 platforms**.  
- Automated video publishing and ML-driven distribution on Facebook and YouTube generated **$25M annually in ad revenue**.  
- Achieved **500% YoY affiliate revenue growth** via shopping content automation.  
- Drove a **300% YoY increase in pageviews from evergreen content**.  
- Increased Instagram traffic by **15%** and TikTok traffic by **98%** through link-in-bio automation.

### Increase workflow efficiency

- Automated **65% of weekly publishing** (2,600 of 4K assets) through 781 automation rules.  
- Reduced workflow friction by **30%** by centralizing fragmented tools.  
- Cut bot deployment time from **7 to 3 days**, enabling mid-week strategy pivots.  
- Saved **90% of the publishing team's time** on manual link updates through link-in-bio automation.

### Strategic investment

- The smart publishing system was featured in BuzzFeed’s IPO deck as a proof point of its tech-led strategy.  
- The flexible architecture later enabled BuzzFeed to integrate HuffPost's CMS post-acquisition in under a month.

---

## LEARNING

- **Prioritize impact over completeness.** Shopping content automation drove outsized impact compared to chasing feature parity.  
- **Trust is the real blocker for adoption.** Editorial buy-in was critical—automation only works when users believe it augments their judgment, not replaces it.  
- **It’s okay to do things that don’t scale early.** We updated automation rules in JSON or validated model output manually to speed up learning and reduce risk.

---

## Team

Max Woolf (Data Science), Alex Gervais (Design), Mireille Keuroghlian (APM), Kevin Merritt (Tech Lead), Andrea Handevidt (Engineering Manager),  
T Zhang (Data Engineering), Brooke Weil, Nathan O’Brien, Dominic Hanzel, Nick Gervais (Engineering).

