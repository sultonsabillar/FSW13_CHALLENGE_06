const app = require('./app');
const http = require('http');

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

// Running Server
server.listen(PORT, () => {
  console.info(`Server listening on port ${PORT} (http://localhost:${PORT})`)
});
