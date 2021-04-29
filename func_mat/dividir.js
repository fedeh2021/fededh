function dividir(numero1, numero2){
    if (numero2 ==0){
        console.log('error porque es 0');
        return 0;
    }
    return numero1 / numero2
}

module.exports = dividir;