import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts';

async function writeContacts(contacts) {
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
}

module.exports = { writeContacts };
