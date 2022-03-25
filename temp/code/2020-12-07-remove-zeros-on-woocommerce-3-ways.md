---
templateKey: code-post
title: >
  Remove zeros on WooCommerce (3 ways)
date: 2020-12-07T19:28:37.629Z
featuredpost: false
featuredimage: /assets/woocommerce-logo.png
description: >
  Remove zeros on WooCommerce (3 ways)
tags:
  - Web Development
  - WooCommerce
  - PHP
  - JavaScript
---

## First way — Remove the Zeros globally (front-end/backend)

This first approach is the "official" WooCommerce approach from the docs. However, in a situation where you want to have the "zeros" on the backend, for generated Invoice PDFs, for instance, the second option will be more appropriate.

```php
/**
 * Trim zeros in price decimals
 **/
add_filter( 'woocommerce_price_trim_zeros', '__return_true' );
```

## Second way — Removing ".00" with JavaScript (front-end only)

```php
add_action( 'wp_footer', 'remove_zeros' );
function remove_zeros() {
?>

  <script>
    jQuery(document).ready(function($){
      $('.amount').text(function(index, text) {
        return text.replace(/.00/g, '');
        console.log("test");
      });
    });
  </script>

<?php
}
```

## Third way — Create a function to make it work properly (on front-end only)

After some help on Slack, I got the following snippet, the best one:

```php
function conditionally_trim_zeros( $trim ) {
  if ( ! is_admin() ) {
    $trim = true;
  }
  return $trim;
}
add_filter( 'woocommerce_price_trim_zeros', 'conditionally_trim_zeros' );
```
