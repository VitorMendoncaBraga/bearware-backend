import type { FastifyRequest, FastifyReply } from "fastify";
import { getAllProductsVariant } from "../models/productVariantModel";

export async function listAllProductsVariant(req: FastifyRequest, reply: FastifyReply){
    try{
        const allProductsVariant = await getAllProductsVariant()
        return reply.code(200).send(allProductsVariant)
    }
    catch{
        return reply.code(500).send("Internal server error")
    }
}