
/*DECLARACION DE VARIABLES*/
var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var sexo = document.getElementById("sexo")
var Telefono = document.getElementById("telefono")
var email = document.getElementById("email")
var mensaje = document.getElementById("mensaje")
var termino = document.getElementById("termino")
var error = document.getElementById("Error")


/*DECLARACION DE LAS FUNCIONES PARA VALIDAR*/
function EnviarForm(){
    console.log('Enviando Formulario..');
    
    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingrese su Nombre');
    }

    if(apellido.value === null || apellido.value === ''){
        mensajesError.push('Ingrese su Apellido');
    }

    if(sexo.value === false || sexo.value === ''){
        mensajesError.push('Indique su sexo');
    }

    if(Telefono.value === null || Telefono.value === ''){
        mensajesError.push('Indique su numero de telefono');
    }

    if(mensaje.value === null || mensaje.value === ''){
        mensajesError.push('Indique la razon de su contacto');
    }

    if(termino.value === false || termino.value === ''){
        mensajesError.push('Debe validar los terminos de su contacto');
    }

    error.innerHTML = mensajesError.join(', ');

    return false;

}
