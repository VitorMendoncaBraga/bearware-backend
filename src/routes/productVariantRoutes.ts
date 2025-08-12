import { FastifyInstance } from "fastify";
import { listAllProductsVariant } from "../controllers/productVariantController";

export async function productVariantRoutes(fastify: FastifyInstance){
    fastify.get("/products-variant", listAllProductsVariant)
}