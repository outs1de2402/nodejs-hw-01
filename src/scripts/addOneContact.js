const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');
const { createFakeContact } = require('../utils/createFakeContact');

async function addOneContact() {
  const contacts = await readContacts();
  contacts.push(createFakeContact());
  await writeContacts(contacts);
  console.log(`✅  Додано 1 контакт. Всього: ${contacts.length}`);
}

addOneContact();
