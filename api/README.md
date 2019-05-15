# API

Backend for blogGatsbyJS made with [strapi](https://strapi.io) 3.0.0@alpha.

The demo blog comes with a content type *blog*, the picture-entity is a representation of the media type that strapi ships with.

## Interfaces

```typescript
interface Blog {
  id: number
  title: string
  content: string
  published: boolean
  gallery: Picture[]
  created_at: number
  updated_at: number
}
```

```typescript
interface Picture {
  id: number
  name: string
  hash: string
  sha265: string
  ext: string
  mime: string
  size: string
  url: string
  provider: string
  public_id: string
  created_at: number
  updated_at: number
}
```

### Setup & Startup

```shell
clear && yarn install && yarn start
```
