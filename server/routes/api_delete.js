module.exports = function (db, app, ObjectId) {
  app.post('/api/deleteitem', async function (req, res) {

    if (!req.body) return res.sendStatus(400);
    const objectid = new ObjectId(req.body.productid);
    const collection = db.collection('products');

    await collection.deleteOne({ _id: objectid });
    const data = await collection.find({}).toArray();

    res.send(data);
  });
};
