---
path: /blog/stoplight-v4-10
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishedDate: 2019-06-12T17:32:51.693Z
author: Robert Wallach
title: Stoplight v4.10 Release
subtitle: 'LDAP SSO Support, Powershell Code Generation, Enhancements & Fixes'
image: /images/changelog-stock.jpg
color: black
tabs: []
includeToc: false
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: 'LDAP SSO Support, Powershell Code Generation, Enhancements & Fixes'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: v4.10 Release | Stoplight API Corner
  twitter:
    description: 'LDAP SSO Support, Powershell Code Generation, Enhancements & Fixes'
    title: v4.10 Release | Stoplight API Corner
    image: /images/changelog-stock.jpg
    username: '@stoplightio'
---
# Stoplight v4.10.0 Release

[Release files on GitHub](https://github.com/stoplightio/desktop/releases/tag/v4.10.2)

## New 🚀

### LDAP SSO Support

We have enabled LDAP as an SSO provider.

### Request Maker PowerShell Code Generation

This feature enables Power Shell as a code example for Request maker.

## Enhancements 💪

* \[Scenarios] Updated the Scenarios Step Editor to prefix the selected operation with the default {$$.env.host} variable
* \[Modeling] Updated the behavior of generating examples from the schema to use the JSON example if available before defaulting to lorem ipsum
* \[Hubs] Updated the behavior of endpoint sorting for Hubs that will allow the user to force the endpoints to be sorted alphabetically. This can be accomplished by adding a property to the x-stoplight object in an OpenAPI document of “sortEndpoints” and it is set to true or false

![Sorting Example](/images/sorting-example.gif)

* \[Prism] Allow users to disable SSL certificate verification when proxying requests. Users can now add a CLI flag (--skip-verify, etc) that disables TLS verification when Prism proxies requests to an upstream URL

## Fixes 🔧

* \[Modeling] Removed the ability to set a description on a ref
* \[Request Maker] Updated Request Maker to enforce protocol scheme if set globally in the specification
* \[Modeling] Updated designer to remove validate error messages when those errors are corrected
* \[Modeling] Non-unique operations IDs will now display as an error, not a warning
* \[Hubs] Enabled variable templating inside titles for Hubs
* \[Modeling] Addressed issue to allow copy-and-paste from our request/response objects
* \[Modeling] We were displaying the description for a model twice in the read view, we’ve corrected this to display only once
