---
templateKey: code-post
title: >
  Custom Scrollbar with CSS (WebKit)
date: 2021-06-19T19:28:37.629Z
featuredpost: false
description: >
  How to customize the Scrollbar with CSS (WebKit)
tags:
  - Web Development
  - CSS
---

```css
::-webkit-scrollbar {
  height: 0.625rem; /* horizontal scrollbar */
  width: 0.625rem; /* vertical scrollbar */
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 100);
}

::-webkit-scrollbar-track {
  background: rgba(241, 241, 241, 100);
}
```
