---
path: /blog/rest-api-security
tags:
  - blog
  - blog-design
relatedTags:
  - blog-design
publishedDate: 2019-07-04T01:22:37.093Z
author: Chris Wood
title: REST API Security Design
subtitle: Implementing design-time security definitions using OpenAPI
image: /images/many-padlocks.jpg
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
  description: Implementing design-time security definitions using OpenAPI
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: REST API Security Design | Stoplight API Corner
  image: /images/many-padlocks.jpg
  twitter:
    description: Implementing design-time security definitions using OpenAPI
    title: REST API Security Design | Stoplight API Corner
    image: /images/many-padlocks.jpg
    username: '@stoplightio'
---
Any API developer worth their salt will tell you that your API, the service that implements it, and the product it delivers, are only as good as the security mechanisms that safeguard it. The security - or lack of it - of APIs has been covered many times in the press during the last 10 years. API providers must deliver the means for consumers of their APIs to understand the security mechanisms their API implements. One mechanism they can use is to define their security is their API specification document.

To this end, OpenAPI provides the means for REST API designers to create Security Scheme Objects that help them define - and developers understand - the security they implement for a given API. In this post, we'll cover these how these objects can be defined and applied.

## Defining REST API Security Scheme Objects
OpenAPI - and Swagger before it - allows API designers to add security definitions to their API specification. In OpenAPI this became the [Security Scheme Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#securitySchemeObject), which is defined as a Component object. The goal of this object is to describe the security requirements for a given operation. Whilst not a security silver bullet, these definitions allow API designers to communicate at least some of their design intentions in implementing a particular security approach.

The mechanisms supported by OpenAPI include the following:

* Basic Authentication
* API Key
* JWT Bearer
* OAuth 2.0 (with an optional OpenID Connect Discovery URL)

Note that there isn't a specific object for each of these types of security. The Security Scheme object incorporates optional properties that can be set or omitted depending on the required security mechanism. For example, a Basic Authentication definition - where a username and password are passed in the `Authorization` header - can be extremely simple:

```yaml
components:
  securitySchemes:
    BasicAuth:
      type: http
      scheme: basic
```


On the other hand, for an OAuth 2.0 definition, the object can be much more complex. OAuth definitions use an [OAuth Flows Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#oauthFlowsObject) to encapsulate each of the OAuth grant types the scheme supports. For example, the snippet below shows an OAuth scheme that supports the Authorization Code grant type, which is commonly used to allow users to delegate authority to an untrusted application without revealing their credentials:

```yaml
components:
  securitySchemes:
    OAuth:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://example.org/auth
          tokenUrl: https://example.org/token
          scopes:
            accountRead: Allows account data to be read
            accountWrite: Allows account data to be written
```

OpenAPI, therefore, provides the means to declare API security at design time. However, these Security Scheme Objects are meaningless unless they are applied to the operations the API provides.

## Applying Security to Operations
Applying the Security Scheme Objects to operations is fairly straightforward. They are applied to a given HTTP Method using the `security` property, which defines a list of the accepted security schemes. From our example above, applying Basic Authentication to the GET operation on an endpoint `/users/{userId}` might look like this:

```yaml
paths:
  /users/{userId}:
    get:
      parameters:
        - name: userId
          in: path
          required: true
          schema:
            type: string
      responses:
        200:
          description: Created
          content:
            application/json:
              schema:
                type: object
                properties:
                  FirstName:
                    type: string
                  LastName:
                    type: string
      security:
        - BasicAuth: []
```

The `security` property is a [Security Requirement Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#security-requirement-object), which is implemented as an array or arrays. For Basic Authentication, the array is left empty, but in our Authorization Code example, we'd add the scopes that are required for a client to access the endpoint:

```yaml
security:
  - OAuth:
    - accountRead
```

The array allows the designer to constrain the scopes for a given endpoint. This helps convey meaningful information to the API consumer when they create their client, ensuring it is reflective of the security model defined in the API. API providers (who are working API-first) can also benefit from the security model. When creating their implementation, they can use tools like [express-swagger-oauth-scopes](https://www.npmjs.com/package/express-swagger-oauth-scopes) to automate awareness of scopes into their server-side code, applying constraints to clients that correctly reflect the model defined in the model.

Finally, the fact that a Security Requirement Object is an array of arrays also means that API designers can specify multiple requirements for an endpoint. For example, we can combine the Basic Authentication and OAuth 2.0 examples (if we so choose, although this probably doesn't make sense) for a single operation:

```yaml
security:
  - BasicAuth: []
  - OAuth:
    - accountRead
```

The ability to combine requirements therefore gives the API designer a great deal of flexibility in how they specify the security for a given operation in their API. This is especially important for OAuth 2.0, where API providers might allow multiple grant types and scopes for a given endpoint, providing access based on both delegated authority from a user and application-level access. 

For example, we can extend the `OAuth` object to support the Client Credentials grant type:

```yaml
components:
  securitySchemes:
    OAuth:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://example.org/auth
          tokenUrl: https://example.org/token
          scopes:
            accountRead: Allows account data to be read
            accountWrite: Allows account data to be written
        clientCredentials:
          tokenUrl: https://example.org/token
          scopes:
            accountReadMetadata: Allows account data to be read
```

And then include the `accountReadMetadata` scope as a security requirement:

```yaml
Security:
  - BasicAuth: []
  - OAuth:
    - accountRead
    - accountReadMetadata
```

## Wrapping Up: What's Right for your API?
This post has covered the means by which OpenAPI makes it possible for API designers to provide design-time specifications of the security requirements for their REST API. This provides an API designer with tools to help specify and communicate, but ultimately they - and the organization they work for - must decide on the right security mechanisms for their product and its use cases. Moreover, the API specification document does nothing to onboard your API consumers from a security perspective, and this is, of course, a critical part of your offering as an API provider.

There are also cases where security requirements can only be expressed in your OpenAPI document using extension as a given mechanism - such as [Mutual TLS](https://github.com/OAI/OpenAPI-Specification/issues/1004) - is not currently supported. In such cases, providing the requisite support via your developer experience - in the form of documentation, how-tos and so on - is as important as expressing the security requirements at design-time, with onboarding support being equally critical.

Including these security requirements in the REST API specification document is therefore only one small part of the puzzle; effective decision making, a good design and a robust, secure implementation are must-haves for your API. By extension, these factors will also improve the API's security and impact the potential success of the product it delivers.
