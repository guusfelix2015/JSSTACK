// eslint-disable-next-line import/no-extraneous-dependencies
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'ROOT',
  database: 'mycontacts',
});

client.connect();

// eslint-disable-next-line no-console

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
