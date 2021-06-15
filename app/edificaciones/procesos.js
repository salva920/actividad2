var edificaciones = {
    edificacion1: {
        id: 1,
        clase: "Estacionamiento",
        metros_cuadrados: "10.000 m2",
        ciudad: "valera"
    },
    edificacion2: {
        id: 2,
        clase: "Apartamento",
        metros_cuadrados: "80 m2",
        ciudad: "valera"
    },
    edificacion3: {
        id: 3,
        clase: "gasolinera",
        metros_cuadrados: "300 m2",
        ciudad: "valera"
    },
    edificacion4: {
        id: 4,
        clase: "C.C Plaza",
        metros_cuadrados: "3500 m2",
        pisos: 9,
        ciudad: "valera"
    },
    edificacion5: {
        id: 5,
        clase: "galpon de la kell",
        metros_cuadrados: "1000 m2",
        ciudad: "valera"
    }
}

exports.create = function(req, res) {
    var newEdificacion = req.body;
    edificaciones["edificacion" + newEdificacion.id] = newEdificacion;
    console.log("Nueva Edificacion:\n" + JSON.stringify(edificaciones, null, 4));
    res.status(201).end("edificacion creada!!: \n" + JSON.stringify(newEdificacion, null, 4));
};

exports.delete = function(req, res) {
    var deleteEdificacion = edificaciones["edificacion" + req.params.id];
    delete edificaciones["edificacion" + req.params.id];
    console.log(" edificacio list:\n" + JSON.stringify(edificaciones, null, 4));
    res.status(200).end("Edificacion Eliminada exitosamente!: \n" + JSON.stringify(deleteEdificacion, null, 4));
};

exports.findAll = function(req, res) {
    console.log("funcion FindAll: \n" + JSON.stringify(edificaciones, null, 4));
    res.status(200).end("Todas las edificaciones: \n" + JSON.stringify(edificaciones, null, 4));
};

exports.findOne = function(req, res) {
    var id = parseInt(req.params.id);
    var edificacion = edificaciones["edificacion" + req.params.id];
    if (edificaciones["edificacion" + id] != null) {
        console.log("hallar edificacion: \n" + JSON.stringify(edificacion, null, 4));
        res.status(200).end("Esta es la edificacion que solicitaste:\n" + JSON.stringify(edificacion, null, 4));
    } else {
        res.status(404).end("Lo siento! no existe la edificacion que solicitaste ");
    }
};

exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updatedEdificacion = req.body;
    if (edificaciones["edificacion" + id] != null) {
        edificaciones["edificacion" + id] = updatedEdificacion;
        console.log("Edificacion actualizada!!!!: \n" + JSON.stringify(edificaciones, null, 4))
        res.status(200).end("Edificacion actualizada!! \n" + JSON.stringify(updatedEdificacion, null, 4));
    } else {
        res.status(404).end("No se pudo actualizar, verifique la id que desea actualizar e intente de nuevo\n");
    }
};