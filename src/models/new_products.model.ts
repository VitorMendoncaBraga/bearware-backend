import { eq, getTableColumns } from 'drizzle-orm'
import {db} from '../db/drizzleConfig'
import { productTable, productVariantTable } from '../db/schema'

export async function findAllNewProducts(){
    const {name, ...rest} = getTableColumns(productVariantTable)
    const newProducts = await db.select({
        ...rest,
        productName: productTable.name,
        productDescription: productTable.description
    }).from(productVariantTable).innerJoin(productTable, eq(productTable.id, productVariantTable.product_id))
    return newProducts
}