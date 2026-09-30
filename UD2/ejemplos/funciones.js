function devuelveLetra(dni){

    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
                    'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    
    if(dni < 99999999 && dni > 0){
        let res = dni % 23 ;
        let letra= letras[res];
        return letra;
    }else{
        return "El dni introducido no es correcto"
    }
}

function validaDNI(dni){
    let num = dni.slice(0, dni.length-1);
    let letra = dni.length-1
    let nueva= devuelveLetra(num);
    if(letra===nueva){
        return "true";
    }
    
}