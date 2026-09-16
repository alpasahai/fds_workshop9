module.exports = async function (collection, client) {
  const result = await collection.updateOne(
    { id: 1 },
    { $set: { price: 9.50, type: 'MEGA DESIGNER' } }
  );

  console.log(`${result.modifiedCount} have been updated`);
  client.close();
};
