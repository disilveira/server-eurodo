import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";

export async function appRoutes(app: FastifyInstance) {
  app.get("/magazines", async () => {
    const magazines = await prisma.magazine.findMany();
    return magazines;
  });
}
