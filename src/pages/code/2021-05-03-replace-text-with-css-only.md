---
templateKey: code-post
title: >
  Replace text with CSS only
date: 2021-05-03T19:28:37.629Z
featuredpost: false
description: >
  Replace text with CSS only. Please note this solution is not ideal if you are making an extremely accessible website. Is merely visual.
tags:
  - Web Development
  - CSS
---

In this snippet, you can see an example I have made to replace the default text of a "Download PDF" button.

This might be a good solution if you do not have any other way of replacing text on your website. Here, I am replacing the English text with the Portuguese correspondent text.

```css
a.download-lnk-pdf {
  visibility: hidden;
}

a.download-lnk-pdf:before {
  content: 'Clique aqui para baixar o seu PDF';
  visibility: visible;
}
```

Please note that you can also archive this text replacement with JavaScript, but it requires a lot more effort.
