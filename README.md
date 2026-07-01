# Rhythm & Motion — Dance Studio Website

This is the website for the dance studio. This guide explains — in plain
language, assuming **no technical background** — how to run it on your own
computer, how to change the words and pictures, and how to put it on the
internet.

Take your time. You can't break anything permanently: everything can be undone.

---

## 1. What is this, in simple terms?

This website is built from a set of text files stored in a folder on your
computer. When you want to publish it, a program reads those text files and
turns them into a finished website that browsers can show.

You don't need to understand the technology to edit the site. Most changes are
just editing text, the same way you'd edit a document.

Here are the pieces, explained with everyday comparisons:

| Name | What it does (plain English) |
|------|------------------------------|
| **Eleventy** | The "oven." It takes the raw ingredients (your text files) and bakes them into a real website. |
| **Tailwind** | The "styling kit." It controls colors, spacing, and fonts — how things *look*. |
| **HTMX** | Lets a button fetch and show new content without reloading the whole page. |
| **Stimulus** | A small helper for little interactive bits, like the menu button on phones. |
| **Netlify** | The "landlord." It hosts the finished website on the internet and handles the contact form. |

You will rarely need to think about most of these. For everyday content edits,
you only touch text files.

---

## 2. One-time setup (you only do this once)

Before you can run the site on your computer, you need one free program called
**Node.js**. Think of it as the engine that powers the "oven."

### Step 2a — Install Node.js

1. Go to **https://nodejs.org**
2. Download the version labelled **"LTS"** (it means "the stable one").
3. Open the downloaded file and click through the installer (just keep clicking
   "Continue" / "Next" and accept the defaults).

### Step 2b — Open the Terminal

The **Terminal** is a program where you type commands instead of clicking
buttons. It sounds scary but you'll only use a couple of commands.

- **On a Mac:** press `Cmd + Space`, type `Terminal`, press Enter.
- **On Windows:** press the Start button, type `Terminal`, press Enter.

### Step 2c — Go to the project folder

In the Terminal, you need to "move into" the website's folder. Type `cd `
(the letters c and d, then a space), then drag the project folder from your
file explorer onto the Terminal window and press Enter. It will look something
like:

```
cd /Users/yourname/Sites/radimhalikiz.cz
```

### Step 2d — Install the building blocks

Now type this command exactly and press Enter:

```
npm install
```

This downloads the tools the website needs (the "oven," the "styling kit,"
etc.). It may take a minute or two and print a lot of text — that's normal.
You only need to do this once.

---

## 3. Seeing the website on your own computer

Whenever you want to preview the site, type:

```
npm run dev
```

After a moment you'll see a line that mentions an address like:

```
Server at http://localhost:8080/
```

Open your web browser and go to **http://localhost:8080/**. There's your site!

**The magic part:** while this is running, if you edit a text file and save it,
the browser updates automatically so you can see your change instantly.

When you're finished, click on the Terminal and press **`Ctrl + C`** to stop it.

> ⚠️ Note: The contact form does **not** actually send messages while previewing
> on your computer. It only works once the site is live on Netlify (see
> Section 6). Everything else works locally.

---

## 4. Editing the content

All the editable content lives inside the **`src`** folder. You can open these
files in any plain text editor — a free one called
[Visual Studio Code](https://code.visualstudio.com/) is popular and friendly.

### The home page

**File:** `src/index.html`

This is the front page — the big welcome message ("hero"), the class schedule
button, and the contact form. To change the headline or wording, find the text
between the tags and type over it. For example, to change the main headline,
look for:

```html
<h1>Find your rhythm.</h1>
```

...and change the words. Ignore the surrounding `class="..."` bits — those just
control the styling.

### Writing an article / blog post

**Folder:** `src/articles/`

Each article is one file ending in `.md` (this is called "Markdown" — a simple
way to write formatted text). There's an example: `salsa-basics.md`.

To write a **new** article, make a copy of `salsa-basics.md`, rename it (e.g.
`ballet-tips.md`), and edit the top section:

```
---
title: "Your Article Title Here"
date: 2026-07-01
author: Your Name
---
```

Then write the article below that section. A few formatting basics:

- `## A heading` makes a heading (the more `#`, the smaller the heading)
- `**bold text**` makes text bold
- `- item` makes a bulleted list
- `[click here](https://example.com)` makes a link

The new article will automatically appear at an address based on its file name,
e.g. `ballet-tips.md` becomes `.../articles/ballet-tips/`.

### The menu, header, and footer

**File:** `src/_includes/base.html`

This is the "frame" that wraps around every page — the top navigation bar and
the footer at the bottom. If you want to add a menu link or change the footer
text, this is the place.

---

## 5. Changing the colors and fonts

**File:** `tailwind.theme.js`

This one file controls the site's look. The main color (used on buttons and
links) is called **brand**. To change it, find the `brand` section and change
the color codes (those `#e11d48` values — they're standard web color codes; you
can pick new ones at https://colorhex.com).

You can also change the fonts in the `fontFamily` section.

After editing, if the preview (`npm run dev`) is running, the site updates
automatically.

---

## 6. Publishing the website to the internet

The site is designed to go live on **Netlify**, which is free for small sites.

### First-time publishing

1. Create a free account at **https://www.netlify.com**.
2. The easiest route is to connect your project's code storage (e.g. GitHub) to
   Netlify — Netlify has a step-by-step wizard for this. If you're unsure, ask
   a technical friend to do this initial connection; it's a one-time job.
3. Netlify already knows how to build this site because of the included
   `netlify.toml` file — you don't need to configure anything.

Once connected, Netlify gives you a web address. Every time the code is updated,
Netlify automatically rebuilds and republishes the site.

### The contact form

Good news: the contact form works automatically once the site is on Netlify —
no setup needed. When a visitor sends a message, it appears in your Netlify
dashboard under **Forms**. You can also set up email notifications there so you
get an email each time someone gets in touch.

---

## 6b. Helping Google find you (SEO)

The site is already set up to rank well on search engines — you just need to
fill in a few real details. Open **`src/_data/site.js`** and update:

- **`url`** — your real website address (once you know it from Netlify).
- **`telephone`**, **`email`**, and **`address`** — your studio's contact info.
- **`sameAs`** — the web addresses of your Instagram / Facebook / YouTube pages.

Then add two images to the **`src/assets/`** folder:

- **`og-image.jpg`** — the picture shown when someone shares your site on social
  media (make it 1200×630 pixels).
- **`logo.png`** — your studio logo.

Every page automatically gets a proper title, description, social-media preview,
and "structured data" (special hidden info that helps Google show your studio
nicely in search results). A `sitemap.xml` and `robots.txt` are also created
automatically so search engines can find every page. You don't need to do
anything else for these.

**Tip:** each article's `title` and `description` (the lines at the top of the
`.md` file) are what show up in Google — so write them clearly and invitingly.

---

## 7. Cheat sheet (the only commands you need)

Type these in the Terminal, from inside the project folder:

| I want to... | Type this |
|--------------|-----------|
| Set things up (once, first time) | `npm install` |
| Preview the site on my computer | `npm run dev` |
| Stop the preview | Press `Ctrl + C` |
| Build the finished site (Netlify does this for you) | `npm run build` |

---

## 8. Where everything lives (folder map)

```
radimhalikiz.cz/
│
├── src/                        ← Everything you edit lives here
│   ├── index.html              ← The home page
│   ├── articles/               ← Blog posts / articles
│   │   └── salsa-basics.md     ← Example article (copy this to make new ones)
│   ├── _includes/              ← The reusable page "frame"
│   │   ├── base.html           ← Navbar, footer — wraps every page
│   │   └── article.html        ← The layout used for articles
│   ├── css/                    ← Styling source (rarely touched)
│   ├── js/                     ← Small interactive scripts (rarely touched)
│   └── partials/               ← Small snippets loaded by buttons
│
├── tailwind.theme.js           ← Colors & fonts — edit to restyle the site
├── tailwind.config.js          ← Styling settings (rarely touched)
├── .eleventy.js                ← Build settings (don't touch unless you know)
├── netlify.toml                ← Tells Netlify how to publish (don't touch)
├── package.json                ← List of tools & commands (don't touch)
│
└── dist/                       ← The finished website (auto-created; ignore it)
```

The two folders you'll actually use: **`src`** (your content) and
**`tailwind.theme.js`** (your colors). Everything else is machinery that just
works.

---

## 9. Something went wrong?

- **A command "isn't found":** make sure you installed Node.js (Section 2a) and
  that you're inside the project folder (Section 2c).
- **The preview won't start:** try running `npm install` again, then
  `npm run dev`.
- **A page looks broken after editing:** you may have accidentally deleted a
  symbol like `<`, `>`, or `"`. Undo your change (`Ctrl + Z` / `Cmd + Z`) and
  try again more carefully.
- **Still stuck:** note down exactly what you typed and what the Terminal said,
  and send it to whoever set up the site. That message is the most useful thing
  you can provide.

You've got this. 💃
