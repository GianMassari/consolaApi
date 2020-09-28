const obtenerFinSemana = require("./libraryFinSemana");

//TE MUESTRA TODOS LOS FIN DE SEMANA LARGOS DEL PAIS Y AÑO INGRESADO
let verFinDeSemana = function (finDeSemana) {
     finDeSemana.forEach(element => {
         console.log("///////////////////////////////");
      console.log("Fecha de inicio del Fin de semana Largo: "+element.startDate);
      console.log("Fecha de fin del Fin de semana Largo: "+element.endDate);
      console.log("Cuantos dias en total son: "+element.dayCount);
      if(element.needBridgeDay==true){
        console.log("Es necesario que haya Feriado puente");
      }else{
        console.log("No es necesario que haya Feriado puente");
      }
  });

}


let anio = "2020";
let pais = "AR";

obtenerFinSemana(anio, pais)
  .then((finDeSemana) => {
    verFinDeSemana(finDeSemana);
  }).catch((err) => {
    console.log("no se encontro el pais");
  });