import { relations } from "drizzle-orm";
import { boolean, integer, pgTable, primaryKey, text,timestamp,uuid, varchar } from "drizzle-orm/pg-core";


export const categoryTable = pgTable("category", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(), // tênis preto top das galaxias
    slug: text().notNull().unique(), // slug: tenis-preto-top-das-galaxias
    created_at: timestamp().defaultNow().notNull()
})

export const categoryRelations = relations(categoryTable, (params) => {
    return {
        products: params.many(productTable)
    }
})

export const productTable = pgTable("product", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(), // tênis preto top das galaxias
    slug: text().notNull().unique(), // slug: tenis-preto-top-das-galaxias
    description: text().notNull(),
    created_at: timestamp().defaultNow().notNull(),
    category_id: uuid().references(() => categoryTable.id, {onDelete: "set null"})
})

export const productsRelations = relations(productTable, (params) => {
    return {
        category: params.one(categoryTable, {
            fields: [productTable.category_id],
            references: [categoryTable.id]
        }),
        variants: params.many(productVariantTable)
    }
})





export const productVariantTable = pgTable("product_variant", {
    id: uuid().primaryKey().defaultRandom(),
    product_id: uuid().notNull().references(() => productTable.id, {onDelete: "cascade"}),
    name: text().notNull(),
    slug: text().notNull().unique(),
    created_at: timestamp().defaultNow().notNull(),
    price_in_cents: integer().notNull(),
    image_url: text().notNull(),
    color: text().notNull(),
    
})

export const productVariantRelations = relations(productVariantTable, (params) => {
    return {
        product: params.one(productTable, {
            fields: [productVariantTable.product_id],
            references: [productTable.id]
        })
    }
})

export const userTable = pgTable("user", {
                    id: text('id').primaryKey(),
                    name: text('name').notNull(),
 email: text('email').notNull().unique(),
 emailVerified: boolean('email_verified').$defaultFn(() => false).notNull(),
 image: text('image'),
 createdAt: timestamp('created_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
 updatedAt: timestamp('updated_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull()
                });

export const sessionTable = pgTable("session", {
                    id: text('id').primaryKey(),
                    expiresAt: timestamp('expires_at').notNull(),
 token: text('token').notNull().unique(),
 createdAt: timestamp('created_at').notNull(),
 updatedAt: timestamp('updated_at').notNull(),
 ipAddress: text('ip_address'),
 userAgent: text('user_agent'),
 userId: text('user_id').notNull().references(()=> userTable.id, { onDelete: 'cascade' })
                });

export const accountTable = pgTable("account", {
                    id: text('id').primaryKey(),
                    accountId: text('account_id').notNull(),
 providerId: text('provider_id').notNull(),
 userId: text('user_id').notNull().references(()=> userTable.id, { onDelete: 'cascade' }),
 accessToken: text('access_token'),
 refreshToken: text('refresh_token'),
 idToken: text('id_token'),
 accessTokenExpiresAt: timestamp('access_token_expires_at'),
 refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
 scope: text('scope'),
 password: text('password'),
 createdAt: timestamp('created_at').notNull(),
 updatedAt: timestamp('updated_at').notNull()
                });