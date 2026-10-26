import { createDocument } from "zod-openapi";
import { webhookEventSchema } from "../webhook/schemas";
import { DiscountCodeSchema } from "../zod/schemas/discount";
import { DomainSchema } from "../zod/schemas/domains";
import { FolderSchema } from "../zod/schemas/folders";
import { LinkErrorSchema, LinkSchema } from "../zod/schemas/links";
import { LinkTagSchema } from "../zod/schemas/tags";
import { analyticsPath } from "./analytics";
import { bountiesPaths } from "./bounties";
import { commissionsPaths } from "./commissions";
import { customersPaths } from "./customers";
import { discountCodesPaths } from "./discount-codes";
import { domainsPaths } from "./domains";
import { embedTokensPaths } from "./embed-tokens";
import { eventsPath } from "./events";
import { foldersPaths } from "./folders";
import { linksPaths } from "./links";
import { partnersPaths } from "./partners";
import { payoutsPaths } from "./payouts";
import { programApplicationsPaths } from "./program-applications";
import { qrCodePaths } from "./qr";
import { openApiErrorResponsesComponents } from "./responses";
import { tagsPaths } from "./tags";
import { trackPaths } from "./track";

export const document = createDocument({
  openapi: "3.0.3",
  info: {
    title: "Veltrio API",
    description:
      "Veltrio is the modern link attribution platform for short links, conversion tracking, and affiliate programs.",
    version: "0.0.1",
    contact: {
      name: "Veltrio Support",
      email: "support@veltrio.link",
      url: "https://veltrio.link/support",
    },
    license: {
      name: "AGPL-3.0 license",
      url: "https://github.com/dubinc/dub/blob/main/LICENSE.md",
    },
  },
  servers: [
    {
      url: "https://api.veltrio.link",
      description: "Production API",
    },
  ],
  paths: {
    ...linksPaths,
    ...analyticsPath,
    ...eventsPath,
    ...tagsPaths,
    ...foldersPaths,
    ...domainsPaths,
    ...trackPaths,
    ...customersPaths,
    ...partnersPaths,
    ...programApplicationsPaths,
    ...discountCodesPaths,
    ...commissionsPaths,
    ...payoutsPaths,
    ...embedTokensPaths,
    ...qrCodePaths,
    ...bountiesPaths,
  },
  components: {
    schemas: {
      LinkSchema,
      LinkTagSchema,
      FolderSchema,
      DomainSchema,
      DiscountCodeSchema,
      webhookEventSchema,
      LinkErrorSchema,
    },
    securitySchemes: {
      token: {
        type: "http",
        description: "Default authentication mechanism",
        scheme: "bearer",
        "x-speakeasy-example": "DUB_API_KEY",
      },
    },
    responses: {
      ...openApiErrorResponsesComponents,
    },
  },
});
