---
templateKey: tools-post
title: 'HandBrake: Open Source Video Transcoder'
date: 2019-07-04T15:04:10.000Z
featuredpost: true
featuredimage: /media/tools/handbrake.png
description: HandBrake is a tool you can use to convert video for the web.
tags:
  - Video
  - Web
  - Open Source
  - Software
  - Compression Tools
---

![handbrake](/media/tools/handbrake.png)

## What is HandBrake?

[HandBrake](https://handbrake.fr/) is an open-source video transcoder available for Linux, Mac, and Windows. Everyone can use HandBrake to make videos _for free_. It takes videos you already have and makes new ones that work on your mobile phone, tablet, TV media player, game console, computer, or web browser—nearly anything that supports modern video formats.

## What's the benefit of using HandBrake for web video?

You can use HandBrake to **compress** `.mp4` videos for web. As an example, you can reduce drastically the size of a full HD 30 second video to about **2 MB** only, when using an `Average Bitrate` of **800 (kbps)**, even with videos at `60 FPS`.

You can take a deeper look at the **image above** to see the settings I am using to compress all the videos we use on our websites at [Media Creators Studio](https://mediacreators.studio). These are so far the best settings I've figured out that keep quality and have a ridiculous small file size.

You can easily create a few presets to speed up your workflow when using or creating videos for the web. I recommend you to have 4 presets:

- DESKTOP — 800 kbps @ 1920x1080 — No Audio (30 FPS)
- DESKTOP — 800 kbps @ 1920x1080 — No Audio (60 FPS)
- MOBILE — 480 kbps @ 768x768 — No Audio (30 FPS)
- MOBILE — 480 kbps @ 768x768 — No Audio (60 FPS)

Please note there is _almost no difference_ in file size between the `30 FPS` and `60 FPS`.

## How did I find HandBrake?

I've found HandBrake after researching for ways of having _ridiculous_ small file sizes, to show video on websites. With this solution you don't even have to have lots of files to have what I call `responsive videos`. For _Desktop_ you get a file size of approximately **2MB** and for _Mobile_ you can get something between **400 KB** to **1 MB**, according to the duration of the video.

I hope this post and HandBrake can save your day!
