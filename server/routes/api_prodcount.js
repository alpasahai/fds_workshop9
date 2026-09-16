module.exports = function (db, app) {
  app.get('/api/prodcount', async function (req, res) {

    const collection = db.collection('products');
    const count = await collection.countDocuments();

    res.send({ count: count });
  });
};
