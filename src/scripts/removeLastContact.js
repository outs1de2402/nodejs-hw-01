import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export async function removeLastContact() {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    console.log('ℹ️  Немає що видаляти: список порожній.');
    return;
  }
  const removed = contacts.pop();
  await writeContacts(contacts);
  console.log(
    `🗑️  Видалено останній контакт (${removed.name}). Залишилося: ${contacts.length}`,
  );
}

removeLastContact();
