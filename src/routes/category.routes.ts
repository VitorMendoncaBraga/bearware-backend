import { FastifyInstance } from "fastify";
import { GetAllCategories } from "../controllers/categories.controller";

export function categoryRoutes(fastify: FastifyInstance){
    fastify.get("/categories", GetAllCategories)
}