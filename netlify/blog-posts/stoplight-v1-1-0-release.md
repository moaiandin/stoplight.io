---
path: >-
  /blog/stoplight-v1-1-0-studio-release
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishedDate: 2019-09-09T14:00:00.059Z
author: Robert Wallach
title: Stoplight v1.1.0 Release
subtitle: 'Path Parameters, Download Project, Spectral'
image: /images/changelog-stock.jpg
color: black
disqus:
  enabled: true
actionBar:
  ctas:
    - color: purple
  enabled: false
meta:
  description: 'Path Parameters, Download Project, Spectral'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Stoplight v1.1.0 Release| Stoplight API Corner
  image: /images/changelog-stock.jpg
  twitter:
    description: 'Path Parameters, Download Project, Spectral'
    title: Stoplight v1.1.0 Release | Stoplight API Corner
    image: /images/changelog-stock.jpg
    username: '@stoplightio'
---

## Studio v1.1.0

### Features
- Path parameters are now exposed in the Forms view for OpenAPI v2/v3 endpoints [#3](https://github.com/stoplightio/studio/issues/3)
- Spectral rules can now be toggled and customized using a ‘.spectral.yml’ configuration file located in the root of the project repository
- Can now download a zip file of the project contents in Studio Web
- The embedded Prism included in Studio Desktop has been updated to version v3.1.0
- Added support for basic Git merge capabilities
- Improved overall Git pull performance

### Bug Fixes
- Model-to-model JSON references not displaying properly in Read view [#79](https://github.com/stoplightio/studio/issues/79)
- Array types not displaying properly in Read view [#70](https://github.com/stoplightio/studio/issues/70)
- Would receive error “Author Name cannot be empty” when pushing to git remote [#74](https://github.com/stoplightio/studio/issues/74)
- Operation examples would not display in Read view [#80](https://github.com/stoplightio/studio/issues/80)
- Diagnostics panel would not display for non-OpenAPI files [#62](https://github.com/stoplightio/studio/issues/62)
- Version numbers have been added back to the sidebar [#69](https://github.com/stoplightio/studio/issues/69)
- Encountered an error when canceling import for an API [#83](https://github.com/stoplightio/studio/issues/83)
- No way to select multiple security schemas of the same type [#52](https://github.com/stoplightio/studio/issues/52)
- Encountered invalid $ref Spectral errors for valid references [#56](https://github.com/stoplightio/studio/issues/56)
- Deleted projects not always removed from recent projects list [#66](https://github.com/stoplightio/studio/issues/66)
- Enums not created with the correct type[#59](https://github.com/stoplightio/studio/issues/59)
- Unable to switch Studio projects properly [#89](https://github.com/stoplightio/studio/issues/89)

## Platform v1.1.0

### Bug Fixes
- “Reset Password” functionality would not always work
- Fixed an issue when connecting to a Bitbucket service that included a base path in its URL
- Signing up with Github now defaults to using your username, previously it would use your email address as your username
- Fixed people and project list pagination in the site admin area
