// Middleware pour insérer dans la base de donnée des informations de visiteurs
// la date de la visite, l'url de la page visitée et l'ip du visiteur
// Il faut une table "log" dans la base de donnée


// A décommenter si base de donnée active
/*
const pool = require("../modules/client");

const log = async function(req, res, next){
    const text = `INSERT INTO "log" ("time", "url", "ip") VALUES ($1, $2, $3) RETURNING *`;
    const values = [
        new Date(),
        req.url,
        req.ip
    ];
    try {
        const { rows } = await pool.query(text, values);
        console.log(rows);
        next();
      } catch (err) {
        console.error(err);
        next(err);
      }
}

module.exports = log
*/