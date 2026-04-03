const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Optional: Add delay (simulate real API)
server.use((req, res, next) => {
  setTimeout(next, 500);
});

server.use(router);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log("JSON Server is running");
});