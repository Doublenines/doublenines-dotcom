---
name: familysearch-guidelines
description: FamilySearch compliance and policy guidelines. Use when working on any FamilySearch-related feature, data handling, API integration, or content that references FamilySearch services or data.
---

# FamilySearch Guidelines

Reference FamilySearch's terms, data policies, and compliance requirements when building features that interact with or reference FamilySearch.

## When to Use

- Building or modifying any FamilySearch API integration
- Handling FamilySearch user data (tree data, photos, memories, documents)
- Displaying or processing genealogical data sourced from FamilySearch
- Writing features that submit content to FamilySearch
- Any work involving living vs deceased person data distinctions
- Implementing data export, caching, or storage of FamilySearch-sourced data

## Guidelines Document

The full reference is at the project root: `FamilySearch-guidelines.md`. Read that file for detailed coverage of all terms.

## Critical Compliance Rules

Follow these rules in all FamilySearch-related work:

### Data Usage
1. **Personal, non-commercial use only** — FamilySearch data must not be used for commercial purposes, resold, or redistributed.
2. **No scraping or bulk copying** — Access data only through the official FamilySearch API. Do not crawl or scrape the website.
3. **Respect API license terms** — Follow caching limits, storage duration restrictions, and redistribution rules defined in the API License Agreement.

### Privacy
4. **Living persons are private** — Never expose living person data publicly. Living person information is visible only to the account holder.
5. **Deceased persons are public** — Shared Family Tree data for deceased persons is visible to all FamilySearch users.
6. **Photos/memories default to visible** — Content attached to deceased persons in the shared tree is accessible to other users.

### Content Submission
7. **Submissions are permanent** — Warn users that content submitted to FamilySearch is shared under a perpetual license and cannot be fully retracted.
8. **User owns the responsibility** — The submitting user must have rights to any content they upload.

### Data Transfer
9. **GDPR compliance for EU data** — Apply EU Standard Contractual Clauses when processing data from EU/EEA users.
10. **Processor obligations** — When acting as a data processor on behalf of FamilySearch, handle data strictly according to their terms.

## Quick Checklist

Before shipping FamilySearch-related features, verify:

- [ ] No FamilySearch data is used commercially or redistributed
- [ ] Living person data is never exposed publicly
- [ ] API usage follows the FamilySearch API License Agreement
- [ ] Content submission flows warn users about permanence
- [ ] EU/GDPR requirements are met for applicable users
- [ ] Official FamilySearch links are used for attribution and reference
