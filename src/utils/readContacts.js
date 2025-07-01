const fs = require('node:fs/promises');
const { PATH_DB } = require('../constants/contacts');

async function readContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

module.exports = { readContacts };
