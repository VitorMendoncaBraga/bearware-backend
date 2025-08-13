import { db } from "../db/drizzleConfig";
import { productVariantTable } from "../db/schema";

export async function getAllProductsVariant(){
    const allProductsVariant = await db.select().from(productVariantTable)
    return allProductsVariant
}