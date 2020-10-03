const express = require('express');
const app = express();
const path = require('path');


// Implement Socket.io
const socketIO = require('socket.io');
const http = require('http');
let server = http.createServer(app);

// Backend comunication
module.exports.io = socketIO(server);

require('../sockets/socket');

const publicPath = path.resolve(__dirname, '../../public');

const port = process.env.PORT || 4000;

app.use(express.static(publicPath));






server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);
  console.log(`conectado por el puerto ${process.env.PORT}`);
});