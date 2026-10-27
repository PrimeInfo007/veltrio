import { connect } from "@planetscale/database";
import { prisma } from "../prisma";

type ExecuteResult<T> = { rows: T[] };

// Minimal stand-in for the PlanetScale HTTP driver that runs queries over the
// regular Prisma MySQL connection. Used when PLANETSCALE_DATABASE_URL is not
// set, e.g. on hosts with a plain MySQL database (Hostinger).
const mysqlConn = {
  async execute<T = Record<string, unknown>>(
    query: string,
    args: unknown[] = [],
  ): Promise<ExecuteResult<T>> {
    if (/^\s*(select|show|with)\b/i.test(query)) {
      const rows = await prisma.$queryRawUnsafe<Record<string, unknown>[]>(
        query,
        ...args,
      );
      // PlanetScale returns plain numbers; Prisma returns BigInt for counts/sums
      return {
        rows: rows.map((row) =>
          Object.fromEntries(
            Object.entries(row).map(([k, v]) => [
              k,
              typeof v === "bigint" ? Number(v) : v,
            ]),
          ),
        ) as T[],
      };
    }
    await prisma.$executeRawUnsafe(query, ...args);
    return { rows: [] };
  },
};

export const conn = process.env.PLANETSCALE_DATABASE_URL
  ? connect({ url: process.env.PLANETSCALE_DATABASE_URL })
  : mysqlConn;
