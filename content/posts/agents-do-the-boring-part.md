---
title: Let the agent do the boring part
description: How I use coding agents as a solo developer, and where I don't.
date: 2026-10-23
---

When you build alone with limited time, every hour matters. Coding agents changed how I spend those hours.

But not in the way the hype says.

## What I hand off

The boring, well-defined work:

- Wiring up a form to an API I already designed
- Writing the fifth CRUD endpoint that looks like the other four
- Migrating config files, renaming things across a codebase
- Reading an error log and finding the line that matters

If I can describe the result in one or two sentences and check it in a minute, an agent should probably do it.

## What I keep

The decisions. What to build. What to cut. How it should feel to use. Whether a feature is worth the complexity it adds.

An agent can write the code for a settings page. It can't tell me the product doesn't need one yet.

## Review everything

I read every diff before it merges. Not because agents are bad, but because "it compiles" and "it's right" are different things. The time I save writing code, I spend some of back on reviewing it. It's still a big win.

## Building on top of agents

This is also why [Castfy](https://castfy.app) works the way it does. It doesn't try to be its own AI. It hands the recording job to the coding agent you already use, and focuses on what agents are bad at: editing, timing, making the result look good.

Agents are the best tool I've added in years. They're still a tool. The taste is still my job.
