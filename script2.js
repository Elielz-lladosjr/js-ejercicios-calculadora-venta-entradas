// Pedir la edad del usuario
let edad = prompt("Introduce tu edad:");

// Validar la entrada
if (isNaN(edad) || edad <= 0 || edad.trim() === "") {
    alert("Por favor, introduce una edad válida.");
} else {
    edad = parseInt(edad);

    // Calcular precio de la entrada
    let mensaje;
    if (edad < 12) {
        mensaje = "La entrada es gratuita.";
    } else if (edad >= 12 && edad <= 18) {
        mensaje = "La entrada es a precio reducido.";
    } else {
        mensaje = "La entrada es a precio completo.";
    }

    // Mostrar el mensaje al usuario
    alert(mensaje);
}
