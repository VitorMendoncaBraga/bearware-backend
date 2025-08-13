import type { FastifyRequest, FastifyReply } from "fastify";
import { getAllProducts } from "../models/product.model";

export async function listAllProducts(req: FastifyRequest, reply: FastifyReply){
    try{
        const allProducts = await getAllProducts()
        reply.code(200).send(allProducts)
    }
    catch{
        reply.code(500).send("Internal server error")
    }
}