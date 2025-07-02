import { readContacts } from '../utils/readContacts.js';

export async function getAllContacts() {
  const contacts = await readContacts();
  console.table(contacts);
  console.log(`ℹ️  Усього контактів: ${contacts.length}`);
}

getAllContacts();
