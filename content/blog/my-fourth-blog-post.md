---
title: This blog is the fourth
author: "Cristian Casallas"
dates:
  published: "2022-09-01"
description: "Just like you, I didn't really fit anywhere when I was a kid. I still don’t, so I've built my own place. Modern psychology has evolved to understand a..."
img: "https://images.unsplash.com/photo-1664938112749-4a1e1e11abf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
avatar: "../public/avatar-crica.jpg"
duration: 15
id: 3
tags: ["About me", "Coding"]
---

# This blog is the fourth

Just like you, I didn't really fit anywhere when I was a kid. I still don’t, so I've built my own place. Modern psychology has evolved to understand a...

![An old rock in the desert](https://images.unsplash.com/photo-1664938112749-4a1e1e11abf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 "Shiprock, New Mexico by Beau Rogers")

### My first blog post

Welcome to my first blog post using [content v2 module](https://content.nuxtjs.org/)
Hey there! 👋🏾
This is my first blog post learning nuxt content.
I'm currently building it using the following:

- Nuxt.js
- Nuxt Content module
- TailwindCSS
  - TailwindCSS typography

## Nuxt.js

\[Nuxt\](https://nuxtjs.org/) is a powerful Vue framework that offers excellent development features such as server-side rendering.

```bash
npx nuxi init nuxt-app
cd nuxt-app
yarn install
yarn dev -o
```

```javascript
// ./nuxt.config.ts
import { defineNuxtConfig } from "nuxt";
export default defineNuxtConfig({
  // My Nuxt config
});
```

## Nuxt content module

Empower your NuxtJS application with \[@nuxt/content module\](https://content.nuxtjs.org/): write in a content/ directory and fetch your Markdown, JSON, YAML, XML, and CSV files through a MongoDB-like API, acting as a Git-based Headless CMS.
You can get started with Nuxt Content by installing a new project.

```bash
npx nuxi init content-app -t content
```

## TailwindCSS

Rapidly build modern websites without ever leaving your HTML. \[TailwindCSS\](https://tailwindcss.com/) is A utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center`, and `rotate-90` that can be composed to build any design directly in your markup.

### TailwindCSS Typography

\[Typography\](https://tailwindcss.com/docs/typography-plugin) is a plugin that provides a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don't control (like HTML rendered from Markdown or pulled from a CMS).
