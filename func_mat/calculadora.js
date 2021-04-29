let calculadora = {
    sumar: function(numeroA, numeroB){
        return numeroA + numeroB
    },
    restar: function(numeroA, numeroB){
        return numeroA - numeroB
    },
    multiplicar: function(numeroA,numeroB){
        return numeroA * numeroB
    },
    dividir: function(numeroA, numeroB){
        if (numeroB ==0){
        console.log('error porque es 0');
        return 0;
        }
        return numeroA / numeroB
    }
};

module.exports = calculadora;