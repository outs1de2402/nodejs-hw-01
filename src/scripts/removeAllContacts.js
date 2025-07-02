import { writeContacts } from '../utils/writeContacts.js';

export async function removeAllContacts() {
  await writeContacts([]);
  console.log('🗑️  Усі контакти видалено.');
}

removeAllContacts();
