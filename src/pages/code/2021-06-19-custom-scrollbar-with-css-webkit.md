---
templateKey: code-post
title: Custom Scrollbar with CSS (WebKit)
date: 2021-06-19 14:29
featuredpost: false
featuredImage: /assets/css.png
description: How to customise the Scrollbar with CSS (WebKit)
tags:
  - Web Development
  - CSS
---

```css
::-webkit-scrollbar {
  width: 0.625rem;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 100);
}

::-webkit-scrollbar-track {
  background: rgba(241, 241, 241, 100);
}
```
