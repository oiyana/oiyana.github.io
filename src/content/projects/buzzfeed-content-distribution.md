---
title: 'Content Distribution at BuzzFeed'
description: Internal smart publishing and distribution system that automated publishing, surfaced high-performing content, and drove significant traffic and revenue growth for BuzzFeed.
publishDate: 'Jan 01 2020'
isFeatured: true
icon: 'tabler:hexagon-number-3-filled'
seo:
  image:
    src: '../../assets/images/buzzfeed-pubhub.png'
    alt: BuzzFeed smart publishing system — publishing hub and distribution

---

**Role:** Product Manager → Senior Product Manager, Distribution Intelligent @BuzzFeed
**Timeline:** 18 months (2018–2020)

---

## Challenge

BuzzFeed's growth model depends on distributing viral content at scale — listicles, quizzes, videos—to drive traffic, watch time, and affiliate revenue. Around 40% of traffic comes from social platforms, making distribution velocity critical.

Then social platforms changed their algorithms. Traffic plummeted. The publishing team was downsized while scope expanded: from 3 platforms to 6, from 2 content types to 3. Manual workflows couldn't keep pace—human curation missed viral windows, leaving traffic and revenue on the table.

Two core problems:
- **Fragmented tools:** Publishers juggled 12 different sporadic platform tools, dashboards, internal tools, and spreadsheets just to plan and publish a single piece of content.
- **No systematic re-promotion:** There was no reliable way to surface high-performing content and re-promote it at the right time.

---

## My Role

I inherited this platform after my manager left, three months into the job. What started as executing an inherited roadmap became a strategy reset: transforming the tool from a publishing utility into an automation and intelligent distribution system.

I aligned engineering, data science, design, and editorial on a unified direction—then shipped it over 18 months.

---

## Strategy

The core bet: automation and ML could handle high-volume, predictable publishing, freeing editors to focus on judgment-heavy work—breaking news, topical moments, creative calls. 

Getting there required rebuilding trust with the editorial team first. Automation only works when people believe it supports their judgment, not replaces it. I ran discovery sessions with publishers, walked through real workflows, and validated the approach before building. The system was designed with user controls—toggles, runtime configuration, override options—so editors stayed in the driver's seat at every step.

With alignment in place, we built on four pillars.

---

### How I Built It

**1. Integrated Publishing Hub**
Replaced the spreadsheets and platform-switching that slowed every decision. Consolidated sourcing, planning, and publishing into one tool, with a recommendation queue and drag-and-drop scheduling into a publishing calendar. Performance scores and event triggers were surfaced inline so publishers could evaluate and act without leaving the tool.

<figure class="case-study-image">
  <img src="/buzzfeed-pubhub.png" alt="Publishing hub — unified workflow" class="w-full" />
  <figcaption>Publishing hub — unified workflow and recommendation queue</figcaption>
</figure>


**2. Automation at Scale**
Introduced rules-based automation for content that maps predictably to channels—food videos to all lifestyle channels, for example. Built user controls so editorial maintained creative authority: toggle rules on or off, configure by platform, adjust at runtime.

65% of weekly publishing automated—2,600 of 4,000 weekly assets handled by 781 automation rules.

<figure class="case-study-image">
  <img src="/buzzfeed-auto.png" alt="Automation workflow" class="w-full" />
  <figcaption>Automation workflow — rules and runtime controls</figcaption>
</figure>

<figure class="case-study-image">
  <img src="/buzzfeed-rule.png" alt="Automation rules configuration" class="w-full" />
  <figcaption>Automation rules — channel mapping and runtime controls</figcaption>
</figure>

**3. Recommendations**
Scaled recommendation bots from 2 to 24. Built an evergreen model to surface older, still-relevant content for re-promotion. Migrated from pull-based to push-based pipeline, cutting recommendation latency from hours to real time—so publishers could act on trending content before the window closed.

<figure class="case-study-image">
  <img src="/buzzfeed-recs.png" alt="Recommendation queue" class="w-full" />
  <figcaption>ML-driven recommendation queue</figcaption>
</figure>

**4. Shopping Content Distribution**
Launched link-in-bio automation and a CMS for Instagram and TikTok to maximize affiliate revenue. Saved 90% of the publishing team's time on manual link updates—and opened a scalable channel for affiliate-driven traffic.

<figure class="case-study-image">
  <img src="/buzzfeed-bio.png" alt="Link-in-bio automation for shopping content" class="w-full" />
  <figcaption>Link-in-bio automation — shopping content CMS for Instagram and TikTok</figcaption>
</figure>
  

---

## Impact

**Traffic and revenue**
- Enabled a small team to handle **4K assets/week across 6 platforms** that resulted in **3.2B monthly content views** at peak and **$25M platform video ad revenue**.
- **500% YoY increase in affiliate revenue on Instagram and TikTok** through shopping content auto-publishing.
- **300% YoY increase in pageviews** repromoting high-performing old, evergreen content**.
- Increased engagement on Instagram and TikTok engagement by **15%** and **98%** through link-in-bio & auto-publishing integration.

**Workflow efficiency**
- Automated **65% of weekly publishing** (2,600 of 4K assets) through 781 automation rules.
- Reduced workflow for sourcing content by **30%** by integrating the recommendation queue with the content calendar.
- Reduced recommendation bot deployment time from **7 to 3 days**, enabling strategy shifts.
- Saved **90% of the publishing team's time** on manual link updates through link-in-bio automation.

**Strategic investment**
- The smart publishing system was featured in BuzzFeed's IPO deck as a proof point of its tech-led strategy.
- The flexible architecture later enabled BuzzFeed to integrate HuffPost's CMS post-acquisition in under two months.

---

## Learning
- **Co-design with users from operator to leadership to build trust** Ensure the tools augments their editorial judgment, not replaces it.
- **Prioritize impact over completeness.** Shopping content automation drove outsized impact compared to chasing feature parity to reach wider.
- **It's okay to do things that don't scale early.** Configure automation rules in JSON or manually validate machine learning model output via a spreadsheet is not sustainbale but speed up learning and reduce risk.

---

**Team:** Max Woolf (Data Science), Alex Gervais (Design), Mireille Keuroghlian (APM), Kevin Merritt (Tech Lead), Andrea Handevidt (Engineering Manager), Ting Zhang (Data Engineering), Brooke Weil, Nathan O'Brien, Dominic Hanzel, Nick Gervais (Engineering)
