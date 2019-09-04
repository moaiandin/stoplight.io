---
path: /blog/api-design-choreography
tags:
  - blog
  - blog-design
relatedTags:
  - blog-design
publishedDate: 2019-05-29T21:07:20.912Z
author: Adam DuVander
title: What API Design Can Learn from Choreography
subtitle: Work collaboratively to get your API from rehearsal to production
image: /images/choreography-stage.jpg
color: black
tabs:
  - {}
includeToc: true
disqus: {}
actionBar:
  ctas:
    - color: purple
  enabled: false
meta:
  description: Work collaboratively to get your API from rehearsal to production
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: What API Design Can Learn from Choreography | Stoplight API Corner
  image: /images/choreography-stage.jpg
  twitter:
    description: Work collaboratively to get your API from rehearsal to production
    title: What API Design Can Learn from Choreography | Stoplight API Corner
    image: /images/choreography-stage.jpg
    username: '@stoplightio'
---

Legendary Broadway director Gower Champion walked into a rehearsal to find the cast standing around. They weren’t sure what to do in a scene, so they weren’t doing anything. The choreographer, who is supposed to know these things, sat puzzled in the audience. Surely Champion, who won five Tonys for choreography (and another three for directing), would have the answer.

> Instead, Champion turned to the choreographer and said, “do something, so we can change it.”

There are many situations where you’ll find yourself paralyzed by indecision. In many cases, including [API design](https://stoplight.io/design/), taking action is exactly the answer to unblock paralysis.

## Design Something, So You Can Change It

Frontend and backend teams are rarely in perfect step. Frequently, the team that wants to consume an API is ready long before there are any endpoints to call. You don’t want engineers standing around the stage without anything to do. It’s time to design _something_, which can then be iterated upon.

Production API decisions are forever. You may end up supporting clients consuming that API for years. Thoughtless action could make API maintenance unbearable, but only if decisions are permanent. During the API design phase, much like Broadway rehearsals, you may try things that never make it to production.

![Stoplight visual API builder](/images/design_header.png)

For example, you can use a tool like Stoplight to model your responses. Then stub out endpoints and request structures. This way, you design your API outside of code, with very little overhead needed to make changes. Take your API beyond conceptual and then you’ll be more likely to know what needs to change.

## The API Design Collaboration Dance

You need more than one star performer, whether you’re making a Broadway show or an API. Even if your company has an API architect, they won’t have all the market knowledge of the product teams, or data constraints insights of the engineers. When you start to design your API, create an object to which collaborators can react. You’ll need a place to log the feedback and conversation.

Every team has its own way of handling collaboration, even if it’s not a formal process. Some common approaches:

- **Unstructured chat** in Slack or other channel-based discussion tool. It may be a project-specific channel, or tossed in with other engineering chatter.
- **Inline in a spec document** for the project. Alongside other architecture (and product) discussion, you’ll find some sort of list of endpoints.
- **Within project management software** like Jira, GitHub Issues, or similar place for tracking engineering work.
- **In GitHub comments** for a work-in-progress PR, which likely means you’re designing your APIs in code.

There are probably almost as many approaches as there are dev teams. The tools you use will determine who feels welcome in the discussion. In some cases, it may determine who even has _access_ to the API design process.

![Stoplight collaboration within the API designer](/images/design_collaborate.png)

Stoplight includes full team support, so everyone has access to the latest API design thinking. You’re more likely to get feedback from product, business development, or other relevant teams if there’s a comfortable place to collaborate.

A great Broadway show frequently includes actors, singers, and dancers. Similarly, you can call on diverse skill sets and roles to make your API successful.

## API Requests Are Performances

As you design an API, you figure out the use cases it needs to support and how it will enable them. You get feedback from those who will use it and make adjustments. At some point, you’re ready to go to production, much like a well-rehearsed Broadway show. A live API brings all the design work into reality.

As API requests come into your production API, those consuming it should already know what to expect. Your design codifies the endpoints, request data, and responses of your API. You can use an OpenAPI document to communicate what’s possible with your API in a machine-readable way.

![Stoplight's API testing compares against your design](/images/testing_header.png)

To confirm that your API is performing like you expect, use contract testing. Run test scenarios against your API to ensure it works like expected. Just as a choreographer might confirm that the planned steps are completed, you’ll ensure your development matches your design.
