let fs = require('fs');  // importo libreria para leer archivos de texto

function listarTareas(tareas){
    tareas.forEach(function(elemento){
        console.log(elemento.titulo)
    });
};

function agregarTarea(tareas,nuevaTarea){ //tareas anteriores y la nueva
    tareas.push(nuevaTarea);// sumar el elemento al final
    fs.writeFileSync('./servicios/tareas.json', JSON.stringify(tareas,null, ' '));// descodifica para poder guardarlo con stringfy
};

function borrarTarea(tareas,cod){
    let tareas2 = tareas.filter(function(elemento){//filtra y las que cumpplen la condicion los guarda en otra variable
        return elemento.codigo!=cod; //condicion para el filtro
    });
    fs.writeFileSync('./servicios/tareas.json', JSON.stringify(tareas2, null, ' '))
    return tareas2;
};

function tareasEstado(tareas,est){ // para todas las tareas le paso un estado
    let tareas2 = tareas.filter(function(elemento){ // filtra y guarda en una nueva variable
        return elemento.estado == est; // condicion
    });
    return tareas2;
};

module.exports = {listarTareas,agregarTarea, borrarTarea, tareasEstado};
