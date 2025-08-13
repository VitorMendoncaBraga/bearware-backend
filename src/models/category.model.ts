import { db } from "../db/drizzleConfig";

export async function getAllCategories(){
    const categories = await db.query.categoryTable.findMany()
    return categories
}