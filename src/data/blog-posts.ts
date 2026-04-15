import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "why-nextjs-for-your-next-project",
    title: "Why Next.js Is the Best Choice for Your Next Web Project",
    excerpt:
      "Explore why Next.js has become the go-to framework for modern web development, from server-side rendering to API routes.",
    content: `Next.js has quickly become one of the most popular frameworks for building modern web applications. But what makes it stand out from the crowd?

## Performance Out of the Box

Next.js provides automatic code splitting, image optimization, and server-side rendering — all without extra configuration. This means your site loads fast from day one.

## The App Router

The App Router, introduced in Next.js 13, brings a new paradigm to React development. With server components, layouts, and streaming, you can build complex applications with simpler mental models.

## Full-Stack Capabilities

With API routes and server actions, Next.js lets you build your entire application — frontend and backend — in a single project. No need for a separate API server.

## Developer Experience

Hot module replacement, TypeScript support, and excellent error messages make development a joy. The ecosystem of plugins and integrations is also top-notch.

## When to Choose Next.js

Next.js is ideal for marketing sites, e-commerce stores, SaaS applications, and any project where SEO and performance matter. If you're starting a new React project, Next.js should be your default choice.`,
    date: "2026-04-10",
    readTime: "5 min read",
    category: "Frameworks",
    author: "SodiMedia",
  },
  {
    slug: "tailwind-css-tips-and-tricks",
    title: "10 Tailwind CSS Tips That Will Speed Up Your Workflow",
    excerpt:
      "Practical Tailwind CSS techniques to write cleaner, faster utility-first styles and avoid common pitfalls.",
    content: `Tailwind CSS has transformed how developers approach styling. Here are ten tips to level up your Tailwind workflow.

## 1. Use @apply Sparingly

While @apply can be useful for extracting repeated patterns, overusing it defeats the purpose of utility-first CSS. Prefer component abstraction in your framework instead.

## 2. Leverage the Theme Configuration

Extend your tailwind config with custom colors, spacing, and fonts. This keeps your design system consistent and makes changes easy.

## 3. Use Arbitrary Values When Needed

Sometimes you need a one-off value. Tailwind's bracket notation like \`w-[137px]\` lets you use any CSS value without leaving the utility paradigm.

## 4. Group Hover and Focus States

Use \`group\` and \`group-hover:\` to style child elements based on parent state — perfect for cards and interactive components.

## 5. Master the Space Utilities

\`space-x-*\` and \`space-y-*\` add consistent spacing between children without extra wrappers or margin utilities.

## 6. Use Container Queries

Tailwind v4 supports container queries out of the box. Use \`@container\` for truly responsive components.

## 7. Dark Mode Made Easy

With \`dark:\` variants, supporting dark mode is as simple as adding a few extra classes.

## 8. Animate with Transition Utilities

\`transition-colors\`, \`transition-all\`, and \`duration-*\` utilities give you smooth animations without writing CSS.

## 9. Use Ring for Focus Styles

\`ring-*\` utilities provide beautiful, accessible focus indicators that work across browsers.

## 10. Keep Your HTML Readable

Use multi-line class strings, logical ordering (layout → spacing → typography → colors), and extract components to keep things maintainable.`,
    date: "2026-04-05",
    readTime: "7 min read",
    category: "CSS",
    author: "SodiMedia",
  },
  {
    slug: "building-accessible-websites",
    title: "A Developer's Guide to Building Accessible Websites",
    excerpt:
      "Learn the fundamentals of web accessibility and how to implement WCAG guidelines in your projects.",
    content: `Web accessibility isn't just a nice-to-have — it's essential. Here's how to build websites that work for everyone.

## Why Accessibility Matters

Over 1 billion people worldwide live with some form of disability. Building accessible websites ensures your content reaches the widest possible audience and is often required by law.

## Semantic HTML is Your Foundation

Using the right HTML elements — \`nav\`, \`main\`, \`article\`, \`button\` — gives screen readers the context they need. A \`div\` with an onClick is not a button.

## Color and Contrast

Ensure text has a contrast ratio of at least 4.5:1 against its background. Tools like the WebAIM Contrast Checker make this easy to verify.

## Keyboard Navigation

Every interactive element must be reachable and operable via keyboard. Test your site by navigating with Tab, Enter, and Escape.

## ARIA Labels

When HTML semantics aren't enough, ARIA attributes fill the gap. Use \`aria-label\`, \`aria-describedby\`, and \`role\` to provide context.

## Testing Your Work

Use tools like Lighthouse, axe DevTools, and screen readers (VoiceOver, NVDA) to audit your site. Automated tools catch about 30% of issues — manual testing is essential.

## Making It a Habit

Accessibility should be part of your development process, not an afterthought. Add it to your code review checklist and test early and often.`,
    date: "2026-03-28",
    readTime: "6 min read",
    category: "Accessibility",
    author: "SodiMedia",
  },
];
