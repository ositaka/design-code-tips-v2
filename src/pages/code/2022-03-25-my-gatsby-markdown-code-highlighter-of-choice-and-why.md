---
templateKey: code-post
title: 'My Gatsby Markdown Code Highlighting of Choice and Why'
date: 2022-03-25T19:28:37.629Z
featuredpost: false
featuredimage: /assets/wordpress.png
description: 'Find out on this post which code highlighting I am using on the design-code.tips website and why.'
tags:
  - Gatsby
  - Performance
  - Web Development
---

## Why gatsby-remark-vscode?

[`gatsby-remark-vscode`](https://www.gatsbyjs.com/plugins/gatsby-remark-vscode/) is a syntax highlighting plugin for [Gatsby](https://www.gatsbyjs.com/) that uses VS Code’s extensions, themes, and highlighting engine.

The main reason I have chosen this plugin is because, compared with other code highlighting libraries, this plugin doesn't run on the client side. Which means this code highlighting will work flawlessly without JavaScript, as it just uses HTML `.classes` and CSS to style the code highlighting.

See below more info about it.

> JavaScript syntax highlighting libraries that were designed to run in the browser, like Prism, have to make compromises given the constraints of their intended environment. Since they get downloaded and executed whenever a user visits a page, they have to be ultra-fast and ultra-lightweight. Your Gatsby app, on the other hand, renders to HTML at build-time in Node, so these constraints don’t apply. So why make tradeoffs that don’t buy you anything? There’s no reason why the syntax highlighting on your blog should be any less sophisticated than the syntax highlighting in your code editor. And since VS Code is built with JavaScript and CSS, is open source, and has a rich extension ecosystem, it turns out that it’s pretty easy to use its highlighting engine and extensions and get great results. A few examples of where gatsby-remark-vscode excels:

## What does it look like?

See below how this Gatsby VS Code's plugin looks like.

### HTML Preview

![Gatsby Remark VS Code (HTML preview)](/media/gatsby-remark-vscode__html.png)

### TypeScript Preview

![Gatsby Remark VS Code (TypeScript preview)](/media/gatsby-remark-vscode__ts.png)

### JavaScript Preview

![Gatsby Remark VS Code (JavaScript preview)](/media/gatsby-remark-vscode__js.png)

You can [read more about the gatsby-remark-vscode plugin here](https://www.gatsbyjs.com/plugins/gatsby-remark-vscode/).
