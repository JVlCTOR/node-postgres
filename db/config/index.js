import pg from 'pg';
import 'dotenv/config.js'

const { Pool } = pg;

console.log('Enviroments',process.env);
export const config = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: 5432,
    ssl: { rejectUnauthorized: false } // Opção para permitir conexões sem SSL
});