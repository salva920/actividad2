module.exports = function(app) { 
    var edificaciones = require('../edificaciones/procesos');
    app.post('/api/edificaciones', edificaciones.create);// para crear 
    app.get('/api/edificaciones', edificaciones.findAll);// mostras el contenido del arreglo
    app.get('/api/edificaciones/:id', edificaciones.findOne);// mostrar una estructura por medio de la id
    app.put('/api/edificaciones/:id', edificaciones.update); // actualizar o modificar una estructura en especifico hubicandola por medio de la ip
    app.delete('/api/edificaciones/:id', edificaciones.delete);// borrar una estructura
}