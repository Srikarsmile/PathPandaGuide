import { users, type User, type InsertUser, blogPosts, type BlogPost, type InsertBlogPost, countries, type Country, type InsertCountry, universities, type University, type InsertUniversity } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import session from "express-session";
import connectPg from "connect-pg-simple";
import { pool } from "./db";

// PostgreSQL session store
const PostgresSessionStore = connectPg(session);

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Blog operations
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;
  
  // Country operations
  getAllCountries(): Promise<Country[]>;
  getCountryById(id: number): Promise<Country | undefined>;
  getCountryByName(name: string): Promise<Country | undefined>;
  createCountry(country: InsertCountry): Promise<Country>;
  updateCountry(id: number, country: Partial<InsertCountry>): Promise<Country | undefined>;
  deleteCountry(id: number): Promise<boolean>;
  
  // University operations
  getAllUniversities(): Promise<University[]>;
  getUniversityById(id: number): Promise<University | undefined>;
  getUniversityByName(name: string): Promise<University | undefined>;
  createUniversity(university: InsertUniversity): Promise<University>;
  updateUniversity(id: number, university: Partial<InsertUniversity>): Promise<University | undefined>;
  deleteUniversity(id: number): Promise<boolean>;
  
  // Session store
  sessionStore: session.Store;
}

export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;
  
  constructor() {
    this.sessionStore = new PostgresSessionStore({ 
      pool, 
      createTableIfMissing: true 
    });
  }
  
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Blog operations
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts);
  }
  
  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post;
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }
  
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db
      .insert(blogPosts)
      .values(post)
      .returning();
    return newPost;
  }
  
  async updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const [updatedPost] = await db
      .update(blogPosts)
      .set(post)
      .where(eq(blogPosts.id, id))
      .returning();
    return updatedPost;
  }
  
  async deleteBlogPost(id: number): Promise<boolean> {
    const result = await db
      .delete(blogPosts)
      .where(eq(blogPosts.id, id));
    return true;
  }
  
  // Country operations
  async getAllCountries(): Promise<Country[]> {
    return await db.select().from(countries);
  }
  
  async getCountryById(id: number): Promise<Country | undefined> {
    const [country] = await db.select().from(countries).where(eq(countries.id, id));
    return country;
  }
  
  async getCountryByName(name: string): Promise<Country | undefined> {
    const [country] = await db.select().from(countries).where(eq(countries.name, name));
    return country;
  }
  
  async createCountry(country: InsertCountry): Promise<Country> {
    // Ensure arrays are properly formatted before inserting
    const countryData = {
      ...country,
      topUniversities: Array.isArray(country.topUniversities) ? country.topUniversities : [],
      scholarships: Array.isArray(country.scholarships) ? country.scholarships : [],
      featuredCities: Array.isArray(country.featuredCities) ? country.featuredCities : []
    };
    
    const [newCountry] = await db
      .insert(countries)
      .values(countryData)
      .returning();
    return newCountry;
  }
  
  async updateCountry(id: number, country: Partial<InsertCountry>): Promise<Country | undefined> {
    // Ensure arrays are properly formatted before updating
    const countryData: Partial<InsertCountry> = { ...country };
    
    if (country.topUniversities) {
      countryData.topUniversities = Array.isArray(country.topUniversities) 
        ? country.topUniversities 
        : [];
    }
    
    if (country.scholarships) {
      countryData.scholarships = Array.isArray(country.scholarships) 
        ? country.scholarships 
        : [];
    }
    
    if (country.featuredCities) {
      countryData.featuredCities = Array.isArray(country.featuredCities) 
        ? country.featuredCities 
        : [];
    }
    
    const [updatedCountry] = await db
      .update(countries)
      .set(countryData)
      .where(eq(countries.id, id))
      .returning();
    return updatedCountry;
  }
  
  async deleteCountry(id: number): Promise<boolean> {
    const result = await db
      .delete(countries)
      .where(eq(countries.id, id));
    return true;
  }
  
  // University operations
  async getAllUniversities(): Promise<University[]> {
    return await db.select().from(universities);
  }
  
  async getUniversityById(id: number): Promise<University | undefined> {
    const [university] = await db.select().from(universities).where(eq(universities.id, id));
    return university;
  }
  
  async getUniversityByName(name: string): Promise<University | undefined> {
    const [university] = await db.select().from(universities).where(eq(universities.name, name));
    return university;
  }
  
  async createUniversity(university: InsertUniversity): Promise<University> {
    // Ensure arrays are properly formatted before inserting
    const universityData = {
      ...university,
      strengths: Array.isArray(university.strengths) ? university.strengths : []
    };
    
    const [newUniversity] = await db
      .insert(universities)
      .values(universityData)
      .returning();
    return newUniversity;
  }
  
  async updateUniversity(id: number, university: Partial<InsertUniversity>): Promise<University | undefined> {
    // Ensure arrays are properly formatted before updating
    const universityData: Partial<InsertUniversity> = { ...university };
    
    if (university.strengths) {
      universityData.strengths = Array.isArray(university.strengths) 
        ? university.strengths 
        : [];
    }
    
    const [updatedUniversity] = await db
      .update(universities)
      .set(universityData)
      .where(eq(universities.id, id))
      .returning();
    return updatedUniversity;
  }
  
  async deleteUniversity(id: number): Promise<boolean> {
    const result = await db
      .delete(universities)
      .where(eq(universities.id, id));
    return true;
  }
}

export const storage = new DatabaseStorage();
