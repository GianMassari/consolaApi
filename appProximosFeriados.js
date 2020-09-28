const obtenerProximosFeriados = require("./libraryProximosFeriados");


//TE DEVUELVE LOS PROXIMOS FERIADOS QUE QUEDAN DEL AÑO SEGUN EL PAIS QUE INGRESES
let verFeriados = function (feriados) {
  feriados.forEach(element => {
    console.log("///////////////////////////////////////////");
    console.log("Fecha: " +element.date);
    console.log("Nombre local: " + element.localName);
    console.log("Nombre en ingles: " + element.name);
    console.log("Codigo del Pais " + element.countryCode);
    if (element.fixed == true) {
      console.log("El feriado se hace todos los años en la misma fecha");
    } else {
      console.log("El feriado no se hace en la misma fecha todos los años");
    }
    if (element.global == true) {
      console.log("El feriado es global");
    } else {
      console.log("El feriado no es global");
    }

    if (element.counties != null) {
      console.log(element.counties);
    }

    if (element.launchYear == null) {
      console.log("No hay fecha registrada");
    } else {
      console.log("Año de creacion: "+ element.launchYear);
    }
    
  });
}

let pais = "AR";

obtenerProximosFeriados(pais)
  .then((feriado) => {
    verFeriados(feriado);
  }).catch((err) => {
    console.log("no se encontro el pais");
  });