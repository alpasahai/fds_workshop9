const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
const dbName = 'mydb';

async function main() {
  await client.connect();
  console.log('We connected to MongoDB');

  const db = client.db(dbName);
  const collection = db.collection('products');

//   require('./add')(collection, client);
//   require('./read')(collection, client);
//   require('./update')(collection, client);
//   require('./remove')(collection, client);

}

main().catch(console.error);