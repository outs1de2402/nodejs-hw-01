const { writeContacts } = require('../utils/writeContacts');

async function removeAllContacts() {
  await writeContacts([]);
  console.log('🗑️  Усі контакти видалено.');
}

removeAllContacts();
