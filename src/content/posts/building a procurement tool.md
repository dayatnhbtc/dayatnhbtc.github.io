---
title: Building a Procurement Tool
date: 2025-07-01
description: Notes on scoping, pricing logic, and keeping the workflow fast.
---

Starting from a spreadsheet helps validate the core calculations fast. I focused on:

- Clear inputs: base price, fees, taxes, shipping, margin
- Derived outputs: total cost, selling price, breakeven
- One source of truth: persist rows for reuse later

Once stable, the model can move into a small app — same math, better UX.

