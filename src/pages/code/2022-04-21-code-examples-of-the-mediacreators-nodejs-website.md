---
templateKey: code-post
title: >
  Code Examples of the Media Creators (NodeJS) website
date: 2022-04-21T19:28:37.629Z
featuredpost: false
description: >
  Here is shown a few precious pieces of code, to help in the near future, when no one knows what this all is about.
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

On this chapter, we can find a few examples of code, thought to take the most advantage of the user's internet connection type. These connection types can vary from `4g`, `3g`, `2g` and `slow-2g`. For the sake of simplicity, we are going to ignore the `2g` one and use `slow-2g` instead, as it is the slowest internet connection (GPRS).

Have in mind that, by default, Prismic already serves all the images with a reasonable quality/compression ratio. As a plus, it serves already all the images with a `.webp` and it converts `.gif` files to animated `.webp` files. The images end-up by having a good final file size served from Prismic.

We use the [PugJS](https://pugjs.org/api/getting-started.html) as template engine to make use of it's magic on serving dynamic data, with NodeJS. To achieve this, we set a JavaScript cookie on the `base.pug` file, after checking the user's connection type at the very beginning of the request. This "internet connection check-test" it runs every type the user navigates between pages.

As a good example for this use case scenario is, for instance, on an indoor market, where the internet connection is not so good, and it's changing quite frequently between `3g` and `slow-2g`. With this approach, we can quickly serve more compressed images, that will take less time to be loaded. This will give a better experience to the user and will keep the user motivated to wait a bit more, but not give it up. We show a background color on all images, based on its main color, picked by hand, to keep the branding aspect in mind.

### 1.1 — Check user's internet connection type with JavaScript & server the appropriated media files with ExpressJS

The following JavaScript code is executed on the `<head>` HTML element, right after the SEO metatags. This code snippet it will add to check the user's internet connection with the help of `navigator.connection?.effectiveType`.

Browser compatibility: **Chrome based browsers** and **Opera** only. No support for Safari.

```pug
//- Check Internet Connection
//- on initial page load
script.
  document.cookie = `connection=; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
  document.cookie = `connection=${navigator.connection?.effectiveType}`;

  if (!window.location.hash) {
    // redirects the user,
    window.location = window.location + '#loaded';
    window.location.reload();
  } else {
    history.pushState("", document.title, window.location.pathname)
  }
```

Now let's get use of this cookie `connection` from the client-side and serve the appropriated media (using ExpressJS as a server).

This is the reference code of our `app.js` file:

```pug
const cookieSession = require('cookie-session');

app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 15 * 60 * 1000, // 15 minutes
  })
);

app.use((req, res, next) => {
  const ua = UAParser(req.headers['user-agent']);

  res.locals.isDesktop = ua.device.type === undefined;
  res.locals.isPhone = ua.device.type === 'mobile';
  res.locals.isTablet = ua.device.type === 'tablet';

  res.locals.Link = handleLinkResolver;

  res.locals.PrismicDOM = PrismicDOM;

  if (res.locals.connection == undefined && req.headers.cookie) {
    // returns an object with the cookies' name as keys
    const getAppCookies = (req) => {
      // We extract the raw cookies from the request headers
      const rawCookies = req.headers.cookie.split('; ');

      const parsedCookies = {};
      rawCookies.forEach((rawCookie) => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
      });
      return parsedCookies;
    };

    let connection = getAppCookies(req, res)['connection'];

    res.locals.connection = connection;

    console.log('connect on the server', connection);
  } else {
    res.locals.connection = req.body.connection;
  }
  next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
```

### 1.2 — Video example (with Image fallback)

The desired element on this media object is the HTML element `<video>` and is only served when the **user** is on a `4g` connection. In case the user is on a bad connection type, for instance `3g` or `slow-2g`, an `<img>` HTML element will be served.

#### Notes

1. In order to get even a better performance, and page load speed, we are using `.replace('?auto=compress,format', '?q=30&auto=compress,format')` to request a 70% optimized image, from the image processor of Prismic: [`imgix`](https://prismic.io/blog/prismic-image-optimization-imgix 'See official post on Prismic.io').

2. For desktop devices, it is better to set a maximum size of 1200px wide, by using `&w=1200` at the end of the quality parameter from the previous point.

3. For mobile devices, the default `width` of all the images are **480px**, because is higher than the default 360px screen phone's width. This is helpful, because it serves a better image for high DPI screens, without the need for using a `@2x` image. In our case, the most important is the overall [Performance of the website](https://design-code.tips/tags/performance/).

#### Example code — Video on `4g` only

```pug
figure.home__hero__media
  picture(height=`${home.data.video[0].video_preview.dimensions.height}` width=`${home.data.video[0].video_preview.dimensions.width}` style=`background-color: ${home.data.video[0].background_color}`)
    if (connection === '4g')
      video(preload="auto" playsinline loop muted disablepictureinpicture
        srcset=`
          ${home.data.video[0].video_mobile.url} 768w,
          ${home.data.video[0].video_desktop.url} 769w
        `)
    else
      if (typeof(home.data.video[0].video_preview.phone) !== 'undefined')
        source(media='(max-width: 768px)' srcset=`${home.data.video[0].video_preview.phone.url.replace('?auto=compress,format', '?q=30&auto=compress,format')}`)
        source(media='(min-width: 769px)' srcset=`${home.data.video[0].video_preview.url.replace('?auto=compress,format', '?q=30&w=1200&auto=compress,format')}`)
      img(alt=home.data.video[0].video_preview.alt data-src=home.data.video[0].video_preview.url height=`${home.data.video[0].video_preview.dimensions.height}` width=`${home.data.video[0].video_preview.dimensions.width}`)
```

#### Example code — Media can be a `<video>` element or a `<img>` element. Then, check the user's internet connection to serve video or image

```pug

figure.work_page__full-screen__media
  picture(height=`${section.primary.image.dimensions.height}` width=`${section.primary.image.dimensions.width}` style=`background-color: ${section.primary.background_color}`)
    //- is video && is on 4g
    if (section.primary.is_video === true && connection === '4g')
      video(preload="auto" playsinline loop muted disablepictureinpicture
        srcset=`
          ${section.primary.video_mobile.url} 768w,
          ${section.primary.video_desktop.url} 769w
        ` style=`background-color: ${section.primary.background_color}`)

    //- is video && is not on 4g: show image
    else if (section.primary.is_video === true && connection !== '4g' && typeof(section.primary.image.phone) !== 'undefined')
      source(media='(max-width: 768px)' srcset=`${section.primary.image.phone.url.replace('?auto=compress,format', '?q=30&auto=compress,format')}`)
      source(media='(min-width: 769px)' srcset=`${section.primary.image.url.replace('?auto=compress,format', '?q=30&w=1200&auto=compress,format')}`)
      img(alt=section.primary.image.alt data-src=section.primary.image.url height=`${section.primary.image.dimensions.height}` width=`${section.primary.image.dimensions.width}`)

    //- is image
    else
      if (typeof(section.primary.image.phone) !== 'undefined')
        source(media='(max-width: 768px)' srcset=`${connection === '4g' ? section.primary.image.phone.url : section.primary.image.phone.url.replace('?auto=compress,format', '?q=30&auto=compress,format')}`)
        source(media='(min-width: 769px)' srcset=`${connection === '4g' ? section.primary.image.url.replace('?auto=compress,format', '') : section.primary.image.url.replace('?auto=compress,format', '?q=30&w=1200&auto=compress,format')}`)
      img(alt=section.primary.image.alt data-src=section.primary.image.url.replace('?auto=compress,format', '') height=`${section.primary.image.dimensions.height}` width=`${section.primary.image.dimensions.width}`)
```

### 1.3 — Image example (`4g` vs `3g`/`slow-2g`)

Ideally, with `4g`, we serve a more sharped image (without any compression) and we use `.replace('?auto=compress,format', '')` to replace the default auto-compressed file from Prismic's CDN (with [`imgix`](https://prismic.io/blog/prismic-image-optimization-imgix 'See official post on Prismic.io')).

If the user is on a bad connection (`3g` or `slow-2g`), we serve a 70% optimized image from the request to the Prismic CDN (with [`imgix`](https://prismic.io/blog/prismic-image-optimization-imgix 'See official post on Prismic.io')).

#### Example code — Sharper images on `4g`

```pug
figure.home__projects__item__media
  picture(height=`${project.project_image.dimensions.height}` width=`${project.project_image.dimensions.width}` style=`background-color: ${project.background_color}`)
    if (typeof(project.project_image.phone) !== 'undefined')
      source(media='(max-width: 768px)' srcset=`${connection === '4g' ? project.project_image.phone.url : project.project_image.phone.url.replace('?auto=compress,format', '?q=30&auto=compress,format')}`)
      source(media='(min-width: 769px)' srcset=`${connection === '4g' ? project.project_image.url.replace('?auto=compress,format', '') : project.project_image.url.replace('?auto=compress,format', '?q=30&w=1200&auto=compress,format')}`)
    img.home__projects__item__media__image(alt=project.project_image.alt data-src=project.project_image.url.replace('?auto=compress,format', '') height=`${project.project_image.dimensions.height}` width=`${project.project_image.dimensions.width}`)

```

### 1.4 — Simple Image Example (desktop & phone)

Here is a simple image example, but still, we make sure we serve the right format size for mobile devices as well as for desktops. We double-check the internet connection type; if it is `4g`, we serve a more sharp/detailed image.

```pug
figure.services__projects__item__media
  picture(height=`${project.project_image.dimensions.height}` width=`${project.project_image.dimensions.width}` style=`background-color: ${project.background_color}`)
    img.services__projects__item__media__image(
      alt=project.project_image.alt
      data-src=`
        ${connection === '4g' ?
          project.project_image.url.replace('?auto=compress,format', isPhone ? '?w=480' : '?w=900' )
        :
          project.project_image.url.replace('?auto=compress,format', isPhone ? '?q=30&w=360&auto=compress,format' : '?q=30&w=600&auto=compress,format')}`
        height=`${project.project_image.dimensions.height}`
        width=`${project.project_image.dimensions.width}`)
```

## 2 — Responsive Video with JavaScript

On this chapter will take a quick look on how to be able to mimic the **responsive image** aspect, but on video. We can achieve this by using a `<video>` HTML element with a `data-src` data-attribute.

### 2.1 — Responsive Video Code — JavaScript

```js
// responsive video
function responsiveVideo(window, undefined) {
  function videoSourceSet(options, elements) {
    options = Object.assign({}, { resize: false, resizeDelay: 50 }, options);
    if (elements === undefined) {
      elements = document.getElementsByTagName('video');
    }
    var regex = /^\s*(.+)\s+(\d+)([wh])?\s*$/;
    function getSourceSets(def) {
      var sources = [];
      var parts = def.split(',');
      for (var i in parts) {
        var result;
        if ((result = parts[i].match(regex))) {
          sources.push({ width: parseInt(result[2]), src: result[1] });
        }
      }
      return sources;
    }

    function selectSource(srcsrt, screenWidth) {
      var sources = getSourceSets(srcsrt);
      var selectedDiff = null;
      var source = null;

      for (var i in sources) {
        var candidate = sources[i];
        var candidateDiff = candidate.width - screenWidth;
        if (
          source === null ||
          (selectedDiff < 0 && candidateDiff >= 0) ||
          (candidateDiff < 0 && candidateDiff > selectedDiff) ||
          (candidateDiff >= 0 && candidateDiff < selectedDiff)
        ) {
          selectedDiff = candidateDiff;
          source = candidate.src;
        }
      }
      return source;
    }

    function init(elements) {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.tagName == 'VIDEO' && element.hasAttribute('srcset')) {
          var srcset = element.getAttribute('srcset');
          if (srcset) {
            var selectedSource = selectSource(srcset, window.innerWidth);
            if (selectedSource !== element.src) {
              element.src = selectedSource;

              // fix intersecObserver
              var playPromise = element.play();

              if (playPromise !== undefined) {
                playPromise
                  .then((_) => {
                    element.pause();
                  })
                  .catch((error) => {
                    error = null;
                  });
              }
            }
          }
        }
      }
    }
    init(elements);

    if (options.resize) {
      var resizeDelayTimeout = null;
      window.addEventListener('resize', function () {
        if (resizeDelayTimeout !== null) {
          clearTimeout(resizeDelayTimeout);
        }
        resizeDelayTimeout = setTimeout(function () {
          init(elements);
        }, options.resizeDelay);
      });
    }
  }
  window.videoSourceSet = videoSourceSet;
}

responsiveVideo(window);
videoSourceSet({ resize: true, resizeDelay: 1000 });
```

### 2.2 — Responsive Video Code — PugJS & HTML

In order to be able to use the magic from the above code, we have to use the code below. Please note that the `src` attribute on the `<video>` element will be added automatically with the JavaScript code.

1 - PugJS version

```pug
video(preload="auto" playsinline loop muted disablepictureinpicture
  srcset=`
    ${section.primary.video_mobile.url} 768w,
    ${section.primary.video_desktop.url} 769w
  `)
```

2 - HTML version

```html
<video
  preload="auto"
  playsinline
  loop
  muted
  disablepictureinpicture
  srcset="
    https://media-creators.cdn.prismic.io/media-creators/85ff18ed-2238-4095-bdd6-ae19a6a5d502_pierre-sports__shop-product__mobile.mp4 768w, 
    https://media-creators.cdn.prismic.io/media-creators/6cdb67a6-3fe0-4429-98b7-237c7c6aa84c_pierre-sports__shop-product%401920_lighter.mp4 769w
  "
></video>
```

### 2.3 — Use an [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to `play()` the `<video>`when it is _only_ visible on the screen

Here you can see the core concept idea using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to check if the `<video>` is currently visible on the user's screen.

#### 2.3.1 — Code Example — Video plays only when is visible

```js
// Video.js
import Animation from 'classes/Animation';

export default class extends Animation {
  constructor({ element }) {
    super({
      element,
    });
  }

  animateIn() {
    this.element?.play();
  }

  animateOut() {
    this.element?.pause();
  }
}
```

#### 2.3.2 — Code Example — Animation JS `class` using the `window.IntersectionObserver` to make all the magic

Pay special attention to the `createObserver()` function and see how it works.

```js
// Animation.js
import AutoBind from 'auto-bind';

export default class {
  constructor({ element, elements }) {
    AutoBind(this);

    const { animationDelay, animationTarget } = element.dataset;

    this.delay = animationDelay;
    this.element = element;
    this.elements = elements;
    this.target = animationTarget ? element.closest(animationTarget) : element;
    this.isVisible = false;

    if ('IntersectionObserver' in window) {
      this.createObserver();
      this.animateOut();
    } else {
      this.animateIn();
    }
  }

  createObserver() {
    this.observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!this.isVisible && entry.isIntersecting) {
          this.animateIn();
        } else {
          this.animateOut();
        }
      });
    }).observe(this.target);
  }

  animateIn() {
    this.isVisible = true;
  }

  animateOut() {
    this.isVisible = false;
  }
}
```
