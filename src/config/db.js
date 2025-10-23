import { drizzle } from "drizzle-orm/neon-http";

import { ENV } from "./env.js";
import * as schema from "../db/schema.js";
import { neon } from "@neondatabase/serverless";

const sql = neon(ENV.DATABASE_URL)
export const db = drizzle(sql, { schema })