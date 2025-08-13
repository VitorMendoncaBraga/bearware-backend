import { getAllCategories } from "../models/category.model";
import type { FastifyRequest, FastifyReply } from "fastify";

export async function GetAllCategories(req: FastifyRequest, reply: FastifyReply){
   try{
     const categories = await getAllCategories();
     reply.code(200).send(categories)
   }
   catch(error){
    reply.code(500).send({message: "Internal server error"})
   }

}