import pool from "./pool.js";

async function getAllUsernames() {
  const {rows} = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertIntoUsernames(username) {
  await pool.query(
    "INSERT INTO usernames (username) VALUES ($1)",
    [username]
  )
}

export {getAllUsernames, insertIntoUsernames}