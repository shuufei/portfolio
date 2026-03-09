import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const works = sqliteTable("works", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  imageUrl: text("image_url"),
  tags: text("tags"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
