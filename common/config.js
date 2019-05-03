const port = process.env.NODE_ENV != 'development' ? 80 : 3000;
const host = "silly-chat.localtest.me";

module.exports = {
  port,
  host,
  uri: `http://${host}:${port}`,
};
