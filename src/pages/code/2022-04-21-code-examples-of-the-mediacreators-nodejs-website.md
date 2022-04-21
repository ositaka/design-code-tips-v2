---
templateKey: code-post
title: >
  Code Examples of the Media Creators (NodeJS) website
date: 2022-04-21T19:28:37.629Z
featuredpost: false
description: >
  Here is shown a few precious pieces of code, to help on the near future, when no one knows what this all is about.
tags:
  - Image Optimization
  - Internet Connections
  - JavaScript
  - NodeJS
  - Performance
  - Prismic.io
  - PugJS
  - Usability
  - User Experience
  - Video
  - Web Development
---

## 1 — Internet Connection Examples (`4g` + `3g`/`slow-2g`)

On this chapter we can find a few examples of code, tought to take the most advantage of the user's internet connection type. These connection types can vary from `4g`, `3g`, `2g` and `slow-2g`. For the sake of simplicity, we are going to ignore the `2g` one and use `slow-2g` instead, as it is the slowest internet connection (GPRS).

Have in mind that, by default, Prismic already serves all the images with a rasonable quality/compression ratio. As a plus, it serves already all the images with a `.webp` and it converts `.gif` files to animated `.webp` files. The images end-up by having a good final file size served from Prismic.

We use the `.pug` as template engine to make use of it's magic on serving dynamic data, with NodeJS. To achieve this, we set a JavaScript cookie on the `base.pug` file, after checking the user's connection type as the very beginning of the request. This "internet connection check-test" it runs every type the user navigates betwen pages.

As a good example for this use case scenario is, for instance, on a indoor market, where the internet connection is not so good and it's changing quite frequently betwen `3g` and `slow-2g`. With this approach, we can quickly serve more compressed images, that will take less time to be loaded. This will give a better experience to the user and will keep the user motivated to wait a bit more, but not give it up. We show a background color on all images, based on its main color, picked by hand, to keep the branding aspect in mind.

### 1.1 — Video example (with Image fallback)

The desired element on this media object is the html element `<video>` and is only served when the **user** is on a `4g` connection. Case the user is on a bad connection type, for instance `3g` or `slow-2g`, an `<img>` html element will be served.

#### Notes

1. in order to get even a better performance, and page load speed, we are using `.replace('?auto=compress,format', '?q=30')` to request a 70% optimized image, from the image processor of Prismic: [`imgix`](https://prismic.io/blog/prismic-image-optimization-imgix 'See official post on Prismic.io').

2. for desktop devices, is better to set a maximum size of 1200px wide, by using `&w=1200` at the end of the quality parameter fron the previous point.

3. for mobile devices the default `width` of all the images are **480px**, because is heigher than the default 360px screen phone's width. This is helpful, because it serves a better image for high DPI screens, without the need for using a `@2x` image. In our case, the most important is the overall [Performance of the website](https://design-code.tips/tags/performance/).

#### Example code — Video on `4g` only

```pug
figure.home__hero__media
  picture
    if (connection === '4g')
      video(preload="auto" playsinline loop muted disablepictureinpicture
        srcset=`
          ${home.data.video[0].video_mobile.url} 768w,
          ${home.data.video[0].video_desktop.url} 769w
        `)
    else
      if (typeof(home.data.video[0].video_preview.phone) !== 'undefined')
        source(media='(max-width: 768px)' srcset=`${home.data.video[0].video_preview.phone.url.replace('?auto=compress,format', '?q=30')}`)
        source(media='(min-width: 769px)' srcset=`${home.data.video[0].video_preview.url.replace('?auto=compress,format', '?q=30&w=1200')}`)
      img(alt=home.data.video[0].video_preview.alt data-src=home.data.video[0].video_preview.url height=`${home.data.video[0].video_preview.dimensions.height}` width=`${home.data.video[0].video_preview.dimensions.width}`)
```

### 1.2 — Image example (`4g` vs `3g`/`slow-2g`)

Ideally, with `4g`, we serve a more sharped image (without any compression) and we use `.replace('?auto=compress,format', '')` to replace the default auto-compressed file from Prismic's CDN (with [`imgix`](https://prismic.io/blog/prismic-image-optimization-imgix 'See official post on Prismic.io')).

If the user is on a bad connection (`3g` or `slow-2g`), we serve a 70% optimized image from the request to the Prismic CDN (with [`imgix`](https://prismic.io/blog/prismic-image-optimization-imgix 'See official post on Prismic.io')).

#### Example code — Sharper images on `4g`

```pug
figure.home__projects__item__media
  picture
    if (typeof(project.project_image.phone) !== 'undefined')
      source(media='(max-width: 768px)' srcset=`${connection === '4g' ? project.project_image.phone.url : project.project_image.phone.url.replace('?auto=compress,format', '?q=30')}`)
      source(media='(min-width: 769px)' srcset=`${connection === '4g' ? project.project_image.url.replace('?auto=compress,format', '') : project.project_image.url.replace('?auto=compress,format', '?q=30&w=1200')}`)
    img.home__projects__item__media__image(alt=project.project_image.alt data-src=project.project_image.url.replace('?auto=compress,format', '') height=`${project.project_image.dimensions.height}` width=`${project.project_image.dimensions.width}`)

```
