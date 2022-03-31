---
templateKey: code-post
title: >
  How to add an intro to website with JS
date: 2021-08-09T19:28:37.629Z
featuredpost: false
description: >
  How to add an intro to website with JS
tags:
  - Web Development
  - JavaScript
  - Animation
---

I am using a `sessionStorage` item to set a cookie when the browser plays the intro for the first time. Like this, we do not borrow the visitors by playing it multiple times, or just play it when they visit the `home` page.

```js
<!-- intro -->
<div id="intro__placeholder"></div>

<script>
    setTimeout(() => {
        sessionStorage.setItem("intro_shown", "yes");
    }, 10000);

    const home = document.querySelector(".home");
    const intro = document.querySelector(".intro");
    const introKey = sessionStorage.getItem("intro_shown");

    if (introKey === null || home) {
        document.getElementById("intro__placeholder").innerHTML = '<style>Your CSS here</style><div class="intro">Your HTML code here</div>';
    }
</script>
```
