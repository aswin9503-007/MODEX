const redis = require('redis');
const client = redis.createClient();

client.connect(); // CONNECT REDIS

client.on('connect', async () => {
  console.log('Connected to Redis');

  const jsonData = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
  };

  await client.set('jsondata', JSON.stringify(jsonData));

  const cachedData = await client.get('jsondata');

  if (cachedData) {
    console.log('Cached JSON data:', JSON.parse(cachedData));
  } else {
    console.log('Data not found in cache.');
  }

  client.quit();
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});
