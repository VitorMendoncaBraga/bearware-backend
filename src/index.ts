import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { userTable } from './db/schema';
import { eq } from 'drizzle-orm';
export const db = drizzle(process.env.DATABASE_URL!);

async function main(){
    await db.delete(userTable).where(eq(userTable.email, "teste@gmail.com"))
    console.log("Usuário deletado!")
}

main()