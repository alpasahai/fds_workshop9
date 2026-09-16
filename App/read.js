module.exports = async function (collection, client) {
  const products = await collection.find({}).toArray();

  console.log(products);
  client.close();
};
