const http = require("http");
const chalk = require("chalk");
const log = console.log;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("See the console!!!");
});

log(
  chalk.blue("Kedji") +
    " " +
    chalk.cyan("Boris") +
    " " +
    chalk.red("Gaelle") +
    " " +
    chalk.green("Julien") +
    " " +
    chalk.grey("Maxime")
);

const port = 3000;

server.listen(port);
