let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  };
}

const { Pool } = require("pg");
const db = new Pool(dbParams);


const testFunction = () => {
  console.log("In test function");
  console.log("DB:", db);
  return db
    .query(
      `SELECT * FROM test_users;`
    )
    .then((result) => {
      console.log(result);
      return;
    })
    .catch((err) => console.error(err.stack));
};

console.log(dbParams);

module.exports = {
db,
testFunction
}