const port = process.env.NODE_ENV != 'development' ? 80 : 3000;
const host = "scoreboard.evileeyore.com";

module.exports = {
  port,
  host,
  uri: `http://${host}:${port}`,
};
