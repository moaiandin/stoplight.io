---
path: /blog/api-documentation-team
tags:
  - blog
  - blog-documentation
relatedTags:
  - blog-documentation
publishedDate: 2019-06-06T23:25:44.474Z
author: Kyle Lange
title: Should You Have an API Documentation Team?
color: black
tabs:
  - {}
includeToc: true
disqus: {}
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  robots: 'index, follow'
  twitter: {}
---
Developers building APIs have to consider a lot more than the technical needs of the project. Increasingly, they're working with a diverse section of people, both internally and externally. In addition to creating a useful product, they need API documentation to keep up. Lukas Rosenstock wrote about [collaboration in API design](https://stoplight.io/blog/openapi-and-design-first-principles-96e7c4b2aec1/):

> “Dedicated API architects write a specification and all the stakeholders, from developers to product managers and external consumers, are involved in the process. APIs are products, so they need to consider not only the technical but also the business and legal concerns.“ 

Naturally, companies began to consider the thoughts and ideas of the same players to provide the best experience for the user looking for guidance from the documentation. It now needs to grow in organization, efficiency, and adaptability throughout the different versions of its life-cycle.  Creating a team of people focused on those improvements is a good idea for many companies, large and small.  

This post should give you the first step toward an organizational framework to help you keep your docs useful.


## Make a Professional Learning Community

A [Professional Learning Community](https://sites.google.com/site/proflearncommunities/) (PLC) is an idea that emerged as a best practice for teachers at highly effective grade schools and universities.  The premise is simple; a PLC is a group of people who meet consistently at the same time in the same place to:

- Share ideas
- Find data and seek out feedback from interested groups to inform improvements in content
- Develop research towards a common goal; in our case, the development of informative and easy-to-use API documentation for new features of the API as it changes and grows. 

Assign a point person for the PLC to lead meetings,  make sure each of the three main bullet points above are hit every meeting; check that all tasks for a future meeting have been delegated to other group members; and help make each delegated task quantifiable. 

To have a dedicated person assigned to this task as a part of their job description (or as a position in and of itself) shows a company’s commitment to making docs that work and value consistently monitoring what their audience needs from them.  Once you have decided on this model and your dedicated team/person, the first step in the work itself is to know what to DO together.  


## Consistency Matters: Always Share Ideas Through Questioning

Now that you have a point person to lead the PLC, they should focus on providing the legwork needed to reach a consistently productive meeting. This person should consider whether reference, guides, and examples are as complete as they should be. Are there areas of the API that aren’t covered well in one or more types of documentation? Use these questions below to determine where to focus future efforts:

- What documentation do we need to write for what we currently have?  
- What examples/use cases are we missing?
- What do we hear works for most users?
- What is consistently confusing to most users/needs frequent follow-up questions?
- What should be the next section we expand/iterate on?
- Do we need to change these questions?

[Stoplight API design guidelines](https://stoplight.io/api-design-guide/basics/) are a best practice on creating the documents as you develop the API code, similar to Behavior Driven Development. So, whether your PLC is writing docs as you create your API, or your PLC is tasked with looking to improve documentation for an API that currently exists, this guide may be helpful in finding holes in your documentation that frustrate users.  

Your PLC may be writing your API docs as you write the API itself.  Your PLC may be tasked with improving documentation that already exists.  These guidelines will be helpful in finding holes in your documentation.

## Use Feedback to Make Improvements in Your Documentation

Often to answer the questions above, you will need user data; hence PLC’s should gather user feedback.  Useful feedback could internal or external.  Effective practices could include:

- Running through each other’s code examples and tutorials that each of your members did not take part in creating.
- Consider an automation process for your docs

When running through each other’s examples in the documentation to find flaws, never forget that internal devs are users too!  Use each other as the test group.  The most effective teams leverage what tools they have over lamenting those they don’t.  If the internal feedback loop is too strong or feedback from users is hard to come by formally, meetups or hackathons (even internally) may get new users into your API and documentation space so you can see what works and what doesn’t over time.

Someone on the team needs to consider Continuous Integrations/Continuous Delivery (CI/CD) so that as API code gets redefined, the documents do as well. Systems based on OpenAPI (and previously Swagger) are becoming more prevalent as users expect more from your documentation. Whatever system you choose for your documentation, it is important to track and update any processes within your docs to accurately reflect the API in its current state. The _[API Documentation Guide](https://stoplight.io/api-documentation-guide/basics/)_ offers tips for structuring and generating high quality documentation.

* * *

To sum up, API documentation should evolve on a path alongside your API code, which is easier said than done. Your API docs might benefit from a dedicated PLC team willing and able to meet consistently to use their own wonderings on design best-practices, user data, research for future growth, and consider CI/CD and/or automation best practices.  All three of these practices will falter without actionable, trackable goals.  So that the PLC team can see success, support each other as ideas get larger than originally anticipated, or need to change course, that team might benefit from a person whose job it is to find and assign tasks for the rest of the PLC team to do to make your company’s API documentation the best it can be for internal and external users alike.

