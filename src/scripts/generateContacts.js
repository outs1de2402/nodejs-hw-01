import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const amount = Number(process.argv[2]) || 1;

export async function generateContacts(count) {
  const contacts = await readContacts();
  const newContacts = Array.from({ length: count }, () => createFakeContact());
  const updated = [...contacts, ...newContacts];
  await writeContacts(updated);
  console.log(`✅  Додано ${count} контакт(и/ів). Тепер їх: ${updated.length}`);
}

generateContacts(amount);
