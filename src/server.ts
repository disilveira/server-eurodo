import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 3000,
    host: "0.0.0.0",
  })
  .then((address) => {
    console.log(`HTTP Server runnin on ${address}`);
  });
