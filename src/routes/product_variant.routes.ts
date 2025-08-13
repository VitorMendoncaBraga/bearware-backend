import { FastifyInstance } from "fastify";
import { listAllProductsVariant } from "../controllers/product_variant.controller";

export async function productVariantRoutes(fastify: FastifyInstance){
    fastify.get("/products-variant", listAllProductsVariant)
}