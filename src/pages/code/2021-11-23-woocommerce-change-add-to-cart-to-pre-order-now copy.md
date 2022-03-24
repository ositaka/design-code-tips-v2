---
templateKey: code-post
title: 'WooCommerce: Change default "Add to Cart" button text to "Pre-order Now"'
date: 2021-11-23 10:22
featuredpost: false
featuredImage: /assets/wordpress.png
description: In this post you will learn how to change the default WooCommerce's "Add to Cart" button text to something else. In this example the new text will be "Pre-order now".
tags:
  - Web Development
  - WooCommerce
---

In this post you will learn how to change the default WooCommerce's "Add to Cart" button text to something else. In this example, the new text will be "Pre-order now".

## You must add the following code on your `functions.php` file

Make sure you replace the `$specific_ids` variable to use your desired product's ids. In this example we are using the following product's ids: `2413, 2414, 2415`

```php
/*  Change default "Add to Cart" button text to "Pre-order Now"
 =============================================================== */

add_filter( 'woocommerce_product_add_to_cart_text', 'change_add_to_cart_to_pre_order', 20, 2 );
add_filter( 'woocommerce_product_single_add_to_cart_text', 'change_add_to_cart_to_pre_order', 20, 2 );

function change_add_to_cart_to_pre_order( $button_text, $product ) {
    // HERE define your specific product IDs in this array
    $specific_ids = array(2413, 2414, 2415);

    if( in_array($product->get_id(), $specific_ids) ) {
        $button_text = __('Pre-order now', 'woocommerce');
    } else {
        $button_text = __('Add to cart', 'woocommerce');
    }
    return $button_text;
}
```

Hope this might be helpful to someone else, as well it helps me.
