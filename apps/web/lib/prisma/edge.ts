import { Client } from "@planetscale/database";
import { PrismaPlanetScale } from "@prisma/adapter-planetscale";
import { PrismaClient } from "@prisma/client";

// Use the PlanetScale HTTP adapter when a PlanetScale URL is configured,
// otherwise a regular MySQL connection (e.g. Hostinger MySQL)
export const prismaEdge = process.env.PLANETSCALE_DATABASE_URL
  ? new PrismaClient({
      adapter: new PrismaPlanetScale(
        new Client({ url: process.env.PLANETSCALE_DATABASE_URL }),
      ),
    })
  : new PrismaClient();
