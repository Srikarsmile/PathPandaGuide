import { db } from "./db";
import { users } from "@shared/schema";
import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";
import { eq } from "drizzle-orm";

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function seedAdmin() {
  try {
    // Check if admin user already exists
    const [existingAdmin] = await db
      .select()
      .from(users)
      .where(eq(users.role, "admin"));
    
    if (existingAdmin) {
      console.log("Admin user already exists:", existingAdmin.username);
      return;
    }
    
    // Create admin user
    const adminUser = {
      username: "admin",
      password: await hashPassword("adminpass"),
      role: "admin" as const
    };
    
    const [newAdmin] = await db
      .insert(users)
      .values(adminUser)
      .returning();
    
    console.log("Created admin user:", newAdmin.username);
  } catch (error) {
    console.error("Error seeding admin user:", error);
  } finally {
    process.exit(0);
  }
}

seedAdmin();