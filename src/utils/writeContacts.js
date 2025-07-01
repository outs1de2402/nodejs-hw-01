const fs = require('node:fs/promises');
const { PATH_DB } = require('../constants/contacts');

async function writeContacts(contacts) {
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
}

module.exports = { writeContacts };
