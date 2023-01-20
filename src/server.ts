import Fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

dotenv.config();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 3000,
    host: "0.0.0.0",
  })
  .then((address) => {
    console.log(`HTTP Server running on ${address}`);
  });
