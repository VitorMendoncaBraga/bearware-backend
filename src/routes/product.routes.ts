import type { FastifyInstance } from "fastify";
import { listAllProducts } from "../controllers/product.controller";

export function productsRoutes(fastify: FastifyInstance){
    fastify.get("/products", listAllProducts)
}