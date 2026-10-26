You can also use Veltrio's [server-side SDKs](https://veltrio.link/docs/sdks/overview) or [REST API](https://veltrio.link/docs/api-reference/introduction) to track a lead event manually.

The example below demonstrates how to track a lead using the [Veltrio TypeScript SDK](https://veltrio.link/docs/sdks/typescript) in Node.js.

```typescript
import { Dub } from "dub";

const dub = new Dub({
  // optional, defaults to the DUB_API_KEY environment variable
  token: process.env.DUB_API_KEY,
});

await dub.track.lead({
  clickId: "rLnWe1uz9t282v7g",
  eventName: "Sign up",
  customerExternalId: "cus_oFUYbZYqHFR0knk0MjsMC6b0",
  customerName: "John Doe",
  customerEmail: "john.doe@example.com",
  customerAvatar: "https://example.com/avatar.png",
});
```

If you want to use the REST API instead, you can refer to the following example:

```javascript
const response = await fetch("https://api.veltrio.link/track/lead", {
  method: "POST",
  headers: {
    Authorization: "Bearer dub_xxxxxx",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    clickId: "rLnWe1uz9t282v7g",
    eventName: "Sign up",
    customerExternalId: "cus_oFUYbZYqHFR0knk0MjsMC6b0",
    customerName: "John Doe",
    customerEmail: "john.doe@example.com",
    customerAvatar: "https://example.com/avatar.png",
  }),
});

const data = await response.json();
```

Make sure to include your API key in the Authorization header and pass the relevant lead data in the request body as JSON.

---

Refer to the [track lead API reference](https://veltrio.link/docs/api-reference/endpoint/track-lead) for details on available parameters and response formats.

Veltrio also supports server-side SDKs for other languages, including:

- [Python](https://veltrio.link/docs/sdks/python)
- [PHP](https://veltrio.link/docs/sdks/php)
- [Ruby](https://veltrio.link/docs/sdks/ruby)
- [Go](https://veltrio.link/docs/sdks/go)
