---
path: /spectral-v4
tags:
  - blog
  - blog-featured
  - blog-design
relatedTags:
  - blog-design
publishedDate: 2019-07-11T00:19:11.840Z
author: Taylor Barnett
title: More Flexible JSON Linting with Spectral 4.0
subtitle: Ruleset improvements and more CLI focus provide a better experience
image: /images/dayne-topkin-cxruh7pmmsu-unsplash.jpg
color: purple-dark
tabs:
  - {}
includeToc: true
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
      href: 'https://github.com/stoplightio/spectral'
      outlined: false
      title: Get Started with Spectral
  enabled: true
  text: Do you want feedback on your API descriptions right now?
meta:
  description: Ruleset improvements and more CLI focus provide a better experience
  robots: 'index, follow'
  title: More Flexible JSON Linting with Spectral 4.0 | Stoplight API Corner
  image: /images/dayne-topkin-cxruh7pmmsu-unsplash.jpg
  twitter:
    description: Ruleset improvements and more CLI focus provide a better experience
    title: More Flexible JSON Linting with Spectral 4.0 | Stoplight API Corner
    image: /images/dayne-topkin-cxruh7pmmsu-unsplash.jpg
    username: '@stoplightio'
---
Since last March after our [release](https://stoplight.io/blog/introducing-spectral/) of Spectral, we have heard some amazing feedback from the community. There was one resonating topic, and that was around customization for each of your unique use cases. We listened closely and thanks to your feedback, we have released a brand new update that we would love to share with you.

Some of these updates include: 
- Using the CLI with multiple, custom rulesets
- New syntax for rulesets, including overriding rules and extending rulesets
- More friendly errors and warnings
- More options for documents and rules

We’re excited for you to [try](https://stoplight.io/spectral) them out!

## Use the CLI with multiple, custom rulesets

We found that most Spectral users would prefer to lint their documents from the command line, so we’ve added the ability to run Spectral with custom rulesets from the CLI. 

Rulesets are now a first class concept. In earlier versions, customizing Spectral with your own rules and functions used to require a very hands-on TypeScript approach. In our latest release, we have now introduced YAML rulesets which allow you to do the same thing without needing to know TypeScript.

```yaml
rules:
  my-rule-name:
    description: Tags must have a description.
    given: $.tags[*]
    severity: error
    then:
      field: description
      function: truthy
```

For example, if you have created a ruleset file called `company-ruleset.yaml`, you can run it on the CLI like this: 

```shell
spectral lint foo.yaml --ruleset=path/to/company-ruleset.yaml
```

You can also now run multiple rulesets like this:

```shell
spectral lint foo.yaml --ruleset=path/to/company-ruleset.yaml --ruleset=http://example.com/common-ruleset.yaml
```

You can read more on how to write your rules in YAML [on the documentation page](https://github.com/stoplightio/spectral/blob/master/docs/rulesets.md). 

## New syntax for rulesets, including overriding rules and extending rulesets

If you want to use all of the OpenAPI v2 ruleset, except specific rules, we’ve added syntax to make this possible in your ruleset file. In this example, we are turning off the `operation-operationId-unique` rule:

```yaml
extends: [[spectral:oas2, all]]
rules:
  operation-operationId-unique: false
```

You can see more docs on how to enable or disable rules [here](https://github.com/stoplightio/spectral/blob/master/docs/rulesets.md#enabling-specific-openapi-rules). We’ve added the ability to turn `all` of them on or `off` along with shorthand for OpenAPI v2 (`spectral:oas2`) and v3 (`spectral:oas3`). 

You can also change the severity of an existing OpenAPI rule now: 

```yaml
extends: spectral:oas2
rules:
  operation-2xx-response: warn
```

The example above will run the recommended rules from the `spectral:oas2` ruleset, but report `operation-2xx-response` as a warning rather than as an error (as is the default behavior in the `spectral:oas2` ruleset).

> Note: When extending rulesets and overriding a rule, rules are now merged.

Also, there is a new `message` property that was introduced in 3.x as a replacement for summary. You can compose your own message now. For example you create a message like this: 

`“{{property}}” is missing; error: {{error}}`

Which for example, would result in:

`"description" is missing; error: expected property to be truthy`

We also support `description`, which is a value of description you set on a rule definition.

## Improved errors and warnings

There were a few comments from the community opened that were related to vague messages from Spectral. To help improve this experience and provide more information to help you move faster, we've started using the [better-ajv-errors](https://github.com/atlassian/better-ajv-errors) library from Atlassian to make the messages more human readable. It should help reduce the noise and improve the quality of messages. 

## Human-readable severity levels

Spectral 4.x supports human-friendly naming for severity levels. Instead of cryptic numbers, you can provide a meaningful string, such as `warn`, `error`, or `off`. The new naming makes it easy to figure out whether validation message reported by a particular rule is considered as error, info or warn. 

## CLI resolves documents by default now

The Spectral CLI now resolves documents by default, including when you pass in URLs for external documents. You have a full control of resolver when using Spectral via JavaScript API.

## Linting external documents

Previously, Spectral did not perform any extensive checks on `$ref` properties, but now it reports errors and warnings for referenced files as they are actually an integral part of a processed document. So, for example, if your document references another document it will try to resolve and lint it by default now. For example, if you have this document: 

```json
{
  "swagger": "2.0",
  "info": {
    "$ref": "./info.json#/definitions/info"
  },
  "paths": {}
}
```

It will also lint the `info` definition in `info.json`: 

```json
{
  "$schema": "",
  "definitions": {
    "info": {
      "foo": "bar",
      "description": 0,
      "contact": {
        "name": "test"
      }
    }
  }
}
```

You will now see errors and warnings for `info.json`, which before 4.x you would not see, because Spectral is now linting external documents.

## Ability to skip rules

When we created the built-in OpenAPI rulesets, we knew some of them were a bit opinionated. We have heard some feedback that people would like to sometimes skip rules from the CLI while their team catches up to best practices. [Sreenivas Alapati](https://github.com/cg-cnu) created a pull request to add a command to the CLI to do so. For example, if you want to skip a rule called `skip-rule-name`, you could run this command:

```shell
spectral lint foo.yaml --skip-rule=skip-rule-name
```

But that’s not all! You can also now disable rules in your ruleset file too. This would make more sense if you are disabling many rules at once. 

Hopefully, you won’t be skipping too many rules though. 😉 

## New quiet flag

We heard from the community that a quiet flag would be useful. Before, you could choose to use the `--output` flag when using the Spectral CLI, but if you were running Spectral in a script, it made your script output still kind of messy because of all of the logging that Spectral can do. So we added a `--quiet` flag that will only show the results, not the logging, so you have more flexibility with the CLI.  

## Breaking changes

There’s a few breaking changes you might want to take note of if you have been using Spectral programmatically since 2.x (or 3.x) was released. 

First, `oas2/index.ts#rules()` is now async. We’ve updated examples in the documentation accordingly. 

Second, configuration files were briefly available in 3.x. These have been removed in 4.x. We definitely see the need to have more configuration (possibly in 5.x), but we want to work on a better approach. You can see some of the discussion around what it might look like in the future here if you are interested or have an opinion to share.

Third, we have removed the `--max-results` flag. Most users wanted to see all errors and warnings, not just a few, so it wasn’t that useful.  

Fourth, we have gone from using [jsonpath](https://www.npmjs.com/package/jsonpath) to [jsonpath-plus](https://www.npmjs.com/package/jsonpath-plus). This change only affects people who have written your own rulesets. The syntax is similar, but there are some nuances, mostly around special keywords, such as property, etc. You’ll notice all `jsonpath-plus` keywords start with `@`. Apart from those keywords, there should be no significant changes. 

Lastly, we have removed the obsolete `summary` property in rules. You should now use `message` or `description`.

## Thank yous

We wanted to give shouts to people who have submitted pull requests to the Spectral repo [TJ Miller](https://github.com/sixlive), [Arnaud Lauret](https://github.com/arno-di-loreto), [Lorna Jane Mitchell](https://github.com/lornajane), and [Sreenivas Alapati](https://github.com/cg-cnu).

Also, improvements to Spectral wouldn’t have been possible without feedback from [nulltoken](https://github.com/nulltoken), [Michael McDermott](https://github.com/michaeljmcd), [Sander van Beek](https://github.com/Lakitna), [Carlos Bautista](https://github.com/cbautista1002), [Cristiano Betta](https://github.com/cbetta), [Andrzej](https://github.com/jerzyn), [PeiSong](https://github.com/naivefun), and [Anastasia Popova](https://github.com/AnastasiaTW).
