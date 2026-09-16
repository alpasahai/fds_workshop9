module.exports = async function (collection, client) {
  const result = await collection.deleteOne({ id: 3 });

  console.log(`${result.deletedCount} has been deleted`);
  client.close();
};
