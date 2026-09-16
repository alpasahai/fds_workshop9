module.exports = async function (collection, client) {
  await collection.drop().catch(() => {}); //This is to ignore error if collection doesn't exist yet

  const products = [
    { id: 1, name: 'miffy', description: 'PINK', price: 12.00, units: 20, type: 'Designer' },
    { id: 2, name: 'another miffy', description: 'NOT PINK', price: 12.00, units: 20, type: 'Designer' },
    { id: 3, name: 'labubu', description: 'BLUE', price: 2.00, units: 20, type: 'Designer' }
  ];

  const result = await collection.insertMany(products);
  console.log(`${result.insertedCount} products inserted`);
  client.close();
};
