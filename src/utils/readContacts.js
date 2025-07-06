import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function readContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}
