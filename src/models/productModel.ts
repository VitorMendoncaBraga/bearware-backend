import { productTable } from "../db/schema"
import {db} from "../db/drizzleConfig"

export async function getAllProducts(){
    const allProducts = await db.select().from(productTable)
    return allProducts
}