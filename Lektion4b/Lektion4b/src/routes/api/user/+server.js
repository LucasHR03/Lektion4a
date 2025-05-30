import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema.js';
import bcrypt from 'bcryptjs';

export async function POST({ request }) {
    const { username, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with bcrypt
    const createdUser = await db.insert(user).values({ username, password: hashedPassword }).returning();
    return new Response(JSON.stringify(createdUser), {status: 201}); // HTTP created
}