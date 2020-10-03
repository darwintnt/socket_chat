const { io } = require('../server/server');

io.on('connection', (client) => {

  console.log('Usuario conectado');

  client.emit('sendMessage', {
    usuario: 'Administrador',
    mensaje: 'Bienvenido a esta aplicación'
  });

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

});