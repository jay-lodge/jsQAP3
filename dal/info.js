const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Foodstuff',
  password: '9011',
  port: 5433,
});

const getItems = async () => {
  const { rows } = await pool.query('SELECT * FROM foods');
  return rows;
};

module.exports = {
  getItems,
};
