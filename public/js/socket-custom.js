const socket = io();

socket.on('connect', function() {
  console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {

  console.log('Perdimos conexión con el servidor');

});


// Enviar información
socket.emit('sendMessage', {
  usuario: 'Darwin',
  mensaje: 'Hola Mundo'
}, function(resp) {
  console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('sendMessage', function(msg) {

  console.log('Servidor:', msg);

});