const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        let cantidad = document.getElementById('cantidad').value;
        let marca = document.getElementById('marca').value;
        let redes = document.getElementById('redes').value;
        let info = document.getElementById('info').value;
        let direcciones = document.getElementById('direcciones').value;
        let telefono = document.getElementById('telefono').value;
        let entrega = document.getElementById('entrega').value;

        let mensaje = document.getElementById('mensaje').value;
        let numero= 5491159436971;
        
var win= window.open(`https://wa.me/${numero}?text=
Hola%20soy%20*${nombre}*%20Estos%20son%20mi%20datos%20para%20mi%20volantes,%20Gracias.%20%E2%98%BA%EF%B8%8F%20%0A
*Cantidad:*%20${cantidad}%0A
*Nombre%20de%20Marca:*%20${marca}%0A
*Redes%20Sociales:*%20${redes}%0A
*Info:*%20${info}%0A
*Direcion:*%20${direcciones}%0A
*Telefono:*%20${telefono}%0A
*Direccion%20de%20entrega:*%20${entrega},%0A
*Detalle:*%20${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)