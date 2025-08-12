
import Fastify from "fastify";
import type { FastifyRequestType } from "fastify/types/type-provider";
import { productsRoutes } from "./routes/productRoutes";

const app = Fastify();

app.get("/", (req: FastifyRequestType, reply: any) => {
  return "Hello World!";
});

app.register(productsRoutes)

async function main() {
  try {
    await app.listen({
      port: 3333,
    });
    console.log("Servidor rodando na porta 3333");
  } catch (error) {
    app.log.error(error);
  }
}

main()
