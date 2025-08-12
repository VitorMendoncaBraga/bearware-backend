
import Fastify from "fastify";
import type { FastifyRequestType } from "fastify/types/type-provider";
import { productsRoutes } from "./routes/productRoutes";
import { productVariantRoutes } from "./routes/productVariantRoutes";
import {fastifyCors} from '@fastify/cors'
const app = Fastify();

app.get("/", (req: FastifyRequestType, reply: any) => {
  return "Hello World!";
});

app.register(productsRoutes)
app.register(productVariantRoutes)
app.register(fastifyCors)

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
