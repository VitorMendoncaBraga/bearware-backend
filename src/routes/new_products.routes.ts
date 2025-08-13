import { FastifyInstance } from "fastify";
import { getAllNewProducts } from "../controllers/new_products.controller";

export function newProductsRoutes(fastify: FastifyInstance){
    fastify.get("/new-products", getAllNewProducts)
}