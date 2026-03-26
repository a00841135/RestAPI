import {db_connect} from "../utils/db.js"

export const getUsers = async (req, res) => {
    const sql = db_connect();
    const text = "select * from users";
    const result = await sql.query(text);

    res.json(result.rows);
};

export const getUser = async (req, res) => {
    const sql = db_connect();
    const id = req.params.id;
    const text = "select * from users where user_id=$1";
    const values = [id];
    const result = await sql.query(text, values);

    res.json(result.rows[0]);
};


export const postUser = async (req, res) => {
    const sql = db_connect();
    const { username, first_name, last_name, birthdate, password, email } = req.body;
    const text = "insert into users (username, first_name, last_name, birthdate, password, email) values($1, $2, $3, $4, $5, $6)";
    const values = [username, first_name, last_name, birthdate, password, email];
    const result = await sql.query(text, values);

    res.json(result);
};

export const putUser = async (req, res) => {
    const sql = db_connect();
    const id = req.params.id;
    const { username, first_name, last_name, birthdate, password, email } = req.body;
    const text = "update users set username=$1, first_name=$2, last_name=$3, birthdate=$4, password=$5, email=$6 where user_id=$7";
    const values = [username, first_name, last_name, birthdate, password, email, id];
    const result = await sql.query(text, values);

    res.json(result);
};
export const deleteUser = async (req, res) => {
    const sql = db_connect();
    const id = req.params.id;
    const text = "delete from users where user_id=$1";
    const values = [id];
    const result = await sql.query(text, values);

    res.json(result);
};