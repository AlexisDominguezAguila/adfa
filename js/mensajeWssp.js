function enviarMensajeMessenger() {
    var urlMessenger = 'https://www.facebook.com/messages/t/206506682843987';
    window.open(urlMessenger, '_blank');
}

function enviarMensaje() {
    var numeroTelefono = '971358509';  
    var mensaje = encodeURIComponent('Hola, vengo de la Web y esta es mi ficha de inscripción para ser parte de la Academia');
    
    var urlMensaje = 'https://wa.me/' + numeroTelefono + '?text=' + mensaje;
    
    window.open(urlMensaje, '_blank');
}
