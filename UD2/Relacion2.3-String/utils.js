function invierteCadena() {
  let cadena = "hola como estas";

  for (let i = cadena.length; i >= 0; i--) {
    document.write(cadena.charAt(i));
  }
}
