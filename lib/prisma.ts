import { PrismaClient } from "@prisma/client";

declare global {
  // allow global `prisma` in dev
  var prisma: PrismaClient | undefined;
}

export const prisma: PrismaClient =
  global.prisma ??
  new PrismaClient({
    log: ["query"], // optional, helpful for debugging
  });

// Prevent multiple instances during hot reloads in development
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
