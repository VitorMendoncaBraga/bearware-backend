import type { FastifyReply, FastifyRequest } from "fastify";
import { findAllNewProducts } from "../models/new_products.model";

export async function getAllNewProducts(req: FastifyRequest, reply: FastifyReply){
    try{
        const newProducts = await findAllNewProducts()
        reply.code(200).send(newProducts)
    }
    catch{
        reply.code(500).send("Internal server error")
    }
}