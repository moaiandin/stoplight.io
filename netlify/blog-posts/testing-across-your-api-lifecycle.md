---
path: /blog/api-integration-testing
tags:
  - blog
  - blog-testing
relatedTags:
  - blog-testing
publishedDate: 2019-07-24T15:58:55.775Z
author: Ross McDonald
title: Testing Across Your API Lifecycle
subtitle: Adopt real use cases for better API testing
listSubtitle: ''
image: /images/robin-pierre-323861-unsplash.jpg
color: black
includeToc: true
disqus:
  enabled: true
actionBar:
  buttons: []
  enabled: false
  text: Stoplight
meta:
  description: Adopt real use cases for better API testing
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Testing Across Your API Lifecycle | Stoplight API Corner
  image: /images/api-lifecycle.png
  twitter:
    description: Adopt real use cases for better API testing
    title: Testing Across Your API Lifecycle | Stoplight API Corner
    image: /images/api-lifecycle.png
    username: '@stoplightio'
  url: 'https://stoplight.io/blog/api-integration-testing'
---
In our last post in this series, [HTTP API Unit Testing](https://stoplight.io/blog/the-fundamentals-of-http-api-unit-testing-2c55cd0c7634/), we unpacked the importance of unit testing in the world of APIs. Not only does unit testing ensure your API is working as expected, but it helps to safeguard against current or future implementation changes. These simple unit tests are ultimately the foundation on which the rest of your API testing environment is built. In this follow-up post, we’ll explore other methods of API testing and how all of these tests combine to build better APIs for you and your users. 

## Integration Testing vs Unit Testing

As discussed in the previous post, the idea behind unit testing is to break down a large set of logic into individual units that can be tested in isolation. An API has an essential contract: when I give you ‘x’, you give me ‘y’. The only way to be sure you’ve been given ‘y’ at any point of time in the lifecycle of the API call is to test the function that provides ‘y’. This is where unit testing comes into play. 

Integration testing, on the other hand, builds upon these individual units to test your API as a whole. While unit tests validate how your API is built, integration testing tests how your API is used. Strong unit tests don’t mean much if the experience of using the API isn’t what an end user would expect. Use integration testing to evaluate how well the API meets the needs of the end user. You’re creating this API to be used by others, after all. 

So, ask yourself: how is the end user going to use this API? What are the series of requests the user will follow to use the API? Is my end user able to accomplish their goals and receive value from the API? Create “scenarios” for these user behaviors, and test them thoroughly to ensure the API specification is continually matching the API implementation. Then, these tests can be run over and over again to make sure it’s aligned with the contract at every step. 

## Role of Testing In Each Phase

Let’s take a step back and look at the bigger picture surrounding the API lifecycle. Gartner defines the API development process as three major phases: Design, Build, and Run. Your integration tests play a role in each of these phases.

During the design phase we map out how services interact and we utilize mocking to try out how the API we just designed will run. Then, we map out how we think people will interact with the API, ideally involving teammates with expertise in the business area the API supports. What are some particular use cases and how can we mock out tests to make sure we’re handling all the use cases? 

Next, it’s onto the building stage where testing becomes even more important. As we build out the API, we must continually test to ensure the code is aligning with the spec along the way. A commitment to thorough testing while in pre-production is the easiest and most efficient way to create a great API.

![API lifecycle: design, build, run, maintain, support, update](/images/api-lifecycle.png)

Finally, when it’s time to run your API in production, you want to ensure your tests still pass. Of course, diligence in earlier phases should lead to lower stress deploys, but the API story doesn’t end when it’s deployed. We believe there are three more important phases to that development lifecycle: Maintain, Support, and Update. 

Your deployed API needs to be revisited time and time again to ensure it’s functioning as expected. You will fix bugs, add new functionality, and expand your endpoints. As needed, you’ll create more unit tests–– to ensure that a user is still getting ‘y’ when they send ‘x’ to your endpoint. You’ll also want to add integration tests as you discover additional scenarios from real-world usage of your API. 

Plan for important updates and schedule them out, answer questions from end users, and factor their feedback into newer iterations of your API. All those tests you created while designing and building will be handy in this maintenance phase. Your future self (and the rest of your team) will thank you! 

## Take the Next Step to Test Your APIs

If you can’t tell already, we get pretty excited about testing. By combining unit and integration testing, you can get peace of mind across the entire API lifecycle. With strong testing, you can be certain that each endpoint returns the data you expect and that a series of calls interacts reliably.

In addition to testing, we are supporters of the tools that make it easier, most notably the OpenAPI spec, which is quickly becoming the industry-standard format for describing REST-ful APIs. We’ve built our platform to use these API specs as your source of truth for your API, and to provide the tooling and automation to incorporate them at every level of your API development. We have also created open source projects for linting (Spectral) and mocking(Prism) your API specifications, which can be helpful for not only designing APIs, but also for building them. In addition, Stoplight helps you build unit and integration tests on top of OpenAPI documents using Scenarios.

![Integration testing with Stoplight](/images/testing-intro.png)

[Stoplight Scenarios](https://docs.stoplight.io/testing/introduction) allow you to easily assert, transform, and validate your API definition against your API. Scenarios--the basis of your integrations tests--are described in plain JSON. They have no opinion about your architecture or environment. They simply build upon what is described in your OpenAPI document, and allow you to verify that what you’ve built aligns with what you designed.

Include integration testing throughout your API lifecycle to gain confidence that your API will work the way users expect, based upon the way they are interacting with the endpoints.

How has testing as made your API better? Tell us in the comments!
