/**
 * db is configured here
 * @module configuration/db
 */

const { MongoClient } = require('mongodb');
const _uri = "mongodb+srv://RamGupta:Ramgupta@123@movieappproject.vzkl4.mongodb.net/sample_mflix?retryWrites=true&w=majority";

/**
 * @function dbConnection
 * @param {string} collection - collection name
 * @param {callback} callback - callback for db operations
 * @param {string} [coll2] - collection name
 */

const dbConnection = (collection, callback) => {
    MongoClient.connect(_uri)
    .then(async client => {
        const db = client.db('sample_mflix').collection(collection);
        await callback(db);
        client.close();
    })
}

// dbConnection('movies', async (db) => {
//     const movie = await db.findOne();
//     console.log(movie);
// })

module.exports = dbConnection
