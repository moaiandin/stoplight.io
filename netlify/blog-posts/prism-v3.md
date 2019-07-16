---
path: /blog/prism-v3
tags:
  - blog
  - blog-featured
  - blog-design
relatedTags:
  - blog-design
publishedDate: 2019-07-16T00:19:11.840Z
author: Vincenzo Chianese
title: Prism v3 Adds OpenAPI 3.0 and Goes Open Source
subtitle: Generate a mock API server without writing code
image: /images/apurv-das-H63k7kYljbY-unsplash.jpg
color: purple-dark
tabs:
  - {}
includeToc: true
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
      href: 'https://stoplight.io/prism/'
      outlined: false
      title: Get Started with Prism
  enabled: true
  text: Do you want a mock server on your API descriptions right now?
meta:
  description: "Prism now has a version 3: it's open source, faster, has OpenAPI 3 support, and more!"
  robots: 'index, follow'
  title: Prism v3 Adds OpenAPI 3.0 and Goes Open Source | Stoplight API Corner
  image: /images/apurv-das-H63k7kYljbY-unsplash.jpg
  twitter:
    description: "Prism now has a version 3: it's open source, faster, has OpenAPI 3 support, and more!"
    title: Prism v3 Adds OpenAPI 3.0 and Goes Open Source | Stoplight API Corner
    image: /images/apurv-das-H63k7kYljbY-unsplash.jpg
    username: '@stoplightio'
---

When designing APIs, it can be difficult to get **meaningful feedback** until you have a real API to share. That’s a complex process if you’re prototyping APIs in code. Prism is the mock server that enables you to have a test API that behaves how you specify without having to write **a single line of code.** For teams working in a CI/CD workflow, enterprise companies looking to get client-side teams involved as soon as possible, or small start-ups working on a big project with fewer resources, mock servers get feedback earlier in the development process and lead to more efficient results.

We are excited to announce **[the release of Prism v3](https://stoplight.io/prism)**, which contains significant upgrades, including:

- **support for OpenAPI 3.0.x (in addition to 2.0)**
- **fully open-source, we’ve already got quite a few community contributions**
- **more dynamic example responses**
- **detailed logging, including for failed requests**
- **a huge jump in request volume for your mock API**

This latest version can save your team **time, money, and headaches**, by getting your clients feedback **early** on in the design process, instead of after you’ve written a whole bunch of code. Making sure people are happy with how the API works early on means you can just tweak the description documents, which is a lot easier than rewriting code.

To show you how you can get the best from Prism, we will be doing a webinar on **July 23th at 10:00 AM CT**, if you'd like to learn more about the project. Sign up for the webinar [here](https://zoom.us/webinar/register/WN_aUiJ0RZZQT2pdGMPcHwhCQ).

![Prism CLI usage](https://rawcdn.githack.com/stoplightio/prism/cc4ec0955525470e358c281ee173f96bd5898b44/examples/prism-cli.svg)

Let me give you a detailed rundown of what Prism v3 can do.

## Built-in Support for OpenAPI 3.0 from the Ground Up

Prism v3 was purpose-built to be the engine that powers your mocking needs. You can quickly generate your servers using **OpenAPI 3.0.x**, the latest iteration of the format previously known as Swagger. The big advantage to this is that Prism v3 now has a **dynamic example generator** which will produce a large variety of data output, **rather than static data** for each response. This allows for a larger range of instant feedback than ever before.

When your mock servers produce static results, they can misrepresent the data that comes from your API. The responses can even become out-dated if they’re not tied to the OpenAPI document.

Even better, OpenAPI allows for schema extensions. We’ve included support for dynamic example generation from [JSON Schema Faker](https://github.com/json-schema-faker/json-schema-faker). Even without the extensions enabled, you’ll always receive the accurate response type. With JSON Schema Faker, you can also create **specific value types**, such as _names street addresses._

With the recent [release of Spectral](https://github.com/stoplightio/spectral), Prism v3 marks multiple open source projects from Stoplight that support Open API 3.0.x. Oh, and what if you are still using OpenAPI 2.0?  Don’t worry. **We still fully support OpenAPI 2.0 with Prism v3.**

## More Detailed Logging for Failed Requests

One of the most exciting changes for me about Prism v3 is the **new logging capabilities**.  In Prism v2, when you were receiving a response that did not make sense to you, the program would not give you actionable feedback to tell you **why that message was occurring.** Prism v3 gives you a running log, with a series of messages including why the program returned the response it did, and what it did as a result of that error. This vastly improves the **observability and debuggability** of your API.

Prism logs report inconsistencies within request data. For example, your API may expect an object with name, surname, and email address. If a field is missing from your request data, Prism tells you that not all the information was found in that user’s object and generate a 422 error highlighting the missing data.

Detailed logging helps you better test your API and also uncover the need for more complete OpenAPI definitions. In both cases, you’ll be building better APIs as a result.

## Prism v3 is Over 300 Times Faster

Prism v2 was built using an inefficient translation layer as the program worked between the Go and Javascript code it was written in. While we could have improved the performance here, we chose to rewrite the Go portion of Prism. Now **Prism v3 is written solely in TypeScript**, which allows for easier contributions from the community and reusing some of the libraries we’ve been already open sourced in the past.

The best part is that the **performance improvements** were staggering. Prism v3 is over **300 times faster** than the previous version. You can include mock server tests in your build process without noticing any slowdown.

Go is an efficient language, but it was Stoplight’s only tool that used it. That not only meant that Prism v2 was harder for the development community to contribute to its refinement, but it also meant that it was harder for us to build Prism into our hosted product.

## Try Prism v3 Today

Regardless of whether you’re an existing Prism user or brand new to mock APIs, we invite you to [give Prism v3 a try](https://github.com/stoplightio/prism). As you can probably tell, we’re excited and the advantages of this rewrite are clear:

- OpenAPI 3.0 support
- Dynamic examples
- Detailed logging
- Huge performance improvements

The goal of Prism v3 is to help all API architects save time with simplicity and instant feedback. With your descriptions you can verify all your ideas with a mock server very early in your development process.  With the new tools available in Prism v3, you can tell your client-side team they can use the API before it’s being implemented.  They can now achieve their use cases and give your server-side team feedback without having to write a single line of code.
