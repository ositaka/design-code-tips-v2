---
templateKey: code-post
title: >
  WooCommerce: Check if products on cart have a specific tag, and remove them if they can't be shipped to the customer country
date: 2021-04-20T19:28:37.629Z
featuredpost: false
description: >
  Check if WooCommerce products on cart have a specific tag, for example "Bottle-Wine", and remove them if they can't be shipped to the customer country.
tags:
  - Web Development
  - PHP
  - WooCommerce
---

## Check if products on cart have a specific tag: `#bottle-wine`

I have been looking for a way of removing specific products if they can't be shipped to the customer country.

Initially, I have come up with a long code with AJAX calls, but that solution was far from perfect. After a few months, I had to add a few more products like those ones and I had to sharpen the code I had before. After looking for new solutions, I have come up with the following one below.

As you can see, I have mixed two different sources and finally got it working right.

```php
/**
 * @snippet       Check if products on cart has a specific tag: #bottle-wine
 * @sourcecode    <https://stackoverflow.com/questions/53346384/avoid-checkout-for-specific-products-on-specific-country-in-woocommerce>
 * @sourcecode    <https://stackoverflow.com/questions/48795558/disable-shipping-for-specific-products-based-on-country-in-woocommerce>
 */

add_action( 'woocommerce_before_calculate_totals', 'checking_and_removing_items', 10, 1 );
function checking_and_removing_items( $cart ) {
    if( !is_checkout() && !is_cart() ) return;

    if ( is_admin() && ! defined( 'DOING_AJAX' ) )
        return;

    if ( did_action( 'woocommerce_before_calculate_totals' ) >= 2 )
        return;

    $customer_shipping_country = WC()->customer->get_shipping_country();

    if( empty($customer_shipping_country) ){
        $package = WC()->shipping->get_packages()[0];
        if( ! isset($package['destination']['country']) ) return;
        $customer_shipping_country = $package['destination']['country'];
    }

    // Only for NON BE customers
    if( $customer_shipping_country == 'BE' ) return;

    // Iterate through each cart item
    $found = false;
    foreach( $cart->get_cart() as $cart_item_key => $cart_item )
        if( has_term( array('bottle-wine'), 'product_tag', $cart_item['product_id'] ) ) {
            $found = true;
            $cart->remove_cart_item( $cart_item_key ); // remove item
        }

    if( $found ){
         // Custom notice
         wc_clear_notices();
         wc_add_notice('Wine products are not shippable to your country and have been removed', 'error');
    }
}
```

Have in mind for this code to work, you have to add `#bottle-wine` (in this case) as a **product tag**.
