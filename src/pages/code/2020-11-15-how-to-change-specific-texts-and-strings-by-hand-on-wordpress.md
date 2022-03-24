---
templateKey: code-post
title: 'How to change specific texts and strings "by hand" on WordPress'
date: 2020-11-15T19:28:37.629Z
featuredpost: false
featuredimage: /assets/woocommerce-logo.png
description: 'How to change specific texts, titles, terms and strings "by hand" on WordPress or WooCommerce? Find it out on this post.'
tags:
  - Web Development
  - WooCommerce
  - PHP
---

The function below allows you to change all texts, titles or strings found on WordPress and WooCommerce pages "by hand". You just have to follow the logic shown inside the `switch`: add a `case`, a `$translated_text`and a `break`.

```php
function change_texts_by_hand( $translated_text, $text, $domain ) {
    switch ($translated_text) {
        case 'Additional Information':
            $translated_text = __('Details afhaling', 'woocommerce');
            break;
        case 'Order Tracking':
            $translated_text = __('Uw bestelling', 'woocommerce');
            break;
    }
    return $translated_text;
}

add_filter( 'gettext', 'change_texts_by_hand', 20, 3 );
```

## When to use it?

You might use this function only if you are translating a website, and you still have some terms or text not translated automatically. If this is your case, then you can use this function, instead of changing the texts directly on the WordPress files. Which can be a pain, in case you update plugins, themes or the core files of WordPress, losing your previous text changes.

## Please Note

You just want to use this approach as a last resource on changing texts and translated texts on WordPress. This works great if you do not have a multilingual website running directly on WordPress. If that is your case, you should update the respective `.po` files found on `/wp-content/languages/`.
