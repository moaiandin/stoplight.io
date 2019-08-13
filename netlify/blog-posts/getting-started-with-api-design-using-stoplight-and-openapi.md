---
path: /blog/getting-started-with-api-design-using-stoplight-and-openapi-90fc8f37ac2e
tags:
  - blog-design
  - blog
  - blog-featured
relatedTags:
  - blog-design
publishedDate: 2018-08-02T18:47:13.396Z
author: Lukas Rosenstock
title: Getting Started with API Design using Stoplight and OpenAPI
subtitle: So you've got a new project!
image: /images/api-design-stoplight-openapi.jpeg
color: blue
disqus:
  enabled: true
actionBar:
  ctas:
    - color: purple
  enabled: false
meta:
  description: So you've got a new project!
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Getting Started with API Design | Stoplight API Corner
  image: /images/api-design-stoplight-openapi.jpeg
  twitter:
    description: So you've got a new project!
    title: Getting Started with API Design | Stoplight API Corner
    image: /images/api-design-stoplight-openapi.jpeg
    username: '@stoplightio'
---

Photo by Scott Webb on Unsplash

So you’ve got a new API project! You have read [my last post about the importance of API design](/blog/openapi-and-design-first-principles-96e7c4b2aec1) and how you shouldn’t generate OpenAPI design from code, have listened to other API experts, or possibly have even been burned from previous experience with bad API design. Therefore, you have decided to go ahead with a design-first approach for this new project. Still, you are not quite sure how to start. This article will be your guide.

First, we’ll look at the API lifecycle, the importance of API design, and the API design flow. We’ll also talk about the basic building blocks of an API and how the OpenAPI Specification supports them. Then, we’ll build a minimal example API from scratch using Stoplight’s visual editor. We’ll regularly peek under the hood as well to gain an understanding of what the generated OpenAPI file looks like so you’ll find your way around OpenAPI if you should ever need to edit it manually.

## API Lifecycle

The API lifecycle is the journey from the first steps of building an API towards deployment, production use, and eventual sunsetting. One visualization of this lifecycle is the [API Transit Map](http://basics.apievangelist.com/) developed by Kin Lane ([API Evangelist](https://blog.apievangelist.com/)). The transit starts with definitions even before design, wherein definitions here mean specifying the ideas and goals from a business perspective while also considering industry standards when it comes to the implementation. If you’re serious about your API as a product, the what and why must happen before the how. You need to identify your potential customers and understand their needs to incorporate them into your design.

## API Design

The approaches to API and user interface design are quite similar. You can likewise start by gathering all stakeholders for an informal discussion around a whiteboard or build paper prototypes. Stakeholders to include are:

- API Developers

- Potential API Consumers

- Product Managers

- Technical Writers

The earlier you bring everyone onboard, the easier it is to fix mistakes which can later be costly. Since it’s probably difficult to get all stakeholders into the same room every time it’s imperative to move on to the API definition as soon as possible. This way, you have an asset which can be viewed by everyone asynchronously. If you use Stoplight, you can invite the whole team to your project so that they can be a part of the entire process.

## API Building Blocks

An API is composed of multiple building blocks. You’ll have some necessary metadata, such as your API endpoint URL, authentication, and security configuration. You also need to decide about the data serialization format, which is typically JSON, a first-class citizen in OpenAPI, but sometimes you may consider alternative formats such as XML or CSV as well.

The central parts of API design, however, are schema definitions and operation paths. Schema definitions, or models, describe the structure and semantics of JSON objects used as responses or request bodies in API requests. Operation paths are the URLs and methods that consumers of the API can call.

Many APIs follow a CRUD style, in which you have schema definitions of domain objects and paths and methods that correspond with Create, Read, Update and Delete operations for each of them. The models exposed on the API are often similar to the domain models used in internal software design or database tables. However, it’s not recommended to map them one-to-one. You should think about a structure that makes sense from the consumer’s perspective instead.

## Getting Started

Enough theory at this time, it’s time to get our hands dirty!

**The Scenario: Provide access to appointments stored in a simple calendar app.**

The first steps:

1. Log in to Stoplight and choose to create a new project under _Personal Projects_ or in an organization you belong to.

1. Provide a name, path, optional summary and set your visibility.

1. Click **Create Project**.

![](https://cdn-images-1.medium.com/max/800/0*kvNQP4JtnekIbH_p)

When the project loads, you’ll already see two files listed under _Modeling_. As we want to practice building an API from scratch, you can remove these files:

1. Click on the trashcan icon which appears once you move the mouse pointer over the filename.

1. Confirm deletion.

1. Repeat for other files.

1. Point to _Modeling_ and click the plus icon to add a new file.

1. Call it _calendar_.

1. Click **Create** to confirm.

![](https://cdn-images-1.medium.com/max/800/0*AZSQin3y6fegNEUE)

Stoplight’s OpenAPI editor has [multiple tabs](https://docs.stoplight.io/platform/editor-basics/read-design-code-view):

- _Read_ shows you a read-only view of your designed API and gives you a good idea what the documentation could look like.

- _Design_ allows you to build the specification in the visual editor.

- _Code_ shows you the raw OpenAPI Specification.

- _HTTP_ enables you to formulate API requests for testing.

On the left panel of the editor, which is visible in both _Design_ and _Code_ tabs, you can see the typical sections of an OpenAPI file which correspond to the building blocks we discussed earlier.

Let’s get started with basic settings:

1. Make sure you’re on the _Design_ tab.

1. Click on **Home** to specify the basics of your new API.

1. You can give it a title and description.

1. This is also where you would set the API host and path, but since our sample API is fictitious (for now), you can leave the default values.

1. Under _Global Settings,_ you should choose _application/json_ under both request and response mime types to indicate that your API uses JSON models.

1. _[Security](https://docs.stoplight.io/modeling/modeling-with-openapi/security-schemes)_, again, is of utmost importance for a real-world API but irrelevant for our example, so you don’t have to set anything here.

![](https://cdn-images-1.medium.com/max/800/0*PBoJilHdaLgz3m1I)

## Create a Model

We’ll start work on the _Design_ tab and create a model first:

1. Click the plus sign that appears next to _[Models](https://docs.stoplight.io/modeling/modeling-with-openapi/api-models)_ as you hover over it.

1. Enter the string “appointment” as the key and, optionally, add a suitable title and description to it. As we want to build a calendar API, an appointment is an appropriate model.

1. Similar to the tabs on the primary editor, there are also different tabs to look at or define the model. Switch to _Editor_ now.

1. Click the plus sign next to object to add a field. Each field has a name, or key, a datatype, optional validations and can be marked required or not. Datatypes are native JSON types whereas validations can be used to enforce constraints or formats on data that doesn’t have a native JSON type, for example, a date and time string.

1. For our calendar appointments, define the following fields with the Editor: id, an _integer_; title, a _string_; start*dt, a \_string* with _date-time_ format; end*dt, a \_string* with _date-time_ format.

1. While adding the fields, pay attention to the fact that you can select multiple types and _string_ is the default type. Because of this, you may have to deselect the _string_ type when selecting _integer_, for example.

1. After adding all fields, have a look at the _Viewer_ and _Raw Schema_ tabs. In _Raw Schema_, you can see the definition of an object with various properties.

1. Change the main tab to _Code_. You’ll see that your model appears in a subsection of the OpenAPI file called definitions.

Congratulations, your first model is ready!

![](https://cdn-images-1.medium.com/max/800/0*UaxafTMqkB_fuNha)

> By the way, did you know OpenAPI borrows from another open standard, [JSON Schema](http://json-schema.org/), for the definition of models?! (There are minor details between JSON Schema and OpenAPI models when it comes to advanced features.) Check out some JSON best practices in Stoplight [here](https://docs.stoplight.io/modeling/json-best-practices/introduction).

## Create Paths

In a CRUD- or RESTful-style API, the best practice for URL design is using pluralized model names and adding identifiers in the path.

Using this approach, the paths to define for our model would be the following:

- GET /appointments/{id}, to receive a single appointment based on its ID

- GET /appointments, to receive a list of appointments

- POST /{appointments}, to add a new appointment

- PUT or PATCH /appointments/{id}, to update an appointment

- DELETE /appointments/{id}, to delete an appointment

Let’s walk through two of them, starting with the first:

1. Go back to _Design_ and click on the plus sign that appears when you hover over _Paths_.

1. Choose GET and enter /appointments/{id}. Note the curly braces, which indicate that id is a placeholder for the ID.

1. You can add a quick summary and, under _Basics_, a longer description to make it easy for consumers to understand the purpose of this operation.

1. Other settings under _Basics_ are not required so you can leave them blank or keep their default values.

1. Scroll down to the _Request_ section.

1. Open _Path Parameter_ and choose **Add**. Even though the id was already visible on the path, you should add it here explicitly so you can specify the type, which would be an _integer_.

1. Scroll down to the _Responses_ section. In OpenAPI you can specify multiple responses for each operation, one for each HTTP status code. This way you can document both success and error responses.

1. One 200 response is already defined. You can add an optional description here.

Below Headers, which we won’t specify here, you’ll see something that looks strangely familiar — the model editor! Does this mean you have to define your model again?! Of course not. But you can design the format of your response which may include some data in addition to the model. We don’t need this here, so all we have to do is add a reference to the model we created earlier:

1. Go to the _Editor_ tab, click on _noType_ and choose _\$ref_ as the type.

1. Click on the target search box, where you’ll be able to select your _appointment_ model.

![](https://cdn-images-1.medium.com/max/800/0*DoWJHDkJ2zNJ-G0X)

In the _Viewer_ tab, Stoplight resolves the reference to the model, so you’ll see the fields you defined earlier.

Yay, your first operation is complete!

![](https://cdn-images-1.medium.com/max/800/0*2lo9yL4D_qJpjOz7)

Let’s move over to the _Code_ tab again to see the generated OpenAPI file. As you can see, the path and method with all the attributes you’ve added appear in a subsection of the file called _paths_. Take a look at the schema for the response. The \$ref key has a value that starts with # and a pointer to a location somewhere else in the file; in this case, your model. References are a powerful feature in OpenAPI because they make it easier to define certain aspects of your API once and reuse them wherever you need.

![](https://cdn-images-1.medium.com/max/800/0*eIucs-SmnwXPssU3)

Now add your second operation:

1. Move back to the _Design_ tab and add an operation as previously shown.

1. Choose GET and enter /appointments. This time, no request parameters are necessary.

1. Scroll down to the _Responses_ section immediately and open the _Editor_ tab for the schema.

1. Make the primary type an _object_. You could use an _array_, too, however returning JSON arrays from responses is discouraged because there are a few security issues with them.

1. Add an attribute to the object, and provide a key such as _results_.

1. Change the type for the results from _string_ to _array_.

1. You can define a type for the elements in the array. Click on _\$ref_ and choose your appointment model, since you’ll be returning a collection of appointments.

![](https://cdn-images-1.medium.com/max/800/0*u8gEzIFMCu6G6qTW)

Now would be a good time to look at your work in the way that potential developers will see it. Switch over to the _Read_ tab and browse around the documentation. Try to approach it from a newcomer’s perspective and evaluate whether it all makes sense. You can always go back to the _Design_ and _Code_ tabs to make more edits.

![](https://cdn-images-1.medium.com/max/800/0*rdCW7DfZ147l5k_Z)

Once you’re happy with what you see, click the **Save** button next to the tabs to store your work. Your Stoplight projects work like code repositories (and not like, let’s say Google Docs), which means you have to state when you want to commit your changes explicitly, and you can even provide a comment for the changelog.

That’s enough for today. To recap, you just created your (first?) OpenAPI definition with one model and two paths. You were able to do everything within Stoplight’s visual editor, but you have also seen how the definition looks under the hood. You can take it from here extending your API further. Happy designing!
