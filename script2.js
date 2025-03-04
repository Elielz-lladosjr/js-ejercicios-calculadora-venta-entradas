let edad = prompt("Introduce tu edad:");

if (isNaN(edad) || edad <= 0 || edad.trim() === "") {
    alert("Por favor, introduce una edad válida.");
} else {
    edad = parseInt(edad);

    let mensaje;
    if (edad < 12) {
        mensaje = "La entrada es gratuita.";
    } else if (edad >= 12 && edad <= 18) {
        mensaje = "La entrada es a precio reducido.";
    } else {
        mensaje = "La entrada es a precio completo.";
    }

    alert(mensaje);
}
