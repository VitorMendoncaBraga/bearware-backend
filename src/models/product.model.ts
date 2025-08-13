import { productTable } from "../db/schema"
import {db} from "../db/drizzleConfig"

export async function getAllProducts(){
    const allProducts = await db.query.productTable.findMany({
        with: {
            variants: true,
            category: true
        }
    })
    return allProducts
}