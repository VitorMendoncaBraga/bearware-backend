
import Fastify from "fastify";
import type { FastifyRequestType } from "fastify/types/type-provider";
import { productsRoutes } from "./routes/product.routes";
import { productVariantRoutes } from "./routes/product_variant.routes";
import {fastifyCors} from '@fastify/cors'
import { categoryRoutes } from "./routes/category.routes";
import { newProductsRoutes } from "./routes/new_products.routes";
const app = Fastify();


app.register(productsRoutes)
app.register(productVariantRoutes)
app.register(categoryRoutes)
app.register(newProductsRoutes)
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
