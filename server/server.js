const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      http = require('http').Server(app),
      { MongoClient, ObjectId } = require('mongodb'),
      client = new MongoClient('mongodb://localhost:27017');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

const dbName = 'mydb';

async function main() {
  await client.connect();
  const db = client.db(dbName);

  require('./routes/api_add.js')(db, app);
  require('./routes/api_prodcount.js')(db, app);
  require('./routes/api_get.js')(db, app);
  require('./routes/api_update.js')(db, app, ObjectId);
  require('./routes/api_delete.js')(db, app, ObjectId);

  http.listen(3000, () => console.log('Server listening on http://localhost:3000'));
}

main();

