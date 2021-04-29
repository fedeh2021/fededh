let fs = require('fs');  // importo libreria para leer archivos de texto

function listarTareas(tareas){
    tareas.forEach(function(element){
        console.log(element)
    });
};

function agregarTarea(tareas,nuevaTarea){
    tareas.push(nuevaTarea);
    fs.writeFileSync('./servicios/tareas.js', JSON.stringify(tareas))
};

function borrarTarea(tareas,cod){
    tareas.filter(function(el){
        return el.codigo!=cod;
    })
    fs.writeFileSync('./servicios/tareas.js', JSON.stringify(tareas))
}

function tareasEstado(tareas,est){
    return tareas.filter(function(elemento){
        return elemento.estado == est;
    })
}

module.exports = {listarTareas,agregarTarea, borrarTarea, tareasEstado};
