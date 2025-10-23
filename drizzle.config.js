import { ENV } from "./src/config/env";

export default {
    dialect: "postgresql",
    schema: "./src/db/schema.js",
    out: "./src/db/migrations",
    dbCredentials: {
        url: ENV.DATABASE_URL
    }
}