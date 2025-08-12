import type { FastifyInstance } from "fastify";
import { listAllProducts } from "../controllers/productController";

export function productsRoutes(fastify: FastifyInstance){
    fastify.get("/products", listAllProducts)
}