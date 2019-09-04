---
path: /blog/api-design-example
tags:
  - blog
  - blog-design
relatedTags:
  - blog-design
publishedDate: 2019-06-13T17:33:30.466Z
author: Adam DuVander
title: A Simple API Design Walkthrough
subtitle: How to prototype an API before you code
image: /images/architect-designing.jpg
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
  description: How to prototype an API before you code
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: A Simple API Design Walkthrough | Stoplight API Corner
  image: /images/architect-designing.jpg
  twitter:
    description: How to prototype an API before you code
    title: A Simple API Design Walkthrough | Stoplight API Corner
    image: /images/architect-designing.jpg
    username: '@stoplightio'
---

Engineering teams need to collaborate amongst themselves and across departments to create great software. The frontend team may not create the API, but they should have a say in what it can do. Similarly, product and other non-engineering roles may have the most knowledge of the requirements.

As we covered in the [API Design Guide](https://stoplight.io/api-design-guide/basics/), there’s no such thing as design-second APIs. In this post, we’ll see how you might take an API for tracking employee vacation requests from concept through implementation.

## Identify the Use Cases

When designing APIs it can be tempting to skip thinking through how someone will use your software. On the surface, a vacation request API seems pretty simple: create new requests and approve them. Even seemingly simple needs should be given consideration so you at least ensure you're following [CRUD API best practices](https://stoplight.io/blog/crud-api-design/). Often, there’s more beneath the surface of your straightforward API.

There are at least two audiences you’re serving:

1. Developers who will integrate with your API
2. Users who will get things done with the developer’s software

When you have short discussions with one or both of these audiences, you’ll uncover additional use cases. For example, you might discover that employees need to:

- Add many individual vacation request dates at once (such as for public holidays)
- Request different types of time off, including holidays, PTO, bereavement, and potentially more
- Add a date range when planning multiple weeks of time off
- Update previous requests with additional information

Your API will work in concert with a frontend, so the API does not have to directly support every use case. However, you should expose the common use cases with the API and ideally make the task easy to perform with minimal API calls.

## Scope Out Potential Endpoints

Now that you have some use cases in mind for your vacation tracking API, you can start to design a potential implementation. One place to start is to consider the _resources_ within your API. Typically, these are nouns that can be used alongside HTTP verbs.

With our vacation tracking example, we know we have _employees_ and _time off_. From our use cases, we learned “vacation” is not always vacation. Sometimes an employee will be recording a public holiday, parental leave, or similar time you may want to track differently.

Since the time off is associated with a particular user, we’ll create new time off:
`POST /employee/{employee-id}/time-off`

You’ll need to pass some additional data in JSON. For example:

```
{
  "type": "vacation",
  "start_date": "2019-10-31",
  "end_date": "2019-11-01",
  "description": "Halloween 🎃”,
  "status": "requested"
}
```

A successful response would return a 201 status code with a `Location` header including the location of the time off request: `/employee/{employee-id}/time-off/{time-off-id}`

Some other endpoint/verb combinations:

- `GET /employee/{employee-id}/time-off` — list the employee’s time off
- `GET /employee/{employee-id}/time-off/{time-off-id}` — retrieve a specific time off request
- `PUT /employee/{employee-id}/time-off/{time-off-id}` — update a specific time off request
- `DELETE /employee/{employee-id}/time-off/{time-off-id}` — remove a specific time off request

There’s a lot of detail behind each of the API calls. What data needs to be sent and what do responses look like? What are potential non-200 status codes for each call?

This sort of API design is best stored as an [OpenAPI document](https://stoplight.io/api-design-guide/openapi). This machine-readable description, formerly known as Swagger, serves as a source of truth for the current design of your API. It can also be an artifact that you can use to discuss with the rest of your organization.

## Seek Feedback from Collaborators

Now that you have a draft design of your new API, you’ll want to circulate it with colleagues or external developers who will use it. If you haven’t already created an OpenAPI document, you can [build one visually](https://next.stoplight.io/) in Stoplight, which also lets you share with your team. Alternatively, you can upload your API description to GitHub and use a pull request for discussion.

![Collaborate during API design with comments](/images/discussions.gif)

For example, a frontend engineer on this project may suggest more data about the employee along with a time off request. They want to show the employee’s name and total vacation days used so far.

When you can see an API described before it is built, you’re able to notice changes while they’re easier to change. With an OpenAPI document, you can visualize the endpoints or even [generate mock servers](https://stoplight.io/mocking/) and run real requests against an imitation API.

You might discover through this collaborative review that approving time off requests via the API is difficult. A PUT request typically requires all the fields to be present. Only the status field needs to be updated when a manager approves time off. You’ll need to decide whether it makes sense to implement a PATCH request here.

There are plenty of areas for improvement in the API we’ve designed. When you collaborate on the design with others, you’ll be more likely to discover them early on.

## Build the API and Documentation

After some back and forth on [API design](https://stoplight.io/design/), you’ll have a first version declared in your OpenAPI document. Now as you build your API, you’ll know exactly the endpoints to create. Better yet, you know the data that should be returned and you have an [API contract to test against](https://stoplight.io/blog/what-is-api-testing/). In other words, you’ll know whether your API works the way you intended.

![Generate beautiful documentation from OpenAPI documents](/images/docs_header.png)

You can also use your OpenAPI definition to generate an API reference (and [not just static documentation](https://stoplight.io/blog/beyond-static-documentation/), either). Now anyone who needs to use your vacation request API, they’ll be able to quickly understand what is possible and how to integrate it into their application.
