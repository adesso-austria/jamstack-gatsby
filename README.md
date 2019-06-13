# JamStack-Gatsby

## Introduction

As preparation for a tech talk hosted by adesso Austria, this gatsbyjs project represents a blog backed up by a headless CMS system. It should give developers familiar with NodeJS-powered frameworks an overlook about what the **JamStack** can do. It is powered by [gatsby](https://gatsbyjs.org).

You should also make yourself familiar with [GraphQL](https://graphql.org/).

## How to run/develop/build

### Prerequisites

You need the following tools installed on your system.

- nodeJS [>= 10.15.3]
- gatsby-cli [>= 2.5.12]

### Setup

```shell
yarn install
```

### Develop

```shell
yarn start
```

### Build

```shell
yarn run build
```

## Libraries/Frameworks used

### Gatsbyjs specific plugins

- gatsby-source-filesystem | to source content from your local filesystem
- gatsby-plugin-sass | to natively use *sass*/*scss*
- gatsby-transformer-remark | to transform your Markdown content into html
- gatsby-source-instagram | to fetch instagram posts
- gatsby-plugin-sharp | to fetch images in a custom resolution
- gatsby-transformer-sharp | to transform the image depending on screen-size (and many more options
- gatsby-plugin-zopfli | to enable gZip compression
- gatsby-plugin-manifest | to make it a PWA
- gatsby-plugin-sw | to enable service worker
- gatsby-plugin-offline | to make the site available offine

### Other libraries

- gatsby-image

Provides an **Img** tag we use for our scaled images

- node-sass

The node sass parser
