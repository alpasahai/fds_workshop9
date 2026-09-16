module.exports = function (db, app) {
  app.get('/api/getlist', async function (req, res) {

    const collection = db.collection('products');
    const data = await collection.find({}).toArray();
    
    res.send(data);
  });
};
