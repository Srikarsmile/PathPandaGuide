import { pgTable, text, serial, integer, boolean, timestamp, json, index } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User roles: regular or admin
export const userRoles = ["user", "admin"] as const;
export type UserRole = (typeof userRoles)[number];

// Users table with role
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role", { enum: userRoles }).default("user").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// User schema for insertion
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  role: true,
});

// Blog posts table
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
  imageAlt: text("image_alt").notNull(),
  category: text("category").notNull(),
  categoryColor: text("category_color").notNull(),
  date: timestamp("date").defaultNow().notNull(),
  authorId: integer("author_id").references(() => users.id).notNull(),
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Relations between blogPosts and users
export const blogPostsRelations = relations(blogPosts, ({ one }) => ({
  author: one(users, {
    fields: [blogPosts.authorId],
    references: [users.id],
  }),
}));

// Blog Post schema for insertion
export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Countries for interactive map
export const countries = pgTable("countries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  region: text("region").notNull(),
  flagEmoji: text("flag_emoji").notNull(),
  topUniversities: json("top_universities").$type<string[]>().notNull(),
  visaInfo: text("visa_info").notNull(),
  scholarships: json("scholarships").$type<string[]>().notNull(),
  costOfLiving: text("cost_of_living").notNull(),
  languageRequirements: text("language_requirements").notNull(),
  academicSystem: text("academic_system").notNull(),
  postGradOptions: text("post_grad_options").notNull(),
  featuredCities: json("featured_cities").$type<string[]>().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Country schema for insertion
export const insertCountrySchema = createInsertSchema(countries).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// University data for comparison
export const universities = pgTable("universities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  country: text("country").notNull(),
  tuition: text("tuition").notNull(),
  ranking: integer("ranking").notNull(),
  acceptanceRate: text("acceptance_rate").notNull(),
  studentsCount: text("students_count").notNull(),
  strengths: json("strengths").$type<string[]>().notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// University schema for insertion
export const insertUniversitySchema = createInsertSchema(universities).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Export types for use throughout the application
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;

export type Country = typeof countries.$inferSelect;
export type InsertCountry = z.infer<typeof insertCountrySchema>;

export type University = typeof universities.$inferSelect;
export type InsertUniversity = z.infer<typeof insertUniversitySchema>;
