/**
 * db is configured here
 * @module configuration/db
 */

const { MongoClient } = require('mongodb');
const _uri = process.env.MONGODB_URI;
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
