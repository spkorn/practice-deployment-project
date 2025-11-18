// mikro-orm.config.ts
import { defineConfig } from '@mikro-orm/postgresql';

export default defineConfig({
  entities: ['./dist/**/*.entity.js'], // Path to your compiled entities
  entitiesTs: ['./src/**/*.entity.ts'], // Path to your TypeScript entities
  dbName: process.env.DB_NAME || 'app_db',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '54323'),
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  migrations: {
    allOrNothing: true,
    snapshot: false,
    path: './dist/migrations',
    pathTs: './src/migrations',
  },
});
