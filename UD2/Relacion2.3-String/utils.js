function invierteCadena(cadena) {

  let nueva = "";

  for (let i = cadena.length - 1; i >= 0; i--) {
    nueva += cadena.charAt(i);
  }

  return "a. La cadena invertida es: " + nueva;
}

function inviertePalabras(cadena) {

  let nueva = cadena.split(" ");
  let final = " ";

  for (let i = 0; i < nueva.length; i++) {

    let letra = nueva[i];

    for (let x = letra.length - 1; x >= 0; x--) {
      final += letra.charAt(x);
    }
    final += " ";
  }

  return "<br>b. La cadena con sus letras invertidas es: " + final;
}

function encuentraPalabraMasLarga(cadena) {

  let nueva = cadena.split(" ");
  let larga = " ";

  for (let i = 0; i < nueva.length; i++) {
    if (nueva[i].length > larga.length) {
      larga = nueva[i];
    }
  }

  return "<br>c. La palabra mas larga de la cadena es: " + larga;
}

function filtraPalabrasMasLargas(cadena, i) {

  let nueva = cadena.split(" ");
  let larga = " ";

  for (let x = 0; x < nueva.length; x++) {
    if (nueva[x].length >= i)
      larga += nueva[x] + " ";
  }

  return "<br>d. Las palabras mas largas que " + i + " son: " + larga
}

function cadenaBienFormada(cadena) {

  let separa = cadena.split(" ");
  let nueva = " ";

  for (let i = 0; i < separa.length; i++) {

    let mayuscula = separa[i].charAt(0).toUpperCase() + separa[i].slice(1);
    nueva += mayuscula + " ";
  }

  return "<br>e.  La cadena bien formada es: " + nueva;
}

function informacionCadena(cadena) {

  let contMayu = 0;
  let contMin = 0;
  let nuevaCadena = cadena.split("");

  for (let i = 0; i < nuevaCadena.length; i++) {
    if (nuevaCadena[i].toLowerCase() !== nuevaCadena[i].toUpperCase()) {
      if (nuevaCadena[i] == nuevaCadena[i].toUpperCase())
        contMayu++;
      //hago nuevo if, para que descarte los espacios " "
      else if (nuevaCadena[i] === nuevaCadena[i].toLowerCase())
        contMin++;
    }
  }

  if (contMayu > 0 && contMin > 0)
    return "La cadena tiene mayusculas y minusculas"
  else if (contMayu > 0 && contMin == 0)
    return "La cadena esta compuesta exclusivamente por mayusculas"
  else
    return "La cadena esta compuesta exclusivamente por minusculas"
}

function localizaSubcadena(cadena, subcadena) {
  cadena = cadena.toLowerCase();
  subcadena= subcadena.toLowerCase();

  let res = "";
  let pos = cadena.search(subcadena);

  while (pos !== -1 ) {

    res += pos + " ";

    cadena = cadena.replace(subcadena,"");

    pos = cadena.search(subcadena);

  }

  return "La subcadena se encuentra en la posicion: " + res;
}

function separaVocales(cadena){

  let cadenaNueva= cadena.replaceAll(" ", "").toLowerCase();
  let vocales = 'aeiou';
  let vocal = "";
  let consonante = "";

  for (let i = 0; i< cadenaNueva.length; i++){
    if ( vocales.includes(cadenaNueva.charAt(i))){
      vocal += cadenaNueva.charAt(i)
    }else
      consonante += cadenaNueva.charAt(i)
  }
  let frase = consonante + vocal;
  return frase;
}




