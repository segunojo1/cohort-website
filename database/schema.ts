import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const subscribersTable = pgTable("subscribers", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});
