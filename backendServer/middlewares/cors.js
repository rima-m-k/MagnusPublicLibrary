const cors = require('cors');

const corsMiddleware = cors({
  origin: 'https://magnuspubliclibrary.tech',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
});

module.exports = corsMiddleware;

