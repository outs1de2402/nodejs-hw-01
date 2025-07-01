const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');
const { createFakeContact } = require('../utils/createFakeContact');

// Кількість контактів береться з CLI (npm run generate 5) або 1 за замовчанням
const amount = Number(process.argv[2]) || 1;

async function generateContacts(count) {
  const contacts = await readContacts();
  const newContacts = Array.from({ length: count }, () => createFakeContact());
  const updated = [...contacts, ...newContacts];
  await writeContacts(updated);
  console.log(`✅  Додано ${count} контакт(и/ів). Тепер їх: ${updated.length}`);
}

generateContacts(amount);
