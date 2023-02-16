const http = require("http");
const gracefulShutdown = require("http-graceful-shutdown");

const server = http.createServer((req, res) => {
    setTimeout(() => {
      res.write("Server is running!");
      res.end();
    }, 20000);
  });
  
  server.listen(3333);
  
  gracefulShutdown(server);