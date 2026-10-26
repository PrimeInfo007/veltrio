Configuring Segment to track lead events when a new user signs up.

## Step 1: Add Veltrio (Actions) destination

Head to [Segment Veltrio (Actions)](https://app.segment.com/goto-my-workspace/destinations/catalog/actions-dub) and add the destination to your Segment workspace.

![Segment Veltrio (Actions) destination](https://mintlify.s3.us-west-1.amazonaws.com/dub/images/conversions/segment/segment-actions.png)

## Step 2: Configure Veltrio API Key

In the Veltrio (Actions) destination settings, fill out the following fields:

- **Name:** Enter a name to help you identify this destination in Segment.
- **API Key:** Enter your Veltrio API key. You can find this in the [Veltrio Dashboard](https://app.veltrio.link/settings/tokens).
- **Enable Destination:** Toggle this on to allow Segment to send data to Veltrio.

Once completed, click **Save Changes**.

![Segment Veltrio (Actions) Basic Settings](https://mintlify.s3.us-west-1.amazonaws.com/dub/images/conversions/segment/segment-basic-settings.png)

## Step 3: Add Mapping

Next, you’ll choose the **Track a lead** action from the list of available actions.

By default, this action is configured to send lead data to Veltrio when the **Event Name** is **Sign Up**.

![Segment Veltrio (Actions) Mapping](https://mintlify.s3.us-west-1.amazonaws.com/dub/images/conversions/segment/segment-track-lead-action.png)

Below the selected action, you’ll see the mapping for that action.

![Segment Veltrio (Actions) Mapping](https://mintlify.s3.us-west-1.amazonaws.com/dub/images/conversions/segment/segment-track-lead-mapping.png)

You can customize the trigger and mapping to fit the specific needs of your application.

Finally, click **Next** and then **Save and enable** to add the mapping to the destination.

## Step 4: Send lead events to Veltrio

On the server side, you’ll use the `@segment/analytics-node` SDK to send lead events to Segment.

Make sure to include relevant user traits such as `name`, `email`, and `clickId` in the payload.

You’ll also need to ensure that the `clickId` field is properly mapped in your Segment Actions destination so that it’s forwarded correctly to Veltrio.

```javascript
import { Analytics } from "@segment/analytics-node";

const segment = new Analytics({
  writeKey: "<YOUR_SEGMENT_WRITE_KEY>",
});

const cookieStore = await cookies();
const clickId = cookieStore.get("dub_id")?.value;

segment.track({
  userId: id,
  event: "Sign Up",
  context: {
    traits: {
      name,
      email,
      avatar,
      clickId,
    },
  },
  integrations: {
    All: true,
  },
});
```

Once the event is tracked, Segment will forward the lead data to Veltrio based on the mappings you’ve configured.
