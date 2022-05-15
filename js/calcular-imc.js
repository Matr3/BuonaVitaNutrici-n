var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++ ){
    var paciente = pacientes[i]; // para cada paciente 

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    pesoEsValida = validarPeso(peso);
    alturaEsValida = validarAltura(altura);

    if(!pesoEsValida){
        console.log("Peso Incorrecto");
        tdIMC.textContent = "Peso Incorrecto";
        pesoEsValida = false;
        paciente.classList.add("paciente-incorrecto"); //agrega la clase al paciente
    }
    if(!alturaEsValida){
        console.log("Altura Incorrecto");
        tdIMC.textContent = "Altura Incorrecto";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto"); //agrega la clase al paciente
    }

    if(pesoEsValida && alturaEsValida){
       
        tdIMC.textContent = calcularIMC(peso,altura)
    }
}

function calcularIMC(peso,altura){
    var imc = peso /(altura * altura);
    return imc.toFixed(2);
}

function validarPeso(peso){
    if((peso >= 0 ) && (peso < 1000)){
        return true;
    }else{
        return false;
    }
}

function validarAltura(altura){
    if((altura >= 0 ) && (altura < 3.00)){
        return true;
    }else{
        return false;
    }
}


