---
templateKey: code-post
title: >
  WooCommerce: Redirect users by role to specific URL, after login in
date: 2021-04-08T19:28:37.629Z
featuredpost: false
featuredimage: /assets/woocommerce-logo.png
description: >
  Learn how to redirect "subscribers" and "shop managers" to specific URLs, after login in to the wp-admin. This is great if you are developing a website, and you just want to show an "Under Construction" page.
tags:
  - Web Development
  - PHP
  - WooCommerce
---

## Visitor

The following snippet is great for when you are still developing the website, and you might have an "**Under construction**" page, but you want to show the actual "private" website to your client or a friend.

First, create a new user with this role: "**Subscriber**"; then, add the following snippet to the `functions.php` of your child-theme. After this is done, you must use/share the entire URL, including **`/wp-admin/`** at the end, otherwise the person will not be able to see the log-in page. For example <https://YOUR-DOMAIN-HERE.com/wp-admin/>. After login in, we redirect the user to the homepage. Like this, this "Subscriber" user has **NO access** at all to the backend.

```php
function visitor_login_redirect( $redirect_to, $request, $user ) {
    // is there a user to check?
    if (isset($user->roles) && is_array($user->roles)) {
        // check for subscribers
        if (in_array('subscriber', $user->roles)) {
            // redirect them to another URL
            $redirect_to = 'https://YOUR-DOMAIN-HERE.com';
        }
    }

    return $redirect_to;
}

add_filter( 'login_redirect', 'visitor_login_redirect', 10, 3 );
```

## Shop Manager

The following snippet is great to use when you want to show both the frontend and the backend (wp-admin) to your client. In this case, create a new user with a "**Shop Manager**" role, and we will redirect this user to the "**WooCommerce Orders**" page, after login in.

```php
function shop_manager_login_redirect( $redirect_to, $request, $user ) {
    // is there a user to check?
    if (isset($user->roles) && is_array($user->roles)) {
        // check for shop managers
        if (in_array('shop_manager', $user->roles)) {
            // redirect them to another URL
            $redirect_to = 'https://YOUR-DOMAIN-HERE.com/wp-admin/edit.php?post_type=shop_order';
        }
    }

    return $redirect_to;
}
add_filter( 'login_redirect', 'shop_manager_login_redirect', 10, 3 );
```
