import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Емуляція __dirname у ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Абсолютний шлях до db.json
export const PATH_DB = path.resolve(__dirname, '../db/db.json');
