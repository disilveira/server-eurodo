import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";
import endpoints from "./lib/endpoints";

export async function appRoutes(app: FastifyInstance) {
  app.get("/magazines", async () => {
    const magazines = await prisma.magazine.findMany();

    return {
      fileUrl: endpoints.fileURL,
      coverUrl: endpoints.coverURL,
      data: magazines,
    };
  });
}
