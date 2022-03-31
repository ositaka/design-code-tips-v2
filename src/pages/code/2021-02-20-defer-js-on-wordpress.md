---
templateKey: code-post
title: >
  Defer JS on WordPress
date: 2021-02-20T19:28:37.629Z
featuredpost: false
description: >
  Defer JavaScript on WordPress and make your website load 10x faster.
tags:
  - Web Development
  - PHP
  - WordPress
  - JavaScript
---

Defer JavaScript on WordPress and make your website load 10x faster.

```php
// Defer JS
function defer_parsing_of_js($url) {
  if (is_admin()) return $url;
  if (false === strpos($url, '.js')) return $url;
  if (strpos($url, 'jquery.js')) return $url;
  return str_replace(' src', ' defer src', $url);
}
add_filter('script_loader_tag', 'defer_parsing_of_js', 10);`
```
