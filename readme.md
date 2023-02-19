### How to Create Serverless Functions

1. [x] Create netlify.toml file
2. [x] Create Functions directory
3. [x] Install netlify cli as dev dependencies
4. []

## URL

http://localhost:8888/.netlify/functions/1-hello
[rootURL]/.netlify/functions/1-hello

## netlify.toml

- tell netlify where functions are located

```js
[build];
functions = "./functions";
```

- add reddirects

```js
[[redirects]];
from = "/api/*";
to = "/.netlify/functions/:splat";
```

- after reddirects url looks like "/api/1-hello"

## Comunicate with Airtable

- Package `airtable-node`

```js
const airtable = new Airtable({ apiKey: "YOUR_API_KEY" })
  .base("YOUR_ID_BASE")
  .table("YOUR TABLE NAME");
```

-

## Method of airtable

- airtable.list()
- ```js
  const { records } = await airtable.list();
  ```

```

```

- airtable.retrieve()

```js
const { records } = await airtable.list();
```
