---
title: Why Castfy runs on your machine
description: Cloud recording tools can't reach localhost. That's the whole reason Castfy is local.
date: 2026-10-23
---

[Castfy](https://castfy.app) turns a URL and a sentence into a product demo video. The interesting part isn't the AI. It's where it runs: on your own machine.

## The cloud can't see your localhost

A hosted browser can't open `localhost:3000` on your laptop. It can't get into your staging environment behind a VPN. It can't log into the app you haven't shipped yet.

But that's exactly where demos come from. You record the feature before launch, not after. So the browser has to be where the feature is.

## Nothing leaves your machine

The browser, the recording, the render and the export all run locally. Nothing gets uploaded.

For an unreleased product, that matters. Your demo shows screens nobody outside the team should see yet. I didn't want to build a tool that asks you to trust me with that.

## The demo is a prompt, not footage

This is the part I like most. Because the demo is described, not recorded by hand, you can run it again.

Ship a redesign? Run the same job. The button moved? Run it again. No re-recording yourself because you said "um" at 0:14.

## Use the agent you already have

Castfy doesn't ship its own AI. It hands the job to Claude Code, Codex or Cursor, the coding agent you already pay for. That keeps Castfy small, and it means a demo can cost nothing beyond the plan you're on.

Local first isn't a slogan here. It's the only way the product works.
