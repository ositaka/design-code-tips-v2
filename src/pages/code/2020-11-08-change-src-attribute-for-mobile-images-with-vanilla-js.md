<!-- ---
templateKey: code-post
title: Change SRC attribute for mobile images with Vanilla JS
date: 2020-11-08 20:23
featuredpost: false
featuredImage: /assets/js.png
description: This snippet is a great solution to change the SRC of an <img> html element with vanilla js.
tags:
  - Web Development
  - JavaScript
---

The snippet bellow is a great solution to change the SRC of an <img> html element with vanilla js.

```html
<div class="image">
  <img
    src="https://suninabox.eu/wp-content/uploads/2020/11/terracota-hotspots.jpg"
    class="main-img"
    alt="Photo of a Portuguese Potery products to buy"
  />
  <script>
    if (window.innerWidth < 767) {
      document
        .querySelector('.main-img')
        .setAttribute(
          'src',
          'https://suninabox.eu/wp-content/uploads/2020/11/terracotta-hotspots-mobile.jpg'
        );
    }
  </script>
</div>
``` -->
