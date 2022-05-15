var paciente = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){                //set Time Out es para que espere tiempo de ejecucion
        event.target.parentNode.remove(); //es el target el lugar donde estoy haciendo el click
                       // parentNode Sube la jerarquia 
    },500);
    
    
});

/*
paciente.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        this.remove();
    });
});
*/